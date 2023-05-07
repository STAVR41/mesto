import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupImg = this._popupItem.querySelector(".popup__img");
		this._popupCaption = this._popupItem.querySelector(".popup__caption");
	}

	open(item) {
		this._popupImg.src = item.link;
		this._popupImg.alt = item.name;
		this._popupCaption.textContent = item.name;
		super.open();
	}
}