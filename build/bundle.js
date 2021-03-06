/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login/login.js":
/*!****************************!*\
  !*** ./src/login/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyEmailExistWallet": () => (/* binding */ verifyEmailExistWallet)
/* harmony export */ });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");


function addBoxToOpenModal() {
  console.log('addBoxToOpenModal');
  jQuery("#buyMoreFaster").append(jQuery(`
    <div class="m-bottom-half panel-buy-fast" role="button" tabindex="0" data-testid="panel-buy-fast"
      onClick="openModalLogin()"
      id="boxBuyMoreFaster"
    >
      <div class="title-container-buy-fast">
        <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
          <path d="M830.353 427.18C826.144 433.392 823.652 440.604 823.127 448.086C822.603 455.569 824.065 463.057 827.367 469.795C837.956 494.48 845.41 520.393 849.554 546.928C860.537 615.545 850.265 685.875 820.113 748.499C816.451 755.367 810.976 761.104 804.282 765.085C797.588 769.067 789.93 771.142 782.139 771.085H242.39C234.555 771.101 226.867 768.962 220.168 764.903C213.47 760.844 208.02 755.021 204.416 748.072C177.103 692.734 165.338 631.03 170.375 569.539C175.411 508.047 197.061 449.073 233.015 398.904C268.97 348.735 317.881 309.251 374.536 284.661C431.191 260.071 493.465 251.298 554.719 259.275C585.712 262.914 616.027 270.95 644.748 283.14C651.494 286.437 658.991 287.898 666.483 287.374C673.975 286.85 681.196 284.361 687.416 280.157C693.896 275.893 699.09 269.945 702.437 262.952C705.784 255.96 707.159 248.188 706.413 240.473C705.667 232.758 702.828 225.393 698.203 219.169C693.577 212.946 687.34 208.1 680.162 205.154C597.736 169.854 506.269 161.392 418.754 180.97C331.238 200.548 252.125 247.17 192.65 314.214C133.176 381.258 96.3658 465.315 87.4482 554.445C78.5306 643.574 97.9591 733.244 142.974 810.717C150.42 823.598 161.112 834.309 173.986 841.785C186.861 849.262 201.471 853.242 216.363 853.332H807.313C822.35 853.392 837.135 849.482 850.173 841.998C863.21 834.515 874.036 823.723 881.555 810.717C914.511 753.674 933.781 689.778 937.852 624.046C941.924 558.313 930.687 492.532 905.022 431.867C901.771 424.953 896.72 419.039 890.397 414.743C884.073 410.448 876.71 407.928 869.077 407.449C861.444 406.97 853.823 408.548 847.011 412.02C840.198 415.491 834.445 420.727 830.353 427.18Z"></path><path d="M451.889 537.553C435.877 553.546 426.881 575.237 426.881 597.854C426.881 609.052 429.09 620.142 433.381 630.488C437.672 640.834 443.961 650.235 451.889 658.154C459.818 666.073 469.23 672.354 479.59 676.64C489.949 680.926 501.052 683.131 512.264 683.131C534.909 683.131 556.627 674.147 572.639 658.154L814.14 296.351L451.889 537.553Z">
          </path>
        </svg>  Quer agilizar sua compra?
      </div>
      <div class="content-container-buy-fast">
        <div>
          <div>Aproveite os dados da sua carteira digital.</div>
        </div>
        <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
          <path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z">
          </path>
        </svg>
      </div>
    </div>
  `));
}

const verifyEmailExistWallet = async email => {
  jQuery("#boxBuyMoreFaster").remove();
  if (!email) return false;

  try {
    let response = await (0,_services_api__WEBPACK_IMPORTED_MODULE_0__.verifyUserExist)(email);

    if (!response?.registered_email) {
      window.SDKCheckout.publishEvent('VALIDATE_EMAIL_EXIST_ON_CHECKOUT', email);
    } else if (email) {
      addBoxToOpenModal();
    }
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "./src/optin/modals-opt-in.js":
/*!************************************!*\
  !*** ./src/optin/modals-opt-in.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "termsOfUse": () => (/* binding */ termsOfUse),
/* harmony export */   "privacyPolicy": () => (/* binding */ privacyPolicy)
/* harmony export */ });
const termsOfUse = e => {
  e.preventDefault();
  openModal('Termos de uso', `
    <div class="col-12">
      <b class="m-top-half d-block">Data da publica????o: 20/10/2021</b>
      <p>
        Estes Termos e Condi????es de Uso da Plataforma Nuvemshop regulam a utiliza????o do site ???www.nuvemshop.com.br??? e qualquer outro site, plataforma ou aplicativo operado pela Nuvemshop (???Plataforma???) e dos servi??os disponibilizados na Plataforma (???Servi??os???).
      </p>
      <p>
        A Plataforma ?? operada no Brasil pela Linked Store Brasil Hospedagem de Sites e Desenvolvimento de Softwares Ltda., pessoa jur??dica com sede na Alameda Vicente Pinzon, 173, 8?? Andar - Vila Ol??mpia, S??o Paulo/SP, Brasil, CEP 04547-130, inscrita no CNPJ/MF sob o n?? 16.932.748/0001-62, (???Nuvemshop??? ou ???n??s???).
      <p>
        Pedimos que os usu??rios leiam cuidadosamente e certifiquem-se de haver entendido e aceitado todas as condi????es estabelecidas nestes termos e nos demais documentos a eles incorporados por refer??ncia (em conjunto, "Termos"), uma vez que as regras, obriga????es e direitos previstos vinculam e s??o v??lidos para todos os usu??rios da Plataforma (???Usu??rio??? ou ???voc?????). Em caso de d??vidas, o Usu??rio poder?? enviar e-mail para contato@nuvemshop.com.br.
      </p>
      <p>  
        Oferecemos servi??os variados e, por vezes, termos adicionais podem ser aplic??veis. Ao utilizar um determinado Servi??o, voc?? estar?? sujeito ??s diretrizes, termos e condi????es a ele aplic??veis. Salvo se estabelecido de forma diversa, qualquer novo recurso que aumente ou aprimore os Servi??os atualmente disponibilizados, incluindo novos lan??amentos, estar?? automaticamente sujeito aos Termos.
      </p>
      <p>
        Caso voc?? n??o esteja de acordo com os Termos, solicitamos que n??o fa??a uso da Plataforma, tampouco efetue qualquer Cadastro ou envie dados, pessoais ou n??o.
      </p>
      <p>  
        Durante a utiliza????o da Plataforma, certos dados pessoais ser??o coletados e tratados pela Nuvemshop e/ou por nossos parceiros ("Parceiros"). As regras relacionadas ao tratamento de dados pessoais pela Nuvemshop est??o estipuladas na Pol??tica de Privacidade.
      </p>
    </div>
  `);
};
const privacyPolicy = e => {
  e.preventDefault();
  openModal('Pol??tica de Privacidade', `
    <div class="col-12">
      <p>
        A Linked Store Brasil Hospedagem de Sites e Desenvolvimento de Softwares Ltda., pessoa jur??dica com sede na Alameda Vicente Pinzon, 173, 8?? Andar - Vila Ol??mpia , S??o Paulo - SP, Brasil, 04547-130, inscrita no CNPJ/MF sob o n?? 016.932.748/0001-62 (???Nuvemshop??? ou ???n??s???) levam a sua privacidade a s??rio e zela pela seguran??a e prote????o de dados de todos os seus clientes, parceiros, fornecedores e usu??rios (???Usu??rios??? ou ???voc?????) do site ???www.nuvemshop.com.br??? e qualquer outro site, plataforma, aplicativo operado pela NUVEMSHOP (???Plataforma???).
      </p>
      <p>
        Esta Pol??tica de Privacidade (???Pol??tica de Privacidade???) destina-se a inform??-lo sobre o modo como n??s utilizamos e divulgamos informa????es coletadas em suas visitas ?? nossa Plataforma e em mensagens que trocamos com voc?? (???Comunica????es???). Esta Pol??tica de Privacidade aplica-se somente a informa????es coletadas por meio da Plataforma.
      </p>
      <p>  
        Ao acessar a plataforma, enviar comunica????es ou fornecer qualquer tipo de dado pessoal, voc?? entende os termos aqui previstos e aceita esta pol??tica de privacidade, consentindo com o tratamento de suas informa????es, conforme aqui descrito ou nos termos da legiisla????o em vigor.
      </p>
      <p>  
        Esta Pol??tica de Privacidade fornece uma vis??o geral de nossas pr??ticas de privacidade e das escolhas que voc?? pode fazer, bem como direitos que voc?? pode exercer em rela????o aos Dados Pessoais tratados por n??s. Se voc?? tiver alguma d??vida sobre o uso de Dados Pessoais, entre em contato pelo e-mail privacidade@nuvemshop.com.br.
      </p>
      <p>
        Al??m disso, a Pol??tica de Privacidade n??o se aplica a quaisquer aplicativos, produtos, servi??os, site ou recursos de m??dia social de terceiros que possam ser oferecidos ou acessados por meio da Plataforma. O acesso a esses links far?? com que voc?? deixe a Plataforma e possa resultar na coleta ou compartilhamento de informa????es sobre voc?? por terceiros. N??s n??o controlamos, endossamos ou fazemos quaisquer representa????es sobre esses sites de terceiros ou suas pr??ticas de privacidade, que podem ser diferentes das nossas. Recomendamos que voc?? revise a pol??tica de privacidade de qualquer site com o qual voc?? interaja antes de permitir a coleta e o uso de seus Dados Pessoais.
      </p>
      <p>
        Caso voc?? nos envie Dados Pessoais referentes a outras pessoas f??sicas, voc?? declara ter a compet??ncia para faz??-lo e declara ter obtido o consentimento necess??rio para autorizar o uso de tais informa????es nos termos desta Pol??tica de Privacidade.
      </p>
    </div>
  `);
};

/***/ }),

/***/ "./src/optin/optin.js":
/*!****************************!*\
  !*** ./src/optin/optin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoxOptinWallet": () => (/* binding */ renderBoxOptinWallet)
/* harmony export */ });
__webpack_require__(/*! ./modals-opt-in.js */ "./src/optin/modals-opt-in.js");

const renderBoxOptinWallet = () => {
  console.log('renderBoxOptinWallet=>');
  jQuery("#boxOptInWallet").remove();
  jQuery("#btnFinishCheckout").before(jQuery(` 
    <div class="panel panel-with-header"
      style="padding: 0"
      id="boxOptInWallet"
    >
      <div class="menu-title"
        style="padding: 15px; color: "0272D5; display: flex; align-items: center"
      >
        <svg width="103" height="19" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0384 0C14.0353 0 14.0321 0 14.029 0C14.0258 0 14.0227 0 14.0195 0C11.9577 0.00319467 9.99681 0.824279 8.53089 2.26836C7.78055 1.94568 6.97351 1.77955 6.13806 1.77955C2.75535 1.77955 0 4.56868 0 7.99997C0 11.4313 2.75535 14.2236 6.14125 14.2236C6.96402 14.2236 7.77424 14.0543 8.52771 13.7316C9.94954 15.1341 11.8915 16 14.029 16C18.3827 16 21.923 12.4121 21.923 7.99997C21.923 3.59424 18.3858 0.00638992 14.0384 0ZM14.0258 14.2236C10.64 14.2236 7.88462 11.4313 7.88462 7.99997H6.12863C6.12863 9.5687 6.57942 11.0319 7.3518 12.2684C6.95772 12.3833 6.55107 12.4441 6.13806 12.4441C3.72004 12.4441 1.75283 10.4505 1.75283 7.99997C1.75283 5.54954 3.72004 3.5559 6.13806 3.5559C7.09644 3.5559 8.00438 3.86261 8.77046 4.44408C9.88648 5.29392 10.5264 6.58785 10.5264 7.99997H12.2824C12.2824 6.13735 11.488 4.41852 10.0883 3.23322C11.1854 2.30032 12.5788 1.77635 14.0321 1.77635C17.4148 1.77955 20.1671 4.56868 20.1671 7.99997C20.1671 11.4313 17.4117 14.2236 14.0258 14.2236Z" fill="#0272D5"/>
          <path d="M29.1711 12.8049H27.5034V5.65793H29.1711V6.60677C29.6157 5.91988 30.3376 5.48539 31.3307 5.48539C33.0583 5.48539 34.0639 6.63873 34.0639 8.50452V12.808H32.3962V8.82404C32.3962 7.71538 31.8477 7.04449 30.8262 7.04449C29.8332 7.04449 29.1711 7.81763 29.1711 9.04126V12.8049Z" fill="#0272D5"/>
          <path d="M35.2717 9.72851V5.65829H36.9394V9.62632C36.9394 10.7477 37.4848 11.4187 38.4085 11.4187C39.3322 11.4187 39.8777 10.7477 39.8777 9.62632V5.65829H41.5454V9.72534C41.5454 11.7829 40.3663 12.9777 38.4085 12.9777C36.4508 12.9809 35.2717 11.786 35.2717 9.72851Z" fill="#0272D5"/>
          <path d="M42.0496 5.65829H43.8213L45.7066 10.6167L47.6075 5.65829H49.3352L46.4285 12.8052H44.9594L42.0496 5.65829Z" fill="#0272D5"/>
          <path d="M56.066 11.1276C55.4761 12.249 54.3824 12.9806 52.8849 12.9806C50.7412 12.9806 49.2154 11.4343 49.2154 9.23304C49.2154 7.08929 50.7696 5.48545 52.7998 5.48545C54.8584 5.48545 56.3115 7.08929 56.3115 9.23304C56.3115 9.36402 56.3115 9.53979 56.2959 9.74423H50.8705C50.943 10.7794 51.8478 11.5526 52.8975 11.5526C53.8181 11.5526 54.2942 11.1021 54.6977 10.4727L56.066 11.1276ZM54.6567 8.51742C54.5432 7.56852 53.7929 6.86885 52.7714 6.86885C51.7784 6.86885 50.9997 7.6995 50.8862 8.51742H54.6567Z" fill="#0272D5"/>
          <path d="M58.8718 12.8049H57.2044V5.65799H58.8718V6.60684C59.2597 5.91994 59.9215 5.48545 60.8864 5.48545C61.9076 5.48545 62.6425 5.98068 63.0303 6.81133C63.4054 6.12444 64.2089 5.48545 65.3758 5.48545C67.0025 5.48545 67.9355 6.62284 67.9355 8.41517V12.8049H66.2648V8.73787C66.2648 7.68672 65.7887 7.03177 64.9121 7.03177C64.0041 7.03177 63.4148 7.77618 63.402 8.9423V12.8082H61.7346V8.79538C61.7346 7.68671 61.2586 7.03177 60.3819 7.03177C59.4611 7.03177 58.8718 7.78896 58.8718 9.01582V12.8049Z" fill="#0272D5"/>
          <path d="M70.8451 5.78915V7.15977C71.334 6.23965 72.4562 5.62939 73.594 5.62939C75.5801 5.62939 77.1186 7.24923 77.1186 9.30352C77.1186 11.3578 75.5801 12.9649 73.594 12.9649C72.4277 12.9649 71.3496 12.3802 70.8451 11.4633V15.8371H69.9969V5.78915H70.8451ZM70.7882 9.30669C70.7882 10.8818 71.983 12.1661 73.5377 12.1661C75.0478 12.1661 76.2425 10.9105 76.2425 9.30669C76.2425 7.67412 75.0478 6.43453 73.5377 6.43453C71.983 6.43131 70.7882 7.71568 70.7882 9.30669Z" fill="#0272D5"/>
          <path d="M80.2839 8.77956L82.5852 8.5176V8.10861C82.5852 7.04474 81.9234 6.41853 80.8291 6.41853C79.8648 6.41853 79.2186 6.92971 78.944 7.84666L78.1242 7.61343C78.4713 6.3898 79.5054 5.62939 80.8291 5.62939C82.4842 5.62939 83.4335 6.57829 83.4335 8.16613V12.8051H82.6137V11.623C82.1377 12.4409 81.2169 12.9649 80.0824 12.9649C78.7705 12.9649 77.8815 12.1469 77.8815 10.9968C77.8815 9.72846 78.6728 8.95527 80.2839 8.77956ZM80.227 12.1789C81.6081 12.1789 82.5886 11.1437 82.5886 9.91695V9.27479L80.429 9.52079C79.3352 9.65177 78.761 10.1757 78.761 10.9361C78.761 11.6837 79.3637 12.1789 80.227 12.1789Z" fill="#0272D5"/>
          <path d="M90.7477 11.361C90.2432 12.2364 89.1807 12.8179 88.0423 12.8179C86.0724 12.8179 84.559 11.2428 84.559 9.21727C84.559 7.19172 86.069 5.62939 88.0423 5.62939C89.193 5.62939 90.2745 6.21409 90.7477 7.10225V5.78915H91.5953V12.4409C91.5953 14.5559 90.2839 16 88.1277 16C86.6304 16 85.4669 15.3291 84.8743 14.1629L85.5646 13.6805C86.069 14.6581 86.9736 15.1821 88.1243 15.1821C89.7638 15.1821 90.7443 14.0894 90.7443 12.4537V11.361H90.7477ZM90.804 9.21727C90.804 7.6869 89.6249 6.43131 88.0992 6.43131C86.602 6.43131 85.4385 7.65494 85.4385 9.21727C85.4385 10.7923 86.6048 12.016 88.0992 12.016C89.6249 12.0192 90.804 10.7795 90.804 9.21727Z" fill="#0272D5"/>
          <path d="M96.4029 12.9649C94.3604 12.9649 92.8057 11.3322 92.8057 9.29074C92.8057 7.24923 94.3604 5.62939 96.4029 5.62939C98.4459 5.62939 100 7.24923 100 9.29074C100 11.3322 98.4459 12.9649 96.4029 12.9649ZM96.4029 6.43131C94.8643 6.43131 93.6824 7.71568 93.6824 9.29074C93.6824 10.8818 94.8615 12.1629 96.4029 12.1629C97.9414 12.1629 99.1239 10.8786 99.1239 9.29074C99.1239 7.71568 97.9414 6.43131 96.4029 6.43131Z" fill="#0272D5"/>
        </svg> <span style="margin-left: 5px">facilita seus pr??ximos pedidos</span>
      </div>
      <div class="content-wallet-subscribe"
        style="padding: 15px; background: #F9F9F9"
      >
        <div class="form-group"
          style="display: flex; align-items: center"
        >
          <input id="isAcceptWallet" type="checkbox"
            style="display: flex; align-items: center; appearance: auto"
          />
          <label class="input-label" id="isAcceptWallet" for="isAcceptWallet">
            Salvar dados de entrega e contato em uma conta
          </label>
        </div>
        <div class="form-group">
          <input class="form-control ${phoneLS ? 'disabled' : ''}" id="phoneWallet" type="text" placeholder="Celular com DDD" value="${phoneLS ? phoneLS : ''}" 
            onfocusout="validatePhone(this.value)" ${phoneLS ? 'disabled' : ''}
          />
          <div id="errorPhoneLabel" style="display: none" class="error">
            <div class="alert alert-danger-bagged">
              <span>Telefone incorreto</span>
            </div>
          </div>
        </div>
        <i style="margin-bottom: 15px; display: block">Voc?? acessar?? esta conta atrav??s de um c??digo recebido por SMS.</i>
        <div>Ao salvar, voc?? aceita os <a onClick=termsOfUse(event)" href="#">Termos de uso</a> e <a onClick="privacyPolicy(event)" href="#">Pol??tica de privacidade</a>.</div>
      </div>
    </div>
  `));
};

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "createdUser": () => (/* binding */ createdUser),
/* harmony export */   "verifyUserExist": () => (/* binding */ verifyUserExist),
/* harmony export */   "sendToken": () => (/* binding */ sendToken),
/* harmony export */   "authToken": () => (/* binding */ authToken),
/* harmony export */   "authLogin": () => (/* binding */ authLogin)
/* harmony export */ });
const BASE_URL = 'http://localhost:4444';
const createdUser = data => {
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/users`,
    data: data,
    success: function (responseRequest) {
      console.log('responseRequest', responseRequest);
      return 'Usu??rio criado com sucesso';
    }
  }).done(function (msg) {
    console.log('done msg', msg);
  });
  return response;
};
const verifyUserExist = email => {
  return jQuery.ajax({
    method: 'GET',
    url: `${BASE_URL}/users/registered?email=${email}`,
    success: function (data) {
      console.log('success', data);
      return data;
    },
    error: function (error) {
      console.log('Error occured', error);
      return false;
    }
  });
};
const sendToken = async () => {
  var email = jQuery("[id='contact.email']").val();
  const response = await jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/send-token`,
    data: {
      email: email
    },
    success: function (responseSendToken) {
      console.log('responseSendToken', responseSendToken);
      console.log('Token Criado com sucesso');
    },
    error: function (error) {
      console.log('Error occured', error);
      return false;
    }
  });
  return response;
};
const authToken = (email, token) => {
  console.log('authToken');
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    data: {
      email: email,
      otp: token,
      'customer_data': true
    },
    success: function (responseSendToken) {
      console.log('Login conclu??do=>', responseSendToken);
      return responseSendToken.user;
    },
    error: function (error) {
      console.log('Error occured', error);
      return error;
    }
  });
  return response;
};
const authLogin = () => {};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const {
  renderBoxOptinWallet
} = __webpack_require__(/*! ./optin/optin */ "./src/optin/optin.js");

const {
  verifyEmailExistWallet
} = __webpack_require__(/*! ./login/login */ "./src/login/login.js");

const {
  createdUser,
  sendToken,
  authToken,
  verifyUserExist
} = __webpack_require__(/*! ./services/api */ "./src/services/api.js");

renderNext = async () => {
  console.log('renderNext=>');
  const response = await verifyUserExist(window.LS?.cart?.contact?.email);
  if (!response?.registered_email) renderBoxOptinWallet();
};

closeOrder = async (event, data) => {
  const response = await verifyUserExist(window.LS?.cart?.contact?.email);

  if (!response?.registered_email) {
    const isAcceptWallet = jQuery('#isAcceptWallet')[0].checked || false;
    const phoneWallet = jQuery('#phoneWallet').val();
    console.log('closeOrder data=>', data);

    if (isAcceptWallet) {
      const response = createdUser(data);
      console.log('response Created', response);
    }

    console.log('Cadastro do email: ', isAcceptWallet, 'e telefone: ', phoneWallet);
  }
};

updateErrorPhone = (event, isValidPhone) => {
  jQuery("#errorPhoneLabel").css("display", isValidPhone ? "none" : "block");
};

registerBlurInputEmail = email => {
  verifyEmailExistWallet(email);
};

clickOnBtnSubmitZipcode = () => {
  const btnSubmitZipcode = jQuery("[data-testid|='btnSubmitZipcode']");
  if (Boolean(btnSubmitZipcode.length)) btnSubmitZipcode.click();
};

if (typeof window === 'object') {
  window.SDKCheckout.subscribeEvent('RENDER_NEXT', renderNext);
  window.SDKCheckout.subscribeEvent('CLOSE_ORDER', closeOrder);
  window.SDKCheckout.subscribeEvent('RETURN_VALIDATE_PHONE', updateErrorPhone);
  window.SDKCheckout.subscribeEvent('CLICK_ON_BTN_SUBMIT_ZIPCODE', clickOnBtnSubmitZipcode);
  phoneLS = window.LS?.cart?.contact?.phone;

  window.onload = () => {
    window.SDKCheckout.publishEvent('BLOCK_VALIDATE_EMAIL', true);
    registerBlurInputEmail();
    document.querySelector("input[id='contact.email']").addEventListener("blur", e => registerBlurInputEmail(e.target.value));
  };
}

validatePhone = phoneValue => {
  window.SDKCheckout.publishEvent('VALIDATE_PHONE', phoneValue);
}; // start Login //


mountUser = userResponse => {
  const keys = ['zipcode', 'first_name', 'last_name', 'address', 'number', 'floor', 'locality', 'city', 'state', 'country', 'phone', 'between_streets', 'reference'];
  const addresses = userResponse.address;
  let address = {};
  let user = {
    contact_name: userResponse.name,
    contact_phone: userResponse.phone // contact_accepts_marketing: true,

  };
  addresses.map(item => {
    keys.map(key => {
      address = { ...address,
        [`${item.type}_${key}`]: `${item[key]}` || null
      };
      return true;
    });
  });
  console.log('returned===>', {
    user,
    ...address
  });
  return { ...user,
    ...address
  };
};

validateAccessCode = async () => {
  jQuery("#errorCodeConfirmationLabel").css("display", "none");
  var email = jQuery("[id|='contact.email']").val();
  var codeConfirmation = jQuery('#code_confirmation').val();
  console.log('email, codeConfirmation====>', email, codeConfirmation);
  const responseAuthToken = await authToken(email, codeConfirmation);

  if (responseAuthToken?.user) {
    const user = mountUser(responseAuthToken?.user);
    console.log('response getUser', user);

    if (responseAuthToken.status === 200) {
      jQuery("#modalAppWallet").remove();
      jQuery("#buyMoreFaster").remove();
      window.SDKCheckout.publishEvent('RETURN_CUSTOMER_ADDRESS', user);
    } else {
      console.log('error response');
    }
  } else {
    jQuery("#errorCodeConfirmationLabel").css("display", "block");
    console.log('not Auth Token', responseAuthToken);
  }
};

openModalLogin = () => {
  var email = jQuery("[id='contact.email']").val();
  sendToken();
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
            <span aria-hidden="true">??</span>
          </button>
        </div>

        <div class="content-modal-buy-fast">
          <div class="box-resent-code row">
            <div class="col-12 text-small m-top-none">
              <span class="break-line">
                Compre mais r??pido com sua conta Nuvem Pago usando o c??digo enviado para <strong>${email}</strong>
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
                    <label class="input-label" id="code_confirmation" for="code_confirmation">C??digo de acceso</label>
                    <div id="errorCodeConfirmationLabel" class="error" style="display: none">
                      <div class="alert alert-danger-bagged">
                        <span>C??digo incorreto</span>
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
                <div class="text-btn-resend-code">Reenviar c??digo</div>
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
}; // end Login //


(function () {
  console.log('App Wallet'); // registerBlurInputEmail()

  sendCodeToCustumer = email => {// implement api to send code to email
  };

  verifyCode = (code, email) => {// implement api to verify code and email
  };

  closeModalApp = () => {
    jQuery("#modalAppWallet").remove();
  };

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
              <span aria-hidden="true">??</span>
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
    `));
  };
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map