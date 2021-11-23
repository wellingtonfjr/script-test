/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const renderNext = () => {
  console.log('renderNext=>');
};

if (typeof window === 'object') {
  console.log('entrou window script');
  window.SDKCheckout.subscribeEvent('RENDER_NEXT', renderNext);
}

(function () {
  console.log('App Wallet');

  sendCodeToCustumer = email => {// implement api to send code to email
  };

  verifyCode = (code, email) => {// implement api to verify code and email
  }; // addBoxToOpenModal = () => {
  //   jQuery("#buyMoreFaster").append(jQuery(`
  //     <div class="m-bottom-half panel-buy-fast" role="button" tabindex="0" data-testid="panel-buy-fast"
  //       onClick="openModal()"
  //     >
  //       <div class="title-container-buy-fast">
  //         <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
  //           <path d="M830.353 427.18C826.144 433.392 823.652 440.604 823.127 448.086C822.603 455.569 824.065 463.057 827.367 469.795C837.956 494.48 845.41 520.393 849.554 546.928C860.537 615.545 850.265 685.875 820.113 748.499C816.451 755.367 810.976 761.104 804.282 765.085C797.588 769.067 789.93 771.142 782.139 771.085H242.39C234.555 771.101 226.867 768.962 220.168 764.903C213.47 760.844 208.02 755.021 204.416 748.072C177.103 692.734 165.338 631.03 170.375 569.539C175.411 508.047 197.061 449.073 233.015 398.904C268.97 348.735 317.881 309.251 374.536 284.661C431.191 260.071 493.465 251.298 554.719 259.275C585.712 262.914 616.027 270.95 644.748 283.14C651.494 286.437 658.991 287.898 666.483 287.374C673.975 286.85 681.196 284.361 687.416 280.157C693.896 275.893 699.09 269.945 702.437 262.952C705.784 255.96 707.159 248.188 706.413 240.473C705.667 232.758 702.828 225.393 698.203 219.169C693.577 212.946 687.34 208.1 680.162 205.154C597.736 169.854 506.269 161.392 418.754 180.97C331.238 200.548 252.125 247.17 192.65 314.214C133.176 381.258 96.3658 465.315 87.4482 554.445C78.5306 643.574 97.9591 733.244 142.974 810.717C150.42 823.598 161.112 834.309 173.986 841.785C186.861 849.262 201.471 853.242 216.363 853.332H807.313C822.35 853.392 837.135 849.482 850.173 841.998C863.21 834.515 874.036 823.723 881.555 810.717C914.511 753.674 933.781 689.778 937.852 624.046C941.924 558.313 930.687 492.532 905.022 431.867C901.771 424.953 896.72 419.039 890.397 414.743C884.073 410.448 876.71 407.928 869.077 407.449C861.444 406.97 853.823 408.548 847.011 412.02C840.198 415.491 834.445 420.727 830.353 427.18Z"></path><path d="M451.889 537.553C435.877 553.546 426.881 575.237 426.881 597.854C426.881 609.052 429.09 620.142 433.381 630.488C437.672 640.834 443.961 650.235 451.889 658.154C459.818 666.073 469.23 672.354 479.59 676.64C489.949 680.926 501.052 683.131 512.264 683.131C534.909 683.131 556.627 674.147 572.639 658.154L814.14 296.351L451.889 537.553Z">
  //           </path>
  //         </svg> ¿Quieres agilizar tu compra?
  //       </div>
  //       <div class="content-container-buy-fast">
  //         <div>
  //           <div>Aprovechá los datos de tu último pedido para comprar más rápido y más fácil.</div>
  //         </div>
  //         <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
  //           <path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z">
  //           </path>
  //         </svg>
  //       </div>
  //     </div>
  //   `))
  // }


  closeModalApp = () => {
    jQuery("#modalAppWallet").remove();
  };

  openModal = () => {
    var email = jQuery('#contact.email');
    console.log('openModal');
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
                <div class="form-group input-lg form-group-error">
                  <div class="has-float-label">
                    <input
                      type="text"
                      class="form-control"
                      name="contact.code_confirmation"
                      placeholder=" "
                      autocomplete="on"
                      autocapitalize="on" id="contact.code_confirmation" aria-labelledby="label_contact.code_confirmation" value=""
                    >
                      <label class="input-label" id="label_contact.code_confirmation" for="contact.code_confirmation">Código de acceso</label>
                  </div>
                  <div id="errorInputAppWallet" class="error">
                    <div class="alert alert-danger-bagged">
                      <span></span>
                    </div>
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
              <button type="button" id="" class="pull-right text-uppercase m-top-half btn btn-primary" tabindex="0" data-testid="btnStartSessionLogIn">
                <span>Continuar</span>
              </button>
              <div class="buy-without-login">
                <button type="button" id="" class="btn btn-link" tabindex="0" data-testid="wantUseMyPassword">
                  <span>Quiero usar mi contraseña</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `));
  };
})(); // window.functionExport = function() {
//   return { 
//     zipcode: "1003",
//     first_name: "",
//     last_name: null,
//     address: null,
//     number: null,
//     floor: null,
//     locality: null,
//     city: null,
//     state: "Capital Federal",
//     country: "AR",
//     phone: null
//   }
// }
/******/ })()
;
//# sourceMappingURL=bundle.js.map