var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const { renderBoxOptinWallet } = require('./optin/optin')
const { verifyEmailExistWallet } = require('./login/login')
const { createdUser, sendToken, authToken, verifyUserExist } = require('./services/api')

renderNext = async () => {
  console.log('renderNext=>')
  const response = await verifyUserExist(window.LS?.cart?.contact?.email)
  if(!response?.registered_email) renderBoxOptinWallet()
}

closeOrder = async (event, data) => {
  const response = await verifyUserExist(window.LS?.cart?.contact?.email)
  if(!response?.registered_email) {  
    const isAcceptWallet = jQuery('#isAcceptWallet')[0].checked || false
    const phoneWallet = jQuery('#phoneWallet').val()
    
    console.log('closeOrder data=>', data)
    if (isAcceptWallet) {
      const response = createdUser(data)
      console.log('response Created', response)
    }
    console.log('Cadastro do email: ', isAcceptWallet, 'e telefone: ', phoneWallet)
  }
}

updateErrorPhone = (event, isValidPhone) => {
  jQuery("#errorPhoneLabel").css("display", isValidPhone ? "none" : "block")
}

registerBlurInputEmail = (email) => {
  verifyEmailExistWallet(email)
}

clickOnBtnSubmitZipcode = () => {
  const btnSubmitZipcode = jQuery("[data-testid|='btnSubmitZipcode']")
  if (Boolean(btnSubmitZipcode.length)) btnSubmitZipcode.click()
}

if(typeof window === 'object') {
  window.SDKCheckout.subscribeEvent('RENDER_NEXT', renderNext)
  window.SDKCheckout.subscribeEvent('CLOSE_ORDER', closeOrder)
  window.SDKCheckout.subscribeEvent('RETURN_VALIDATE_PHONE', updateErrorPhone)
  window.SDKCheckout.subscribeEvent('CLICK_ON_BTN_SUBMIT_ZIPCODE', clickOnBtnSubmitZipcode)
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
mountUser = (userResponse) => {
  const keys = [
    'zipcode',
    'first_name',
    'last_name',
    'address',
    'number',
    'floor',
    'locality',
    'city',
    'state',
    'country',
    'phone',
    'between_streets',
    'reference'
  ]
  const addresses = userResponse.address
  let address = {}
  let user = {
    contact_name: userResponse.name,
    contact_phone: userResponse.phone,
    // contact_accepts_marketing: true,
  }
  addresses.map(item => {
    keys.map((key) => {
      address = {
        ...address, [`${item.type}_${key}`]: `${item[key]}` || null
      }
      return true
    })    
  })
  console.log('returned===>', { user, ...address })
  return  { ...user, ...address }
}

validateAccessCode = async () => {
  jQuery("#errorCodeConfirmationLabel").css("display", "none")
  var email = jQuery("[id|='contact.email']").val()
  var codeConfirmation = jQuery('#code_confirmation').val()
  console.log('email, codeConfirmation====>', email, codeConfirmation)

  const responseAuthToken = await authToken(email, codeConfirmation)
  
  if (responseAuthToken?.user) {
    const user = mountUser(responseAuthToken?.user)
    console.log('response getUser', user)

    if (responseAuthToken.status === 200) {
      jQuery("#modalAppWallet").remove()
      jQuery("#buyMoreFaster").remove()
      window.SDKCheckout.publishEvent('RETURN_CUSTOMER_ADDRESS', user)
    } else {
      console.log('error response')
    }
  } else {
    jQuery("#errorCodeConfirmationLabel").css("display", "block")
    console.log('not Auth Token', responseAuthToken)
  }
}

openModalLogin = () => {
  var email = jQuery("[id='contact.email']").val()
  sendToken()
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
          <h5 class="modal-title">
          <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4076 0C17.4038 0 17.3998 0 17.3959 0C17.392 0 17.3881 0 17.3842 0C14.8276 0.00399334 12.396 1.03035 10.5783 2.83545C9.64788 2.43211 8.64715 2.22444 7.6112 2.22444C3.41664 2.22444 0 5.71085 0 9.99997C0 14.2891 3.41664 17.7795 7.61514 17.7795C8.63539 17.7795 9.64006 17.5679 10.5744 17.1645C12.3374 18.9177 14.7455 19.9999 17.3959 19.9999C22.7946 19.9999 27.1846 15.5152 27.1846 9.99997C27.1846 4.4928 22.7984 0.00798739 17.4076 0ZM17.392 17.7795C13.1935 17.7795 9.77693 14.2891 9.77693 9.99997H7.59951C7.59951 11.9609 8.15848 13.7899 9.11624 15.3355C8.62757 15.4792 8.12333 15.5551 7.6112 15.5551C4.61285 15.5551 2.17351 13.0631 2.17351 9.99997C2.17351 6.93692 4.61285 4.44488 7.6112 4.44488C8.79959 4.44488 9.92543 4.82827 10.8754 5.5551C12.2592 6.6174 13.0528 8.23481 13.0528 9.99997H15.2302C15.2302 7.67168 14.2451 5.52315 12.5095 4.04152C13.8699 2.8754 15.5977 2.22044 17.3998 2.22044C21.5944 2.22444 25.0071 5.71085 25.0071 9.99997C25.0071 14.2891 21.5905 17.7795 17.392 17.7795Z" fill="#0272D5"/>
            <path d="M36.1722 16.0061H34.1043V7.07241H36.1722V8.25847C36.7234 7.39985 37.6186 6.85673 38.85 6.85673C40.9923 6.85673 42.2393 8.29841 42.2393 10.6307V16.01H40.1713V11.0301C40.1713 9.64423 39.4911 8.80562 38.2245 8.80562C36.9932 8.80562 36.1722 9.77203 36.1722 11.3016V16.0061Z" fill="#0272D5"/>
            <path d="M43.7369 12.1606V7.07286H45.8049V12.0329C45.8049 13.4346 46.4812 14.2733 47.6265 14.2733C48.772 14.2733 49.4483 13.4346 49.4483 12.0329V7.07286H51.5162V12.1567C51.5162 14.7286 50.0542 16.2221 47.6265 16.2221C45.199 16.2262 43.7369 14.7325 43.7369 12.1606Z" fill="#0272D5"/>
            <path d="M52.1415 7.07286H54.3384L56.6761 13.2709L59.0333 7.07286H61.1756L57.5713 16.0065H55.7497L52.1415 7.07286Z" fill="#0272D5"/>
            <path d="M69.5218 13.9095C68.7904 15.3113 67.4342 16.2258 65.5773 16.2258C62.9191 16.2258 61.0271 14.2929 61.0271 11.5413C61.0271 8.86161 62.9543 6.85681 65.4718 6.85681C68.0245 6.85681 69.8263 8.86161 69.8263 11.5413C69.8263 11.705 69.8263 11.9247 69.8069 12.1803H63.0794C63.1693 13.4742 64.2912 14.4407 65.593 14.4407C66.7344 14.4407 67.3248 13.8776 67.8251 13.0909L69.5218 13.9095ZM67.7743 10.6468C67.6336 9.46065 66.7032 8.58606 65.4366 8.58606C64.2052 8.58606 63.2396 9.62437 63.0989 10.6468H67.7743Z" fill="#0272D5"/>
            <path d="M73.0011 16.0062H70.9335V7.07249H73.0011V8.25854C73.482 7.39993 74.3027 6.85681 75.4991 6.85681C76.7654 6.85681 77.6767 7.47585 78.1576 8.51416C78.6226 7.65555 79.6191 6.85681 81.066 6.85681C83.0831 6.85681 84.2401 8.27855 84.2401 10.519V16.0062H82.1683V10.9223C82.1683 9.60839 81.578 8.78972 80.491 8.78972C79.3651 8.78972 78.6344 9.72023 78.6185 11.1779V16.0102H76.5509V10.9942C76.5509 9.60839 75.9606 8.78972 74.8735 8.78972C73.7318 8.78972 73.0011 9.7362 73.0011 11.2698V16.0062Z" fill="#0272D5"/>
            <path d="M87.848 7.23644V8.94971C88.4541 7.79956 89.8457 7.03674 91.2566 7.03674C93.7194 7.03674 95.6271 9.06154 95.6271 11.6294C95.6271 14.1973 93.7194 16.2061 91.2566 16.2061C89.8104 16.2061 88.4735 15.4752 87.848 14.3291V19.7963H86.7962V7.23644H87.848ZM87.7774 11.6334C87.7774 13.6022 89.2589 15.2076 91.1867 15.2076C93.0592 15.2076 94.5407 13.6382 94.5407 11.6334C94.5407 9.59264 93.0592 8.04317 91.1867 8.04317C89.2589 8.03914 87.7774 9.6446 87.7774 11.6334Z" fill="#0272D5"/>
            <path d="M99.552 10.9744L102.406 10.647V10.1358C102.406 8.80592 101.585 8.02316 100.228 8.02316C99.0323 8.02316 98.231 8.66214 97.8906 9.80832L96.8741 9.51679C97.3045 7.98725 98.5867 7.03674 100.228 7.03674C102.28 7.03674 103.457 8.22286 103.457 10.2077V16.0064H102.441V14.5287C101.851 15.5511 100.709 16.2061 99.3022 16.2061C97.6754 16.2061 96.5731 15.1837 96.5731 13.746C96.5731 12.1606 97.5543 11.1941 99.552 10.9744ZM99.4814 15.2236C101.194 15.2236 102.41 13.9297 102.41 12.3962V11.5935L99.7319 11.901C98.3756 12.0647 97.6636 12.7197 97.6636 13.6701C97.6636 14.6046 98.4109 15.2236 99.4814 15.2236Z" fill="#0272D5"/>
            <path d="M112.527 14.2013C111.902 15.2955 110.584 16.0224 109.172 16.0224C106.73 16.0224 104.853 14.0535 104.853 11.5216C104.853 8.98965 106.726 7.03674 109.172 7.03674C110.599 7.03674 111.94 7.76761 112.527 8.87782V7.23644H113.578V15.5511C113.578 18.1949 111.952 20 109.278 20C107.422 20 105.979 19.1613 105.244 17.7037L106.1 17.1006C106.726 18.3226 107.847 18.9776 109.274 18.9776C111.307 18.9776 112.523 17.6118 112.523 15.5671V14.2013H112.527ZM112.597 11.5216C112.597 9.60862 111.135 8.03914 109.243 8.03914C107.386 8.03914 105.944 9.56868 105.944 11.5216C105.944 13.4904 107.39 15.02 109.243 15.02C111.135 15.024 112.597 13.4744 112.597 11.5216Z" fill="#0272D5"/>
            <path d="M119.54 16.2061C117.007 16.2061 115.079 14.1653 115.079 11.6134C115.079 9.06154 117.007 7.03674 119.54 7.03674C122.073 7.03674 124 9.06154 124 11.6134C124 14.1653 122.073 16.2061 119.54 16.2061ZM119.54 8.03914C117.632 8.03914 116.166 9.6446 116.166 11.6134C116.166 13.6022 117.628 15.2037 119.54 15.2037C121.447 15.2037 122.914 13.5982 122.914 11.6134C122.914 9.6446 121.447 8.03914 119.54 8.03914Z" fill="#0272D5"/>
          </svg>          
          </h5>
          <button onClick="closeModalApp()" type="button" class="modal-close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="content-modal-buy-fast">
          <div class="box-resent-code row">
            <div class="col-12 text-small m-top-none">
              <span class="break-line">
                Compre mais rápido com sua conta Nuvem Pago usando o código enviado para <strong>${email}</strong>
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
                    <div id="errorCodeConfirmationLabel" class="error" style="display: none">
                      <div class="alert alert-danger-bagged">
                        <span>Código incorreto</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <button class="col-12 col-sm-4 text-small m-top-none btn-resend-code btn btn-link" tabindex="0" onClick="sendToken()">
              <span>
                <svg class="icon-btn-resend-code" width="20px" height="20px" viewBox="0 0 1024 1024">
                  <path d="M752.869 271.058C683.323 201.511 584.763 161.405 476.389 172.498C319.803 188.285 190.949 315.431 173.456 472.018C149.989 678.951 309.989 853.458 511.803 853.458C647.909 853.458 764.816 773.671 819.429 658.898C833.083 630.311 812.603 597.458 781.029 597.458C765.243 597.458 750.309 605.991 743.483 620.071C695.269 723.751 579.643 789.458 453.349 761.298C358.629 740.391 282.256 663.165 262.203 568.445C226.363 402.898 352.229 256.125 511.803 256.125C582.629 256.125 645.776 285.565 691.856 332.071L627.429 396.498C600.549 423.378 619.323 469.458 657.296 469.458H810.469C833.936 469.458 853.136 450.258 853.136 426.791V273.618C853.136 235.645 807.056 216.445 780.176 243.325L752.869 271.058V271.058Z"></path>
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
