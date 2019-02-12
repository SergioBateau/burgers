var items1 = document.querySelectorAll('.team__desc-item');
// нашли все.menu__accordeon-item

for (var item of items1) {
    //перебираем все .menu__accordeon-item
    item.addEventListener('click', e => {
        //навесим клик на каждый .menu__accordeon-item

        var curItem = e.currentTarget;
        // ссылается на элемент на которое предназначалось событие

        var content = curItem.querySelector('.team__desc-profile');
       

        var profilePhoto = content.firstElementChild;
        // находим первый блок .menu__text
        console.log(profilePhoto);
        
        var profileDuty = content.getElementsByTagName('div')[1];
        console.log(profileDuty);
        
        var reqHeight = (profilePhoto.getBoundingClientRect().height)+(profileDuty.getBoundingClientRect().height);
        
        // открыть на исходную высоту
        console.log(reqHeight);
        
        

        if (curItem.classList.contains('js-team__desc-item')) {
            //пункт открыт
            curItem.classList.remove('js-team__desc-item');
            content.style.height = 0;
        } else {
            // пункт закрыт
            Array.from(items1).forEach(elem => {
                elem.classList.remove('js-team__desc-item');
                elem.querySelector('.team__desc-profile').style.height=0;
            });
            
            curItem.classList.add('js-team__desc-item');
            content.style.height = `${reqHeight}px`;
        }

    });
}