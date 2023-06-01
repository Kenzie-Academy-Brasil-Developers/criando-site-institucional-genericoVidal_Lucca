/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    const button = document.querySelector('.subscribeButton')
    const modalController = document.querySelector('.modal__controller')
    button.addEventListener('click', function () {
        modalController.showModal()

    })
}
handleModal()