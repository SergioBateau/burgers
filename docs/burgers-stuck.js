const burgerIcon = document.querySelector('.burger-icon-link');
const burgerStuck = document.querySelector('.burgers__struck-menu');
const burgerStuckCloseIcon = document.querySelector('.close_struck');



burgerIcon.addEventListener('click', function (event) {
    event.preventDefault();
    burgerStuck.style.display = 'block';
    
})

burgerStuckCloseIcon.addEventListener('click', function (event) {
    event.preventDefault();
    burgerStuck.style.display = 'none';
})