const burgerStrucks = document.querySelectorAll('.burgers__struck');
const burgerStuckCloseIcon = document.querySelector('.close_struck');

for (burgerStruck of burgerStrucks) {
    let burgerIcon = burgerStruck.getElementsByTagName('a')[0];

    burgerIcon.addEventListener('click', function (e) {
        e.preventDefault();
        let curBurgerIcon = e.currentTarget;
        // console.log(curBurgerIcon);
        
        let burgerStuck1 = curBurgerIcon.parentNode;
        // console.log(burgerStuck1);
        
        let burgerMenuStuck = burgerStuck1.getElementsByTagName('div')[1];
        // console.log(burgerMenuStuck);
        if (burgerMenuStuck.style.display = 'none') {
        burgerMenuStuck.style.display = 'block';
        } 
        burgerStuckCloseIcon.addEventListener('click', function (e) {
            e.preventDefault();
            burgerMenuStuck.style.display = 'none';
    })

    
    })
}