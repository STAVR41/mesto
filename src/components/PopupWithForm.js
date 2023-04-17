import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor(popupSelector, {handleFormSubmit}) {
		super(popupSelector);
		this._handleFormSubmit = handleFormSubmit;
		this._formPopup = this._popupItem.querySelector(".form");
		this._inputList = this._formPopup.querySelectorAll(".form__input");
	}

	_getInputValues() {
		const dataForm = {};
		this._inputList.forEach(item => dataForm[item.name] = item.value);
		return dataForm;
	}

	close () {
		this._formPopup.reset();
		super.close();
	}

	setEventListeners() {
		this._formPopup.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleFormSubmit(this._getInputValues());
			this.close();
		});
		super.setEventListeners();
	}
}