var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

(function(){
  console.log('App Wallet')
  
  closeModalApp = () => {
    $("#modalAppWallet").remove()
  }

  openModal = () => {
    console.log('openModal')
    jQuery("body").append(jQuery(`
      <div id="modalAppWallet" class="modal fade show">
        <div
          class="modal-backdrop fade show"
          onClick="this.closeModalApp()"
          role="dialog"
          tabIndex={-1}
        />

        <div class="modal-dialog">
          <div
            class="modal-header"
          >
            <h5 class="modal-title">Titulo Modal</h5>
            <button onClick="this.closeModalApp()" type="button" class="modal-close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          Conteúdo aqui
        </div>
      </div>
    `));
  }
})();

window.functionExport = function() {
  const response = true
  console.log('out')
  if (response) {
    console.log('insideIf')
    this.openModal()
  }
}


// window.functionExport = function() {
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