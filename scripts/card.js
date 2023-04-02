import { openPopup } from "../utils/utils.js";

export default class Card {
	constructor(card, template) {
		this._template = template;
		this._name = card.name;
		this._link = card.link;
		this._popup = document.querySelector(".popup_type_img");
		this._popupImg = this._popup.querySelector(".popup__img");
		this._popupCaption = this._popup.querySelector(".popup__caption");
		this._openPopup = () => {
			this._popupImg.src = this._link;
			this._popupImg.alt = this._name;
			this._popupCaption.textContent = this._name;
			openPopup(this._popup);
		};
	}
	createCard() {
		this._getInputValues();
		this._imgElement = this._element.querySelector(".card__img");
		this._titleElement = this._element.querySelector(".card__title");
		this._imgElement.src = this._link;
		this._imgElement.alt = this._name;
		this._titleElement.textContent = this._name;
		this._setEventListener();
		return this._element;
	}

	_getInputValues() {
		this._element = document.querySelector(this._template).content.querySelector(".card").cloneNode(true);
	}

	_setEventListener() {
		this._imgElement.addEventListener("click", this._openPopup);
		this._element.querySelector(".card__like").addEventListener("click", this._handleLikeClick);
		this._element.querySelector(".card__delite").addEventListener("click", this._deliteCard);
	}

	_handleLikeClick(e) {
		e.target.classList.toggle("card__like_active");
	}

	_deliteCard(e) {
		e.target.closest(".card").remove();
	}

}