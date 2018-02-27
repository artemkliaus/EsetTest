class Controller {
    
    constructor (view, model) {
        this.view = view;
        this.model = model;
    }
    
    initialize () {
        this.view.onClickGet = this.onClickGet.bind(this);
    }
    
    onClickGet (e) {
        let target = e.currentTarget;
        let index = parseInt(target.dataset.index, 10);
        
        this.model.get(index, this.show.bind(this));
    }
    
    show (modelData) {
        let viewModel = {
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
}

module.exports = Controller;