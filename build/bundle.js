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
  jQuery("#boxBuyMoreFaster").remove();
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
  if (!email) return false;

  try {
    let response = await (0,_services_api__WEBPACK_IMPORTED_MODULE_0__.veifyUserExist)(email);

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
      <b class="m-top-half d-block">Data da publicação: 20/10/2021</b>
      <p>
        Estes Termos e Condições de Uso da Plataforma Nuvemshop regulam a utilização do site “www.nuvemshop.com.br” e qualquer outro site, plataforma ou aplicativo operado pela Nuvemshop (“Plataforma”) e dos serviços disponibilizados na Plataforma (“Serviços”).
      </p>
      <p>
        A Plataforma é operada no Brasil pela Linked Store Brasil Hospedagem de Sites e Desenvolvimento de Softwares Ltda., pessoa jurídica com sede na Alameda Vicente Pinzon, 173, 8º Andar - Vila Olímpia, São Paulo/SP, Brasil, CEP 04547-130, inscrita no CNPJ/MF sob o nº 16.932.748/0001-62, (“Nuvemshop” ou “nós”).
      <p>
        Pedimos que os usuários leiam cuidadosamente e certifiquem-se de haver entendido e aceitado todas as condições estabelecidas nestes termos e nos demais documentos a eles incorporados por referência (em conjunto, "Termos"), uma vez que as regras, obrigações e direitos previstos vinculam e são válidos para todos os usuários da Plataforma (“Usuário” ou “você”). Em caso de dúvidas, o Usuário poderá enviar e-mail para contato@nuvemshop.com.br.
      </p>
      <p>  
        Oferecemos serviços variados e, por vezes, termos adicionais podem ser aplicáveis. Ao utilizar um determinado Serviço, você estará sujeito às diretrizes, termos e condições a ele aplicáveis. Salvo se estabelecido de forma diversa, qualquer novo recurso que aumente ou aprimore os Serviços atualmente disponibilizados, incluindo novos lançamentos, estará automaticamente sujeito aos Termos.
      </p>
      <p>
        Caso você não esteja de acordo com os Termos, solicitamos que não faça uso da Plataforma, tampouco efetue qualquer Cadastro ou envie dados, pessoais ou não.
      </p>
      <p>  
        Durante a utilização da Plataforma, certos dados pessoais serão coletados e tratados pela Nuvemshop e/ou por nossos parceiros ("Parceiros"). As regras relacionadas ao tratamento de dados pessoais pela Nuvemshop estão estipuladas na Política de Privacidade.
      </p>
    </div>
  `);
};
const privacyPolicy = e => {
  e.preventDefault();
  openModal('Política de Privacidade', `
    <div class="col-12">
      <p>
        A Linked Store Brasil Hospedagem de Sites e Desenvolvimento de Softwares Ltda., pessoa jurídica com sede na Alameda Vicente Pinzon, 173, 8º Andar - Vila Olímpia , São Paulo - SP, Brasil, 04547-130, inscrita no CNPJ/MF sob o nº 016.932.748/0001-62 (“Nuvemshop” ou “nós”) levam a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários (“Usuários” ou “você”) do site “www.nuvemshop.com.br” e qualquer outro site, plataforma, aplicativo operado pela NUVEMSHOP (“Plataforma”).
      </p>
      <p>
        Esta Política de Privacidade (“Política de Privacidade”) destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas visitas à nossa Plataforma e em mensagens que trocamos com você (“Comunicações”). Esta Política de Privacidade aplica-se somente a informações coletadas por meio da Plataforma.
      </p>
      <p>  
        Ao acessar a plataforma, enviar comunicações ou fornecer qualquer tipo de dado pessoal, você entende os termos aqui previstos e aceita esta política de privacidade, consentindo com o tratamento de suas informações, conforme aqui descrito ou nos termos da legiislação em vigor.
      </p>
      <p>  
        Esta Política de Privacidade fornece uma visão geral de nossas práticas de privacidade e das escolhas que você pode fazer, bem como direitos que você pode exercer em relação aos Dados Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados Pessoais, entre em contato pelo e-mail privacidade@nuvemshop.com.br.
      </p>
      <p>
        Além disso, a Política de Privacidade não se aplica a quaisquer aplicativos, produtos, serviços, site ou recursos de mídia social de terceiros que possam ser oferecidos ou acessados por meio da Plataforma. O acesso a esses links fará com que você deixe a Plataforma e possa resultar na coleta ou compartilhamento de informações sobre você por terceiros. Nós não controlamos, endossamos ou fazemos quaisquer representações sobre esses sites de terceiros ou suas práticas de privacidade, que podem ser diferentes das nossas. Recomendamos que você revise a política de privacidade de qualquer site com o qual você interaja antes de permitir a coleta e o uso de seus Dados Pessoais.
      </p>
      <p>
        Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você declara ter a competência para fazê-lo e declara ter obtido o consentimento necessário para autorizar o uso de tais informações nos termos desta Política de Privacidade.
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
        </svg> <span style="margin-left: 5px">facilita seus próximos pedidos</span>
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
        <i style="margin-bottom: 15px; display: block">Você acessará esta conta através de um código recebido por SMS.</i>
        <div>Ao salvar, você aceita os <a onClick=termsOfUse(event)" href="#">Termos de uso</a> e <a onClick="privacyPolicy(event)" href="#">Política de privacidade</a>.</div>
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
/* harmony export */   "veifyUserExist": () => (/* binding */ veifyUserExist),
/* harmony export */   "sendToken": () => (/* binding */ sendToken),
/* harmony export */   "authToken": () => (/* binding */ authToken),
/* harmony export */   "authLogin": () => (/* binding */ authLogin),
/* harmony export */   "getUserById": () => (/* binding */ getUserById)
/* harmony export */ });
const BASE_URL = 'http://localhost:4444';
const createdUser = data => {
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/users`,
    data: data,
    success: function (responseRequest) {
      console.log('responseRequest', responseRequest);
      return 'Usuário criado com sucesso';
    }
  }).done(function (msg) {
    console.log('done msg', msg);
  });
  return response;
};
const veifyUserExist = email => {
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
const sendToken = email => {
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/send-token`,
    data: {
      email: email
    },
    success: function (responseSendToken) {
      console.log('responseSendToken', responseSendToken);
      console.log('Token Criado com sucesso');
    }
  }).done(function (msg) {
    console.log('done msg', msg);
  });
  return response;
};
const authToken = (email, token) => {
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    data: {
      email: email,
      otp: token,
      'customer_data': true
    },
    success: function (responseSendToken) {
      console.log('Login concluído');
      return responseSendToken.user;
    }
  }).done(function (msg) {
    console.log('done msg', msg);
  });
  return response;
};
const authLogin = () => {};
const getUserById = async id => {
  console.log('enter getUserById2');
  jQuery.support.cors = true;
  const response = await jQuery.ajax({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    dataType: "application/json",
    url: `${BASE_URL}/${id}`
  });
  console.log('response>>>>', response);
  const keys = ['zipcode', 'first_name', 'last_name', 'address', 'number', 'floor', 'locality', 'city', 'state', 'country', 'phone', 'between_streets', 'reference'];
  const addresses = response.address;
  let address = {};
  let user = {
    contact_name: response.name,
    contact_phone: response.phone // contact_accepts_marketing: true,

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
  console.log('finish getUserById');
  return {
    code: 200,
    user: { ...user,
      ...address
    }
  };
};

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
  getUserById,
  createdUser,
  sendToken
} = __webpack_require__(/*! ./services/api */ "./src/services/api.js");

renderNext = () => {
  console.log('renderNext=>'); // const response = veifyUserExist(window.LS?.cart?.contact?.)

  renderBoxOptinWallet();
};

closeOrder = (event, data) => {
  const isAcceptWallet = jQuery('#isAcceptWallet')[0].checked || false;
  const phoneWallet = jQuery('#phoneWallet').val();
  console.log('closeOrder data=>', data);

  if (isAcceptWallet) {
    const response = createdUser(data);
    console.log('response Created', response);
  }

  console.log('Cadastro do email: ', isAcceptWallet, 'e telefone: ', phoneWallet);
};

updateErrorPhone = (event, isValidPhone) => {
  jQuery("#errorPhoneLabel").css("display", isValidPhone ? "none" : "block");
};

registerBlurInputEmail = email => {
  verifyEmailExistWallet(email);
};

if (typeof window === 'object') {
  window.SDKCheckout.subscribeEvent('RENDER_NEXT', renderNext);
  window.SDKCheckout.subscribeEvent('CLOSE_ORDER', closeOrder);
  window.SDKCheckout.subscribeEvent('RETURN_VALIDATE_PHONE', updateErrorPhone);
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
  console.log('finish getUserById');
  return { ...user,
    ...address
  };
};

validateAccessCode = async () => {
  var email = jQuery("[id|='contact.email']").val();
  var codeConfirmation = jQuery('#code_confirmation').val();
  console.log('email, codeConfirmation====>', email, codeConfirmation);
  const responseAuthToken = await authToken({
    email: email,
    otp: codeConfirmation,
    "customer_data": true
  });

  if (responseAuthToken?.user) {
    const user = mountUser(responseAuthToken?.user);
    console.log('response getUser', user); // Controller Error CodeConfirmation errorCodeAppWallet

    if (responseAuthToken.status === 200) {
      window.SDKCheckout.publishEvent('RETURN_CUSTOMER_ADDRESS', user);
    } else {
      console.log('error response');
    }
  } else {
    console.log('not Auth Token', responseAuthToken);
  }
};

openModalLogin = () => {
  var email = jQuery("[id|='contact.email']").val();
  sendToken(email);
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
            // <button type="link" id="" class="col-12 col-sm-4 text-small m-top-none btn-resend-code btn btn-link btn-disabled" tabindex="0" disabled="">
            //   <span>
            //     <svg class="icon-btn-resend-code" width="20px" height="20px" viewBox="0 0 1024 1024">
            //       <path d="M752.869 271.058C683.323 201.511 584.763 161.405 476.389 172.498C319.803 188.285 190.949 315.431 173.456 472.018C149.989 678.951 309.989 853.458 511.803 853.458C647.909 853.458 764.816 773.671 819.429 658.898C833.083 630.311 812.603 597.458 781.029 597.458C765.243 597.458 750.309 605.991 743.483 620.071C695.269 723.751 579.643 789.458 453.349 761.298C358.629 740.391 282.256 663.165 262.203 568.445C226.363 402.898 352.229 256.125 511.803 256.125C582.629 256.125 645.776 285.565 691.856 332.071L627.429 396.498C600.549 423.378 619.323 469.458 657.296 469.458H810.469C833.936 469.458 853.136 450.258 853.136 426.791V273.618C853.136 235.645 807.056 216.445 780.176 243.325L752.869 271.058V271.058Z">
            //       </path>
            //     </svg>
            //     <div class="text-btn-resend-code">Reenviar código</div>
            //   </span>
            // </button>
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
    `));
  };
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map