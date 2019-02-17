const burgerStrucks = document.querySelectorAll('.burgers__struck');
const burgerStuckCloseIcon = document.querySelector('.close_struck');

for (var burgerStruck of burgerStrucks) {
    var burgerIcon = burgerStruck.getElementsByTagName('a')[0];

    burgerIcon.addEventListener('click', function (e) {
        e.preventDefault();
        var curBurgerIcon = e.currentTarget;
        var burgerStuck1 = curBurgerIcon.parentNode;
        burgerMenuStuck = burgerStuck1.getElementsByTagName('div')[1];

        burgerMenuStuck.style.display = 'block';
    })

    burgerStuckCloseIcon.addEventListener('click', function (e) {
        e.preventDefault();
        burgerMenuStuck.style.display = 'none';
    })
}