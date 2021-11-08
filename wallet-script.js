(function(){
  console.log('App Wallet')
  
  const closeModalApp = () => {

  }

  openModal = () => {
    console.log('openModal')
    $("body").append($(`
      <div class="modal fade">
        <div
          class="modal-backdrop fade"
          onClick={closeModalApp}
          role="dialog"
          tabIndex={-1}
        />

        <div class="modal-dialog">
          <div
            class="modal-header"
          >
            <h5 class="modal-title">{title}</h5>
            <button onClick={close} type="button" class="modal-close" aria-label="Close">
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