// Перехід за посиланням
// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

import {Modal} from "./Modal.js";


// const btn = document.querySelectorAll('.btn');
const modal = new Modal(document.querySelector('.modal'));
const form = document.querySelector('.modal__form');
const btnOpenModal = document.querySelector('.modal-btn');
const btnRedirect = document.querySelector('.redirect-btn');
// const btnSubmit = document.querySelector('.submit-btn');
const redirectUrl = document.querySelector('.redirect-url');
let url = '';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    url = form.elements.url.value;
    const reHttp = new RegExp(`^http?://`);
    const reHttps = new RegExp(`^https?://`);
    const https = `https://`;

    if (reHttps.test(url)) {
        console.log(url);
        redirectUrl.innerText = url;
        form.reset();
        modal.hide();
    }

    if (reHttp.test(url)) {
        console.log(reHttp.test(url));
        url = url.replace(reHttp, https);
        console.log(url);
        redirectUrl.innerText = url;
        form.reset();
        modal.hide();
    }
})

btnOpenModal.onclick = () => modal.show();
btnRedirect.onclick = () => (url !== '') ? window.open(url) : redirectUrl.innerText = 'Введіть посилання';