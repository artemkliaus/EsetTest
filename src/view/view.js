import CardBlock from './card-block/card-block.js';
import Popup from './popup/popup.js';

class View {
    
    constructor (components) {
        this.modules = {
            CardBlock: CardBlock,
            Popup: Popup
        }
        
        try {
            components.forEach(this.initializeComponents.bind(this))
        } catch (e) {
            console.log(e);
        }
    }
    
    initializeComponents (el, i) {
        let module = this.modules[el.control];
        let instance = new module(el.element);
    }
    
}

module.exports = View;