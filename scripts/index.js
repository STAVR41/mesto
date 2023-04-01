import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import { initialCards as arrCards, config } from "./constans.js";
export { openPopup};

const popupRedact = document.querySelector(".popup_type_redact"),
	form = document.querySelectorAll(".form"),
	jobInput = document.querySelector(".form__input_type_job"),
	nameInputCard = document.querySelector(".form__input_type_text"),
	linkInput = document.querySelector(".form__input_type_link"),
	profileName = document.querySelector(".profile__title"),
	profileJob = document.querySelector(".profile__subtitle"),
	openPopupButtonProfile = document.querySelector(".profile__edit-button"),
	addCardButton = document.querySelector(".profile__add-button"),
	popupCard = document.querySelector(".popup_type_card"),
	buttonsClosePopups = document.querySelectorAll(".popup__close"),
	cardsBlock = document.querySelector(".cards"),
	formCard = document.querySelector(".form_type_card"),
	formEdit = document.querySelector(".form_type_redact"),
	nameInput = formEdit.querySelector(".form__input_type_name");

function newCard(item) {
	const card = new Card(item, "#card");
	cardsBlock.prepend(card.createCard());
}
function validationForm(item) {
	const formValidation = new FormValidator(config, item);
	formValidation.enableValidation();
}
function openPopup(item) {
	item.classList.add("popup_opened");
	document.addEventListener("keyup", closePopupEscape);
	document.addEventListener("click", closePopupClickOverlay);
}
function addCard(e) {
	e.preventDefault();
	closePopup(popupCard);
	newCard({
		name: nameInputCard.value,
		link: linkInput.value,
	});
	formCard.reset();
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
	new FormValidator(config, formEdit).removeError();
	openPopup(popupRedact);
}
function closePopup(item) {
	item.classList.remove("popup_opened");
	document.removeEventListener("keyup", closePopupEscape);
	document.removeEventListener("click", closePopupClickOverlay);
}
function closePopupEscape(evt) {
	if (evt.key === "Escape") {
		const popup = document.querySelector(".popup.popup_opened");
		closePopup(popup);
	}
}
function closePopupClickOverlay(evt) {
	if (evt.target.classList.contains("popup")) {
		closePopup(evt.target);
	}
}
function removeErrorCardPopup() {
	formCard.reset();
	new FormValidator(config, formCard).removeError();
	openPopup(popupCard);
}
buttonsClosePopups.forEach(item => {
	item.addEventListener("click", function () {
		const element = item.closest(".popup");
		closePopup(element);
	});
});
arrCards.forEach(item => newCard(item));
form.forEach(item => validationForm(item));
addCardButton.addEventListener("click", removeErrorCardPopup);
formEdit.addEventListener("submit", handleFormSubmitRedactProfile);
formCard.addEventListener("submit", addCard);
openPopupButtonProfile.addEventListener("click", openPopupEdit);




