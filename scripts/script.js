const popupRedact = document.querySelector(".popup_type_redact");
const formRedactProfile = document.querySelector(".form");
const jobInput = document.querySelector(".form__input_type_job");
const nameInputCard = document.querySelector(".form__input_type_text");
const linkInput = document.querySelector(".form__input_type_link");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const openPopupButtonProfile = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_type_card");
const buttonsClosePopups = document.querySelectorAll(".popup__close");
const cardsBlock = document.querySelector(".cards");
const formCard = document.querySelector(".form_type_card");
const popupImg = document.querySelector(".popup_type_img");
const imgPopup = document.querySelector(".popup__img");
const captionPopup = document.querySelector(".popup__caption");
const cardsTemplate = document.querySelector("#card").content;
const formEdit = document.querySelector(".form_type_redact");
const nameInput = formEdit.querySelector(".form__input_type_name");
const popup = document.querySelectorAll(".popup");

function createCard(card) {
	const newCard = cardsTemplate.querySelector(".card").cloneNode(true);
	const newCardImage = newCard.querySelector(".card__img");
	const newCardTitle = newCard.querySelector(".card__title");
	newCardImage.src = card.link;
	newCardImage.alt = card.name;
	newCardImage.addEventListener("click", () => openModalImg(card));
	newCardTitle.textContent = card.name;
	newCard.querySelector(".card__like").addEventListener("click", handleLikeClick);
	newCard.querySelector(".card__delite").addEventListener("click", deliteCard);
	return newCard;
}
function renderCard(block, item) {
	block.prepend(createCard(item));
}
// eslint-disable-next-line no-undef
initialCards.forEach(item => {
	renderCard(cardsBlock, item);
});
function openModalImg(card) {
	imgPopup.src = card.link;
	captionPopup.textContent = card.name;
	imgPopup.alt = card.name;
	openPopup(popupImg);
}
function deliteCard(e) {
	e.target.closest(".card").remove();
}
function handleLikeClick(e) {
	e.target.classList.toggle("card__like_active");
}
function handleFormSubmitRedactProfile(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	closePopup(popupRedact);
}
function openPopupEdit() {
	nameInput.value = profileName.textContent;
	jobInput.value = profileJob.textContent;
	openPopup(popupRedact);
}
function openPopup(item) {
	item.classList.add("popup_opened");
}
function closePopup(item) {
	item.classList.remove("popup_opened");
}
function addCard(e) {
	e.preventDefault();
	closePopup(popupCard);
	renderCard(cardsBlock, {
		name: nameInputCard.value,
		link: linkInput.value,
	});
	formCard.reset();
}
function closePopupEscape(evt) {
	popup.forEach(item => {
		if (evt.key === "Escape") {
			item.classList.remove("popup_opened");
		}
	});
}
function closePopupClickOverlay(item) {
	popup.forEach(elem => {
		if (!(item.target.closest(".popup__container") || item.target.closest(".profile__edit-button") || item.target.closest(".profile__add-button") || item.target.closest(".card__img") || item.target.closest(".popup__img"))) {
			elem.classList.remove("popup_opened");
		}
	});
}

buttonsClosePopups.forEach(item => {
	item.addEventListener("click", function () {
		const element = item.closest(".popup");
		closePopup(element);
	});
});
addCardButton.addEventListener("click", function () {
	openPopup(popupCard);
});
formRedactProfile.addEventListener("submit", handleFormSubmitRedactProfile);
formCard.addEventListener("submit", addCard);
openPopupButtonProfile.addEventListener("click", openPopupEdit);
document.addEventListener("keyup", closePopupEscape);
document.addEventListener("click", closePopupClickOverlay);
