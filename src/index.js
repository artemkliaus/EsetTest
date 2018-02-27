import './common.scss';

import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

let model = new Model(XMLHttpRequest);

let targetElement = document.getElementById('listOf');
let view = new View(targetElement);

let controller = new Controller(view, model);

controller.initialize();

controller.onClickGet({ currentTarget: { dataset: { index: 0 } } });