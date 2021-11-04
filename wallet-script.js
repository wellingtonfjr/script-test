(function(){
  const button = () => {
    document.getElementById('tag-id').innerHTML = `
      <button type="button" id="btnVerifyEmailWallet" class="pull-right text-uppercase m-top-half btn btn-primary" tabindex="0">
        <span>Continuar</span>
      </button>
    `;
  }
  console.log('App Wallet')
  window.functionExport = function() {
    return function() {
      console.log('functionExport')
    }
  }
  export {functionExport}

})();