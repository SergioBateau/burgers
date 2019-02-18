const buttons = document.querySelectorAll('#modal');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const popupText = document.querySelector('.popup__text');
const popupTitle = document.querySelector('.popup__title');

for (button of buttons) {
button.addEventListener('click', e=> {
    e.preventDefault();
    popup.classList.add('opened');

    curButton = e.currentTarget;
    let reviewButton = curButton.parentNode;
    let reviewText = reviewButton.previousElementSibling;
    let review = reviewText.textContent;
    popupText.innerHTML = review;
    let reviewTitle = reviewText.previousElementSibling;
    let title = reviewTitle.textContent;
    popupTitle.innerHTML = title;
    
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