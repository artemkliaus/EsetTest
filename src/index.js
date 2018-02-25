import './common.scss';

import PenguinModel from './model/model.js';
import PenguinView from './view/view.js';
import PenguinController from './controller/controller.js';

let penguinModel = new PenguinModel(XMLHttpRequest);

let targetElement = document.getElementById('listOfPenguins');
let penguinView = new PenguinView(targetElement);

let controller = new PenguinController(penguinView, penguinModel);

controller.initialize();

controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });