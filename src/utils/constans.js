export const config = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__save",
	inactiveButtonClass: "form__save_inactive",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_active",
};
export const dataUserProfile = {
	nameUserInfo: ".profile__title",
	captionUserInfo: ".profile__subtitle",
	imgUserInfo: ".profile__img"
}
export const formEditProfile = document.querySelector(".form_type_redact");
export const profileImgBlock = document.querySelector(".profile__img-cover");
export const jobInput = document.querySelector(".form__input_type_job");
export const addCardButton = document.querySelector(".profile__add-button");
export const formAddCard = document.querySelector(".form_type_card");
export const formAvatarPopup = document.querySelector(".form_type_avatar");
export const openPopupButtonProfile = document.querySelector(".profile__edit-button");
export const nameInput = formEditProfile.querySelector(".form__input_type_name");



