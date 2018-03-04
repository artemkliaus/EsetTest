/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _controller = __webpack_require__(12);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Доделать не успел, сорян :(

var controller = new _controller2.default();

controller.initialize();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(14);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        _classCallCheck(this, Controller);

        this.arrayOfComponents = [];
    }

    _createClass(Controller, [{
        key: 'initialize',
        value: function initialize() {
            var components = document.querySelectorAll('.js-active');

            components.forEach(this.getComponent.bind(this));
            this.initComponents();
        }
    }, {
        key: 'getComponent',
        value: function getComponent(el) {
            var control = el.getAttribute('data-control');
            var component = {};
            if (control) {
                component.control = control;
                component.element = el;
                this.arrayOfComponents.push(component);
            } else {
                console.warn(el, "[DATA-CONTROL DON'T FOUND]");
            }
        }
    }, {
        key: 'initComponents',
        value: function initComponents() {
            var init = new _view2.default(this.arrayOfComponents);
        }
    }]);

    return Controller;
}();

module.exports = Controller;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cardBlock = __webpack_require__(15);

var _cardBlock2 = _interopRequireDefault(_cardBlock);

var _popup = __webpack_require__(16);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(components) {
        _classCallCheck(this, View);

        this.modules = {
            CardBlock: _cardBlock2.default,
            Popup: _popup2.default
        };

        try {
            components.forEach(this.initializeComponents.bind(this));
        } catch (e) {
            console.log(e);
        }
    }

    _createClass(View, [{
        key: 'initializeComponents',
        value: function initializeComponents(el, i) {
            var module = this.modules[el.control];
            var instance = new module(el.element);
        }
    }]);

    return View;
}();

module.exports = View;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _private = {};

var CardBlock = function () {
    function CardBlock(element) {
        _classCallCheck(this, CardBlock);

        this.element = element;
        this.initialize();
    }

    _createClass(CardBlock, [{
        key: 'initialize',
        value: function initialize() {
            this.element.addEventListener('click', this.clickHandler.bind(this));
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler(event) {
            var eventShowPopup = new Event('showPopup', { 'bubbles': true });

            this.element.dispatchEvent(eventShowPopup);
            console.log('dispch');
        }
    }]);

    return CardBlock;
}();

module.exports = CardBlock;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = __webpack_require__(17);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _private = {};

var Popup = function () {
    function Popup(element) {
        _classCallCheck(this, Popup);

        this.element = element;
        this.closeButton = this.element.querySelector(_private.selectors.close);
        this.submitButton = this.element.querySelector(_private.selectors.submit);
        this.model = new _model2.default();
        this.initialize();
    }

    _createClass(Popup, [{
        key: 'initialize',
        value: function initialize() {
            window.addEventListener('showPopup', function (event) {
                this.element.classList.add(_private.modifiers.show);
            }.bind(this));

            this.element.addEventListener('click', this.clickHandler.bind(this));
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler(event) {
            if (event.target == this.closeButton || event.target == this.element) {
                console.log(event.target);
                this.element.classList.remove(_private.modifiers.show);
            }

            if (event.target == this.submitButton) {
                event.preventDefault();

                var data = {};
                data.name = 'vasya';
                data.email = 'vasya@mail.ru';
                data.text = 'Hello World';

                this.model.getData(data, this.responseHandler.bind(this));
            }
        }
    }, {
        key: 'responseHandler',
        value: function responseHandler(data) {
            var response = JSON.parse(data),
                responseBlock = this.element.querySelector(_private.selectors.response),
                formBlock = this.element.querySelector(_private.selectors.form);
            formBlock.classList.add(_private.modifiers.hide);
            responseBlock.classList.add(_private.modifiers.show);
            console.log(response);
        }
    }]);

    return Popup;
}();

_private.selectors = {
    close: '.popup-block__close',
    submit: '.popup-block__submit',
    form: '.popup-block__form',
    response: '.popup-block__response',
    nameField: '.popup-block__field-name',
    email: '.popup-block__field-email',
    text: '.popup-block__field-text'
};

_private.modifiers = {
    'show': 'popup-block_show',
    'hide': 'popup-block_hide'
};

module.exports = Popup;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _private = {};

var Model = function () {
    function Model() {
        _classCallCheck(this, Model);
    }

    _createClass(Model, [{
        key: 'getData',
        value: function getData(data, cb) {
            var xhr = new XMLHttpRequest(),
                url = 'https://api2.esetnod32.ru/frontend/test/',
                getParams = '?' + 'title=' + data.name + '&email=' + data.email + '&text=' + data.text;

            xhr.open('GET', url + getParams, true);

            xhr.send();

            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status != 200) {
                    alert(xhr.status + ': ' + xhr.statusText);
                } else {
                    cb(xhr.responseText);
                }
            };
        }
    }, {
        key: 'instance',
        value: function instance() {
            console.log(this);
            if (_private.instance) {
                return _private.instance;
            } else {
                _private.instance = new Model();
            }
        }
    }]);

    return Model;
}();

module.exports = Model;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map