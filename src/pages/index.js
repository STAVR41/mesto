import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards as arrCards, config } from "../components/constans.js";
import './index.css';

const formEditProfile = document.querySelector(".form_type_redact");
const forms = document.querySelectorAll(".form");
const jobInput = document.querySelector(".form__input_type_job");
const nameInput = formEditProfile.querySelector(".form__input_type_name");
const openPopupButtonProfile = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const formAddCard = document.querySelector(".form_type_card");
const validationFormAddCard =  new FormValidator(config, formAddCard);
const validationFormRedactProfile = new FormValidator(config, formEditProfile);
const userInfoPopupRedactProfile = new UserInfo({nameUserInfo: ".profile__title", captionUserInfo: ".profile__subtitle"});

const zoomPopupImg = new PopupWithImage("#popup_type_img");
zoomPopupImg.setEventListeners();

const popupRedactProfile = new PopupWithForm(".popup_type_redact", {
	handleFormSubmit: (element) => {
		userInfoPopupRedactProfile.setUserInfo({name: element.profileName, caption: element.profileJob});
	}});
popupRedactProfile.setEventListeners();

const popupCard = new PopupWithForm(".popup_type_card", {
	handleFormSubmit: (element) => {
		renderCardPage.addItem(generateCard({name: element.cardName, link: element.cardImg}));
	}
});
popupCard.setEventListeners();

const renderCardPage = new Section({items: arrCards, renderer: (item) => {
	renderCardPage.addItem(generateCard(item));
}}, ".cards");
renderCardPage.allCardRender();

function generateCard(item) {
	const card = new Card(item, "#card", handleCardClick);
	return card.createCard();
}
function handleCardClick(item) {
	zoomPopupImg.open(item);
}
function validationForm(item) {
	const formValidation = new FormValidator(config, item);
	formValidation.enableValidation();
}
function openPopupEdit() {
	const actualDataPopupRedactProfile = userInfoPopupRedactProfile.getUserInfo();
	nameInput.value = actualDataPopupRedactProfile.name;
	jobInput.value = actualDataPopupRedactProfile.caption;
	validationFormRedactProfile.removeError();
	popupRedactProfile.open();
}
function removeErrorCardPopup() {
	validationFormAddCard.removeError();
	popupCard.open();
}

forms.forEach(item => validationForm(item));
addCardButton.addEventListener("click", removeErrorCardPopup);
openPopupButtonProfile.addEventListener("click", openPopupEdit);








