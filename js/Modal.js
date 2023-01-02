export class Modal {
    elem;
    hiddenClassName = 'hidden';

    constructor(elem) {
        this.elem = elem;
        this.initHandlers();
    }

    initHandlers() {
        this.elem.addEventListener('click', ({target}) => {
            if (target.dataset.action === 'close') {
                this.hide();
            }
        })
    }

    hide() {
        this.elem.classList.add(this.hiddenClassName);
    }

    show() {
        this.elem.classList.remove(this.hiddenClassName);
    }
}