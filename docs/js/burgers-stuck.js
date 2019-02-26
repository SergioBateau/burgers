;const burgerStrucks = document.querySelectorAll('.burgers__struck');
const burgerStuckCloseIcon = document.querySelector('.close_struck');

for (burgerStruck of burgerStrucks) {
    let burgerIcon = burgerStruck.getElementsByTagName('a')[0];

    burgerIcon.addEventListener('click', function (e) {
        e.preventDefault();
        let curBurgerIcon = e.currentTarget;
        // console.log(curBurgerIcon);

        let burgerStuck1 = curBurgerIcon.parentNode;
        // console.log(burgerStuck1);

        const burgerMenuStuck = burgerStuck1.getElementsByTagName('div')[1];
        
        // if (burgerMenuStuck.style.display = 'none') {
        // burgerMenuStuck.style.display = 'block';
        // }
        burgerMenuStuck.classList.toggle('open');


        burgerStuckCloseIcon.addEventListener('click', function (e) {
            e.preventDefault();
            burgerMenuStuck.style.display = 'none';
        })


    })
};