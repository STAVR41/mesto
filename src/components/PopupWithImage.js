import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupImg = document.querySelector(".popup__img");
		this._popupCaption = document.querySelector(".popup__caption");
	}
	
	open(item) {
		this._popupImg.src =  item.link;
		this._popupImg.alt = item.name;
		this._popupCaption.textContent = item.name;
		super.open();
	}
}