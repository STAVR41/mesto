export default class Card {
	constructor(card, template, userId, options) {
		this._template = template;
		this._card = card;
		this._name = this._card.name;
		this._link = this._card.link;
		this._options = options;
		this._ownerId = card.owner._id;
		this._userId = userId;
		this.idCard = card._id;
	}
	createCard() {
		this._getInputValues();
		this._imgElement = this._element.querySelector(".card__img");
		this._titleElement = this._element.querySelector(".card__title");
		this._deleteButton = this._element.querySelector(".card__delete")
		this._counter = this._element.querySelector(".card__counter");
		this._likeCard = this._element.querySelector(".card__like");
		this._counter.textContent = this._card.likes.length;
		this._imgElement.src = this._link;
		this._imgElement.alt = this._name;
		// console.log(this._ownerId)
		this._titleElement.textContent = this._name;
		this._setEventListener();
		if (this.isLike()) {
			this.toggleLike();
		}
		if (this._userId !== this._ownerId) {
			this._deleteButton.remove()
		}
		return this._element;
	}
	isLike() {
		return this._card.likes.some(id => id._id === this._userId);
	}
	deleteCard() {
		this._element.remove()
	}
	_getInputValues() {
		this._element = document.querySelector(this._template).content.querySelector(".card").cloneNode(true);
	}
	_setEventListener() {
		this._imgElement.addEventListener("click", () => this._options.handleCardClick(this._card));
		this._likeCard.addEventListener("click", () => this._checkLikeActive());
		this._deleteButton.addEventListener("click", () => this._options.handleDelClick());
	}
	_checkLikeActive() {
		if (!this._likeCard.classList.contains("card__like_active")) {
			this._options.addLike(this.idCard);
		} else {
			this._options.removeLike(this.idCard);
		}
	}
	toggleLike() {
		this._likeCard.classList.toggle("card__like_active");
	}
	changeCounterLikes(card) {
		this._counter.textContent = card.likes.length;
	}
}