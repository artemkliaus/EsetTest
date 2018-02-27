class Model {

    constructor (XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
    }
    
    get (index, fn) {
        let oReq = new this.XMLHttpRequest();

        oReq.onload = function onLoad(e) {
        let ajaxResponse = JSON.parse(e.currentTarget.responseText);
        let p = ajaxResponse[index];

        p.index = index;
        p.count = ajaxResponse.length;

        fn(p);
        };

        oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
        oReq.send();
    }
}

module.exports = Model;