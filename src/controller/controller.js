class PenguinController {
    
    constructor (penguinView, penguinModel) {
        this.penguinView = penguinView;
        this.penguinModel = penguinModel;
    }
    
    initialize () {
        this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
    }
    
    onClickGetPenguin (e) {
        let target = e.currentTarget;
        let index = parseInt(target.dataset.penguinIndex, 10);
        
        this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
    }
    
    showPenguin (penguinModelData) {
        let penguinViewModel = {
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
}

module.exports = PenguinController;