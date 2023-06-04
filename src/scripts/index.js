/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    const button = document.querySelector('.subscribeButton')
    const modalController = document.querySelector('.modal__controller')
    const closeButton = document.querySelector('.modal_close');
    button.addEventListener('click', function () {
        modalController.showModal()

    })
    closeButton.addEventListener('click', function () {
        modalController.close();
    });


}



handleModal()