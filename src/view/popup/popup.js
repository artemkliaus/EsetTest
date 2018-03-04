import Model from '../../model/model.js';

let _private = {};

class Popup {
    
    constructor (element) {
        this.element = element;
        this.closeButton = this.element.querySelector(_private.selectors.close);
        this.submitButton = this.element.querySelector(_private.selectors.submit);
        this.model = new Model();
        this.initialize();
    }
    
    initialize () {
        window.addEventListener('showPopup', function(event){
            this.element.classList.add(_private.modifiers.show);
        }.bind(this));
        
        this.element.addEventListener('click', this.clickHandler.bind(this));
    }
    
    clickHandler (event) {
        if(event.target == this.closeButton || event.target == this.element) {
            console.log(event.target);
            this.element.classList.remove(_private.modifiers.show);
        }
        
        if(event.target == this.submitButton) {
            event.preventDefault();
            
            let data = {};
                data.name = 'vasya';
                data.email = 'vasya@mail.ru';
                data.text = 'Hello World';
            
            this.model.getData(data, this.responseHandler.bind(this));
        }
    }
    
    responseHandler(data) {
        let response = JSON.parse(data),
            responseBlock = this.element.querySelector(_private.selectors.response),
            formBlock = this.element.querySelector(_private.selectors.form);
            formBlock.classList.add(_private.modifiers.hide);
            responseBlock.classList.add(_private.modifiers.show);
        console.log(response);
    }
}


_private.selectors = {
    close: '.popup-block__close',
    submit: '.popup-block__submit',
    form: '.popup-block__form',
    response: '.popup-block__response',
    nameField: '.popup-block__field-name',
    email: '.popup-block__field-email',
    text: '.popup-block__field-text'
}

_private.modifiers = {
    'show': 'popup-block_show',
    'hide': 'popup-block_hide'
}

module.exports = Popup;