class View {
    
    constructor (element) {
        this.element = element;

        this.onClickGet = null;
    }
    
    render (viewModel) {
        this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' +
            '<img class="image" src="' + viewModel.imageUrl +
            '" alt="' + viewModel.name + '" />' +
            '<p><b>Size:</b> ' + viewModel.size + '</p>' +
            '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
            '<a id="previous" class="previous button" href="javascript:void(0);"' +
            ' data-index="' + viewModel.previousIndex + '">Previous</a> ' +
            '<a id="next" class="next button" href="javascript:void(0);"' +
            ' data-index="' + viewModel.nextIndex + '">Next</a>';

            this.previousIndex = viewModel.previousIndex;
            this.nextIndex = viewModel.nextIndex;

        let previous = this.element.querySelector('#previous');
        previous.addEventListener('click', this.onClickGet);

        let next = this.element.querySelector('#next');
        next.addEventListener('click', this.onClickGet);
    }
}

module.exports = View;