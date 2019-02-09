const items = document.querySelectorAll('.team__desc-item');
// нашли все.menu__accordeon-item

for (const item of items) {
    //перебираем все .menu__accordeon-item
    item.addEventListener('click', e => {
        //навесим клик на каждый .menu__accordeon-item

        const curItem = e.currentTarget;
        // ссылается на элемент на которое предназначалось событие

        const content = curItem.querySelector('.team__desc-profile');
       

        const textBlock = content.firstElementChild;
        // находим первый блок .menu__text

        const reqHeight = textBlock.getBoundingClientRect().height;
        
        // открыть на исходную высоту
        
        

        if (curItem.classList.contains('js-team__desc-item')) {
            //пункт открыт
            curItem.classList.remove('js-team__desc-item');
            content.style.height = 0;
        } else {
            // пункт закрыт
            Array.from(items).forEach(elem => {
                elem.classList.remove('js-team__desc-item');
                elem.querySelector('.team__desc-profile').style.height=0;
            });
            
            curItem.classList.add('js-team__desc-item');
            content.style.height = `${reqHeight}px`;
        }

    });
}