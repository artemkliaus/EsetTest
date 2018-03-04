let _private = {}

class Model {

    constructor () {}
    
    getData (data, cb) {
        let xhr = new XMLHttpRequest(),
            url = 'https://api2.esetnod32.ru/frontend/test/',
            getParams = '?' + 'title=' + data.name + '&email=' + data.email + '&text=' + data.text;

        xhr.open('GET', url + getParams, true);
        
        xhr.send();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            
            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                cb(xhr.responseText);
            }
        }
    }
    
    instance () {
        console.log(this);
        if (_private.instance) {
            return _private.instance;
        } else {
            _private.instance = new Model();
        }
    }
}

module.exports = Model;