import View from '../view/view.js';

class Controller {
    
    constructor () {
        this.arrayOfComponents = [];
    }
    
    initialize () {
        let components = document.querySelectorAll('.js-active');
        
        components.forEach(this.getComponent.bind(this));
        this.initComponents();
        
    }
    
    getComponent (el) {
        let control = el.getAttribute('data-control');
        let component = {}
        if(control) {
            component.control = control;
            component.element = el;
            this.arrayOfComponents.push(component);
            
        } else {
            console.warn(el, "[DATA-CONTROL DON'T FOUND]");
        }
    }
    
    initComponents () {
        let init = new View(this.arrayOfComponents);
    }
}

module.exports = Controller;