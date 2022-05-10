document.addEventListener('DOMContentLoaded', function () {

    const catalogBtn = document.querySelectorAll('.button-catalog');
    const catalogMenu = document.querySelector('.menu-container');
    const modalWindow = document.querySelector('.modal-window');

        catalogBtn.forEach(function (item) {
        item.addEventListener('click',function (){
            item.classList.toggle('button-catalog--active')
            catalogMenu.classList.toggle('menu-container--open');
            modalWindow.classList.toggle('modal-window--open');
        })
    })
})