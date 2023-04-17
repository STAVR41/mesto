export default class Card {
	constructor(card, template, handleCardClick) {
		this._template = template;
		this._card = card;
		this._name = this._card.name;
		this._link = this._card.link;
		this._handleCardClick  = handleCardClick;
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
		this._imgElement.addEventListener("click", () => this._handleCardClick(this._card));
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