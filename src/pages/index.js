import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
	config,
	formEditProfile,
	profileImgBlock,
	jobInput,
	addCardButton,
	formAddCard,
	formAvatarPopup,
	openPopupButtonProfile,
	nameInput,
	dataUserProfile,
} from "../utils/constans.js";
import './index.css';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

let idUser

const validationFormSetAvatar = new FormValidator(config, formAvatarPopup);
const validationFormAddCard = new FormValidator(config, formAddCard);
const validationFormRedactProfile = new FormValidator(config, formEditProfile);

const userInfoPopupRedactProfile = new UserInfo(dataUserProfile);
const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
	headers: {
		authorization: '2dabc870-bbc0-4238-9c03-234ae30dbe26',
		'Content-Type': 'application/json'
	}
});

function generateCard(item) {
	const card = new Card(item, "#card", idUser, {
		handleDelClick: () => popupWithConfirmation.open(card),
		handleCardClick: (item) => zoomPopupImg.open(item),
		addLike: (id) => {
			api.addLike(id)
				.then((res) => {
					card.toggleLike();
					card.changeCounterLikes(res)
				})
				.catch(err => console.log(err))
		},
		removeLike: (id) => {
			api.removeLike(id)
				.then((res) => {
					card.toggleLike()
					card.changeCounterLikes(res)
				})
				.catch(err => console.log(err))
		}
	});
	return card.createCard();
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

const zoomPopupImg = new PopupWithImage(".popup_type_img");
const popupRedactProfile = new PopupWithForm(".popup_type_redact", {
	handleFormSubmit: (element) => {
		popupRedactProfile.loadingButtonState("Сохранение...");
		api.setProfileUser(element.profileName, element.profileJob)
			.then(res => {
				userInfoPopupRedactProfile.setUserInfo(res)
			})
			.catch(err => console.log(err))
			.finally(() => popupRedactProfile.loadingButtonState("Сохранить"))
	}
});
const popupCard = new PopupWithForm(".popup_type_card", {
	handleFormSubmit: (element) => {
		popupCard.loadingButtonState("Создание...")
		api.addNewCard(element.cardName, element.cardImg)
			.then(res => renderCardPage.addItem(generateCard(res)))
			.catch(err => console.log(err))
			.finally(() => popupCard.loadingButtonState("Создать"))
	}
});
const popupAvatar = new PopupWithForm(".popup_type_avatar", {
	handleFormSubmit: (item) => {
		popupAvatar.loadingButtonState("Сохранение...");
		api.setAvatarUser(item.avatar)
			.then(res => userInfoPopupRedactProfile.setUserInfo(res))
			.catch(err => console.log(err))
			.finally(() => popupAvatar.loadingButtonState("Сохранить"))
	}
})
const popupWithConfirmation = new PopupWithConfirmation(".popup_type_delete", item => {
	api.deleteCard(item.idCard)
		.then(() => {
			item.deleteCard();
			popupWithConfirmation.close();
		})
		.catch(err => console.log(err));
})
const renderCardPage = new Section({ renderer: (item) => renderCardPage.addItem(generateCard(item)) }, ".cards");

popupWithConfirmation.setEventListeners();
zoomPopupImg.setEventListeners();
popupRedactProfile.setEventListeners();
popupCard.setEventListeners();
popupAvatar.setEventListeners();
validationFormSetAvatar.enableValidation();
validationFormAddCard.enableValidation();
validationFormRedactProfile.enableValidation();
addCardButton.addEventListener("click", removeErrorCardPopup);
openPopupButtonProfile.addEventListener("click", openPopupEdit);
profileImgBlock.addEventListener("click", () => {
	popupAvatar.open()
	validationFormSetAvatar.removeError();
})
Promise.all([api.getInitialCards(), api.getUserInfo()])
	.then(([cards, userInfo]) => {
		idUser = userInfo._id;
		cards.reverse();
		userInfoPopupRedactProfile.setUserInfo(userInfo)
		renderCardPage.renderItems(cards);
	})
	.catch((err) => console.log(err))








