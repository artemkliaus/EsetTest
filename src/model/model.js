class PenguinModel {

    constructor (XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
    }
    
    getPenguin (index, fn) {
        let oReq = new this.XMLHttpRequest();

        oReq.onload = function onLoad(e) {
        let ajaxResponse = JSON.parse(e.currentTarget.responseText);
        let penguin = ajaxResponse[index];

        penguin.index = index;
        penguin.count = ajaxResponse.length;

        fn(penguin);
        };

        oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
        oReq.send();
    }
}

module.exports = PenguinModel;