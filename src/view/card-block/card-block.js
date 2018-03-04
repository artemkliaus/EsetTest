let _private = {};

class CardBlock {
    
    constructor (element) {
        this.element = element;
        this.initialize();
    }
    
    initialize () {
        this.element.addEventListener('click', this.clickHandler.bind(this));
    }
    
    clickHandler (event) {
        var eventShowPopup = new Event('showPopup', {'bubbles': true});
        
        this.element.dispatchEvent(eventShowPopup);
        console.log('dispch');
    }
}

module.exports = CardBlock;