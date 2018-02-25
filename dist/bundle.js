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

var penguinModel = new _model2.default(XMLHttpRequest);

var targetElement = document.getElementById('listOfPenguins');
var penguinView = new _view2.default(targetElement);

var controller = new _controller2.default(penguinView, penguinModel);

controller.initialize();

controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });

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

var PenguinModel = function () {
    function PenguinModel(XMLHttpRequest) {
        _classCallCheck(this, PenguinModel);

        this.XMLHttpRequest = XMLHttpRequest;
    }

    _createClass(PenguinModel, [{
        key: 'getPenguin',
        value: function getPenguin(index, fn) {
            var oReq = new this.XMLHttpRequest();

            oReq.onload = function onLoad(e) {
                var ajaxResponse = JSON.parse(e.currentTarget.responseText);
                var penguin = ajaxResponse[index];

                penguin.index = index;
                penguin.count = ajaxResponse.length;

                fn(penguin);
            };

            oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
            oReq.send();
        }
    }]);

    return PenguinModel;
}();

module.exports = PenguinModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PenguinView = function () {
    function PenguinView(element) {
        _classCallCheck(this, PenguinView);

        this.element = element;

        this.onClickGetPenguin = null;
    }

    _createClass(PenguinView, [{
        key: 'render',
        value: function render(viewModel) {
            this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' + '<img class="penguin-image" src="' + viewModel.imageUrl + '" alt="' + viewModel.name + '" />' + '<p><b>Size:</b> ' + viewModel.size + '</p>' + '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' + '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' + ' data-penguin-index="' + viewModel.previousIndex + '">Previous</a> ' + '<a id="nextPenguin" class="next button" href="javascript:void(0);"' + ' data-penguin-index="' + viewModel.nextIndex + '">Next</a>';

            this.previousIndex = viewModel.previousIndex;
            this.nextIndex = viewModel.nextIndex;

            var previousPenguin = this.element.querySelector('#previousPenguin');
            previousPenguin.addEventListener('click', this.onClickGetPenguin);

            var nextPenguin = this.element.querySelector('#nextPenguin');
            nextPenguin.addEventListener('click', this.onClickGetPenguin);
        }
    }]);

    return PenguinView;
}();

module.exports = PenguinView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PenguinController = function () {
    function PenguinController(penguinView, penguinModel) {
        _classCallCheck(this, PenguinController);

        this.penguinView = penguinView;
        this.penguinModel = penguinModel;
    }

    _createClass(PenguinController, [{
        key: "initialize",
        value: function initialize() {
            this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
        }
    }, {
        key: "onClickGetPenguin",
        value: function onClickGetPenguin(e) {
            var target = e.currentTarget;
            var index = parseInt(target.dataset.penguinIndex, 10);

            this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
        }
    }, {
        key: "showPenguin",
        value: function showPenguin(penguinModelData) {
            var penguinViewModel = {
                name: penguinModelData.name,
                imageUrl: penguinModelData.imageUrl,
                size: penguinModelData.size,
                favoriteFood: penguinModelData.favoriteFood
            };

            penguinViewModel.previousIndex = penguinModelData.index - 1;
            penguinViewModel.nextIndex = penguinModelData.index + 1;

            if (penguinModelData.index === 0) {
                penguinViewModel.previousIndex = penguinModelData.count - 1;
            }

            if (penguinModelData.index === penguinModelData.count - 1) {
                penguinViewModel.nextIndex = 0;
            }

            this.penguinView.render(penguinViewModel);
        }
    }]);

    return PenguinController;
}();

module.exports = PenguinController;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map