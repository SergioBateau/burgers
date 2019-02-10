var items = document.querySelectorAll('.menu__accordeon-item');
// нашли все.menu__accordeon-item

for (var item of items) {
    //перебираем все .menu__accordeon-item
    item.addEventListener('click', e => {
        //навесим клик на каждый .menu__accordeon-item

        var curItem = e.currentTarget;
        // ссылается на элемент на которое предназначалось событие

        var content = curItem.querySelector('.menu__desc');
       

        var textBlock = content.firstElementChild;
        // находим первый блок .menu__text

        var reqWidth = textBlock.getBoundingClientRect().width;
        
        // открыть на исходную высоту
        
        

        if (curItem.classList.contains('js-title__menu')) {
            //пункт открыт
            curItem.classList.remove('js-title__menu');
            content.style.width = 0;
        } else {
            // пункт закрыт
            Array.from(items).forEach(elem => {
                elem.classList.remove('js-title__menu');
                elem.querySelector('.menu__desc').style.width=0;
            });
            
            curItem.classList.add('js-title__menu');
            content.style.width = "400px";
        }

    });
}