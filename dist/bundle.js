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

var _model = __webpack_require__(2);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _controller = __webpack_require__(4);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = new _model2.default(XMLHttpRequest);

var targetElement = document.getElementById('listOf');
var view = new _view2.default(targetElement);

var controller = new _controller2.default(view, model);

controller.initialize();

controller.onClickGet({ currentTarget: { dataset: { index: 0 } } });

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    function Model(XMLHttpRequest) {
        _classCallCheck(this, Model);

        this.XMLHttpRequest = XMLHttpRequest;
    }

    _createClass(Model, [{
        key: 'get',
        value: function get(index, fn) {
            var oReq = new this.XMLHttpRequest();

            oReq.onload = function onLoad(e) {
                var ajaxResponse = JSON.parse(e.currentTarget.responseText);
                var p = ajaxResponse[index];

                p.index = index;
                p.count = ajaxResponse.length;

                fn(p);
            };

            oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
            oReq.send();
        }
    }]);

    return Model;
}();

module.exports = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(element) {
        _classCallCheck(this, View);

        this.element = element;

        this.onClickGet = null;
    }

    _createClass(View, [{
        key: 'render',
        value: function render(viewModel) {
            this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' + '<img class="image" src="' + viewModel.imageUrl + '" alt="' + viewModel.name + '" />' + '<p><b>Size:</b> ' + viewModel.size + '</p>' + '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' + '<a id="previous" class="previous button" href="javascript:void(0);"' + ' data-index="' + viewModel.previousIndex + '">Previous</a> ' + '<a id="next" class="next button" href="javascript:void(0);"' + ' data-index="' + viewModel.nextIndex + '">Next</a>';

            this.previousIndex = viewModel.previousIndex;
            this.nextIndex = viewModel.nextIndex;

            var previous = this.element.querySelector('#previous');
            previous.addEventListener('click', this.onClickGet);

            var next = this.element.querySelector('#next');
            next.addEventListener('click', this.onClickGet);
        }
    }]);

    return View;
}();

module.exports = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(view, model) {
        _classCallCheck(this, Controller);

        this.view = view;
        this.model = model;
    }

    _createClass(Controller, [{
        key: "initialize",
        value: function initialize() {
            this.view.onClickGet = this.onClickGet.bind(this);
        }
    }, {
        key: "onClickGet",
        value: function onClickGet(e) {
            var target = e.currentTarget;
            var index = parseInt(target.dataset.index, 10);

            this.model.get(index, this.show.bind(this));
        }
    }, {
        key: "show",
        value: function show(modelData) {
            var viewModel = {
                name: modelData.name,
                imageUrl: modelData.imageUrl,
                size: modelData.size,
                favoriteFood: modelData.favoriteFood
            };

            viewModel.previousIndex = modelData.index - 1;
            viewModel.nextIndex = modelData.index + 1;

            if (modelData.index === 0) {
                viewModel.previousIndex = modelData.count - 1;
            }

            if (modelData.index === modelData.count - 1) {
                viewModel.nextIndex = 0;
            }

            this.view.render(viewModel);
        }
    }]);

    return Controller;
}();

module.exports = Controller;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map