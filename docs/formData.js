const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#send');
const modalText = document.querySelector('.popup-form__text')
const popupForm = document.querySelector('.popup-form');
const closePopupForm = document.querySelector('.popup-form__close');
const overlayForm = document.querySelector('.overlay-form');

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm(myForm)) {
        let name = myForm.elements.name.value;
        let phone = myForm.elements.phone_number.value;
        let comment = myForm.elements.comment.value;
        let mail = 'mail@mail.ru';
        let formData = new FormData();
        formData.append('name', name);
        formData.append('phone_number', phone);
        formData.append('comment', comment);
        formData.append('to', mail);

        let url = 'https://webdev-api.loftschool.com/sendmail/fail';

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);
        xhr.addEventListener('load', e => {

            if (xhr.status == 200) {

                popupForm.classList.add('opened');
                modalText.innerText = 'Отправить письмо не удалось, повторите запрос позже.';

            } else if (xhr.status != 200) {

                popupForm.classList.add('opened');
                modalText.innerText = 'Сообщение отправлено';
                
            }
                closePopupForm.addEventListener('click', e => {
                    e.preventDefault();
                    popupForm.classList.remove('opened');
                });
                overlayForm.addEventListener("click", e => {
                    if (e.target === overlayForm) {
                        closePopupForm.click();
                    }
                })
            
            return xhr;

        })
    }
})


function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone_number)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {

    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }

}

















// const myForm = document.querySelector('#myForm');
// const send = document.querySelector('#send');

// send.addEventListener('click', e => {
//     e.preventDefault();

//     if (validateForm(myForm)) {
//         const data = {
//             name: myForm.elements.name.value,
//             phone_number: myForm.elements.phone_number.value,
//             comment: myForm.elements.comment.value,

//         };
//         let url = "https://webdev-api.loftschool.com/sendmail/";
//         const xhr = new XMLHttpRequest();
//         xhr.responseType = "json";
//         xhr.open("POST", url);
//         xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//         xhr.send(JSON.stringify(data));
//         xhr.addEventListener('load', () => {
//             if(xhr.response.status) {
//                 console.log('Все ок');

//             }
//         });
//     }
// });