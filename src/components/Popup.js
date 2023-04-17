export default class Popup {
	constructor(popupSelector) {
		this._popupItem = document.querySelector(popupSelector);
	}

	open() {
		this._popupItem.classList.add("popup_opened");
		document.addEventListener("keyup", this._handleEscClose.bind(this));
	}

	close() {
		this._popupItem.classList.remove("popup_opened");
		document.removeEventListener("keyup", this._handleEscClose.bind(this));
	}
	_handleEscClose(evt) {
		if (evt.key === "Escape") {
			this.close();
		}
	}
	_closePopupClickOverlay(evt) {
		if (evt.target.classList.contains("popup")) {
			this.close();
		}
	}
	setEventListeners() {
		document.querySelectorAll(".popup__close").forEach(item => {
			item.addEventListener("click", () => this.close());
		});
		document.addEventListener("mousedown", (evt) => {
			this._closePopupClickOverlay(evt);
		});
	}
}