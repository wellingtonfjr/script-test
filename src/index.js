var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const { renderBoxOptinWallet } = require('./optin/optin')
const { verifyEmailExistWallet } = require('./login/login')
const { getUserById, createdUser } = require('./services/api')

renderNext = () => {
  console.log('renderNext=>')
  // const response = veifyUserExist(window.LS?.cart?.contact?.)
  renderBoxOptinWallet()
}

closeOrder = (event, data) => {
  const isAcceptWallet = jQuery('#isAcceptWallet')[0].checked || false
  const phoneWallet = jQuery('#phoneWallet').val()
  
  console.log('closeOrder data=>', data)
  if (isAcceptWallet) {
    const response = createdUser(data)
    console.log('response Created', response)
  }
  console.log('Cadastro do email: ', isAcceptWallet, 'e telefone: ', phoneWallet)
}

updateErrorPhone = (event, isValidPhone) => {
  jQuery("#errorPhoneLabel").css("display", isValidPhone ? "none" : "block")
}

registerBlurInputEmail = (email) => {
  verifyEmailExistWallet(email)
}

if(typeof window === 'object') {
  window.SDKCheckout.subscribeEvent('RENDER_NEXT', renderNext)
  window.SDKCheckout.subscribeEvent('CLOSE_ORDER', closeOrder)
  window.SDKCheckout.subscribeEvent('RETURN_VALIDATE_PHONE', updateErrorPhone)
  phoneLS = window.LS?.cart?.contact?.phone

  window.onload = () => {
    window.SDKCheckout.publishEvent('BLOCK_VALIDATE_EMAIL', true)
    registerBlurInputEmail()

    document.querySelector("input[id='contact.email']").addEventListener("blur", (e) => registerBlurInputEmail(e.target.value));
  }
}

validatePhone = (phoneValue) => {
  window.SDKCheckout.publishEvent('VALIDATE_PHONE', phoneValue)
}


// start Login //
validateAccessCode = async () => {
  var email = jQuery("[id|='contact.email']").val()
  var codeConfirmation = jQuery('#code_confirmation').val()
  console.log('email, codeConfirmation====>', email, codeConfirmation)


  if (codeConfirmation === '123') {
    const response = await getUserById(4)
    console.log('response getUser', response)
    // Controller Error CodeConfirmation errorCodeAppWallet
    if (response.code === 200) {
      window.SDKCheckout.publishEvent('RETURN_CUSTOMER_ADDRESS', response.user)
    } else {
      console.log('error response')
    }
  }
}

openModalLogin = () => {
  var email = jQuery("[id|='contact.email']").val()
  jQuery("body").append(jQuery(`
    <div id="modalAppWallet" class="modal fade show">
      <div
        class="modal-backdrop fade show"
        onClick="closeModalApp()"
        role="dialog"
        tabIndex={-1}
      />

      <div class="modal-dialog">
        <div
          class="modal-header"
        >
          <h5 class="modal-title">Titulo Modal</h5>
          <button onClick="closeModalApp()" type="button" class="modal-close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="content-modal-buy-fast">
          <div class="box-resent-code row">
            <div class="col-12 text-small m-top-none">
              <span class="break-line">
                Copie y pegue el código de 6 dígitos enviado a <strong>${email}</strong>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-8">
              <div class="form-group input-lg">
                <div class="has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    name="code_confirmation"
                    placeholder=" "
                    autocomplete="on"
                    autocapitalize="on"
                    id="code_confirmation"
                    aria-labelledby="code_confirmation"
                    value=""
                  >
                    <label class="input-label" id="code_confirmation" for="code_confirmation">Código de acceso</label>
                </div>
              </div>

              <div id="errorCodeAppWallet" class="error col-12">
                <div class="alert alert-danger-bagged">
                  <span></span>
                </div>
              </div>
            </div>
            <button type="link" id="" class="col-12 col-sm-4 text-small m-top-none btn-resend-code btn btn-link btn-disabled" tabindex="0" disabled="">
              <span>
                <svg class="icon-btn-resend-code" width="20px" height="20px" viewBox="0 0 1024 1024">
                  <path d="M752.869 271.058C683.323 201.511 584.763 161.405 476.389 172.498C319.803 188.285 190.949 315.431 173.456 472.018C149.989 678.951 309.989 853.458 511.803 853.458C647.909 853.458 764.816 773.671 819.429 658.898C833.083 630.311 812.603 597.458 781.029 597.458C765.243 597.458 750.309 605.991 743.483 620.071C695.269 723.751 579.643 789.458 453.349 761.298C358.629 740.391 282.256 663.165 262.203 568.445C226.363 402.898 352.229 256.125 511.803 256.125C582.629 256.125 645.776 285.565 691.856 332.071L627.429 396.498C600.549 423.378 619.323 469.458 657.296 469.458H810.469C833.936 469.458 853.136 450.258 853.136 426.791V273.618C853.136 235.645 807.056 216.445 780.176 243.325L752.869 271.058V271.058Z">
                  </path>
                </svg>
                <div class="text-btn-resend-code">Reenviar código</div>
              </span>
            </button>
          </div>
          <div class="footer-modal-smart-sign-in-v3">
            <button
              type="button"
              id=""
              class="pull-right text-uppercase m-top-half btn btn-primary"
              tabindex="0"
              data-testid="btnStartSessionLogIn"
              onClick="validateAccessCode()"
            >
              <span>Continuar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `));
}

// end Login //


(function () {
  console.log('App Wallet')
  // registerBlurInputEmail()

  sendCodeToCustumer = (email) => {
    // implement api to send code to email
  }

  verifyCode = (code, email) => {
    // implement api to verify code and email
  }


  closeModalApp = () => {
    jQuery("#modalAppWallet").remove()
  }
  openModal = (title, content) => {
    jQuery("body").append(jQuery(`
      <div id="modalAppWallet" class="modal fade show">
        <div
          class="modal-backdrop fade show"
          onClick="closeModalApp()"
          role="dialog"
          tabIndex={-1}
        />
  
        <div class="modal-dialog">
          <div
            class="modal-header"
          >
            <h5 class="modal-title">${title}</h5>
            <button onClick="closeModalApp()" type="button" class="modal-close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
  
          <div class="content-modal">
            ${content}
              <div class="col-12" style="text-align: right">
                <button onClick="closeModalApp()" type="button" id="" class="text-uppercase m-top-half m-bottom-half btn btn-primary" tabindex="0">
                  <span>OK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `))
  }
})();
