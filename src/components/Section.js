export default class Section {
	constructor ({renderer}, container) {
		
		this._container = document.querySelector(container);
		this._renderer = renderer;
	}
	renderer(arr) {
		arr.forEach(item => this._renderer(item));
	}
	addItem(element) {
		this._container.prepend(element);
	}
}
