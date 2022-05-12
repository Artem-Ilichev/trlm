document.addEventListener('DOMContentLoaded', function () {

    const catalogBtn = document.querySelectorAll('.button-catalog');
    const catalogMenu = document.querySelector('.catalog-menu');
    const ctlgMenMinWidth = document.querySelector('.catalog-menu-tablet-mobile');
    const modalWindow = document.querySelector('.modal-window');
    const registrationBtn = document.querySelector('.user-profile__enter');
    const registration = document.querySelector('.registration');
    const registrationClose = document.querySelector('.button-close');

        catalogBtn.forEach(function (item) {
        item.addEventListener('click',function (){
            item.classList.toggle('button-catalog--active')
            catalogMenu.classList.toggle('menu-container--open');
            ctlgMenMinWidth.classList.toggle('catalog-menu-tablet-mobile--open');
            ModalWindow();
        })
    })
    registrationBtn.addEventListener('click',function (){
        registration.classList.toggle('registration--open');
        ModalWindow();
    })

    registrationClose.addEventListener('click',function (){
        registration.classList.remove('registration--open');
        ModalWindow();
    })

    function ModalWindow() {
           if (modalWindow.classList.contains('modal-window--open')){
               modalWindow.classList.remove('modal-window--open')
           } else {
               modalWindow.classList.add('modal-window--open')
           }
    }
})