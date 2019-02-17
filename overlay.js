const buttons = document.querySelectorAll('#modal');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');

for (button of buttons) {
button.addEventListener('click', e=> {
    e.preventDefault();
    popup.classList.add('opened');
})
closePopup.addEventListener('click', e=> {
    e.preventDefault();
    popup.classList.remove('opened');
})
overlay.addEventListener("click", e=> {
    if(e.target ===overlay) {
        closePopup.click();
    }
})
}