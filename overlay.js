const buttons = document.querySelectorAll('#modal');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

for (button of buttons) {
button.addEventListener('click', e=> {
    e.preventDefault();
    popup.classList.add('opened');
})
closePopup.addEventListener('click', e=> {
    e.preventDefault();
    popup.classList.remove('opened');
})
}