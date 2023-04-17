export default class Section {
	constructor ({items, renderer}, container) {
		this._arrCards = items;
		this._container = document.querySelector(container);
		this._renderer = renderer;
	}

	allCardRender() {
		this._arrCards.forEach(item => this._renderer(item));
	}

	addItem(element) {
		this._container.prepend(element);
	}
}
