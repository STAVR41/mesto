import FormValidator from "./FormValidator.js";
import Card from "./Сard.js";
import { openPopup, closePopup } from "../utils/utils.js";
import { initialCards as arrCards, config } from "./constans.js";

const popupRedact = document.querySelector(".popup_type_redact"),
   forms = document.querySelectorAll(".form"),
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
   formAddCard = document.querySelector(".form_type_card"),
   formEditProfile = document.querySelector(".form_type_redact"),
   nameInput = formEditProfile.querySelector(".form__input_type_name"),
   validationFormAddCard = new FormValidator(config, formAddCard),
   validationFormRedactProfile = new FormValidator(config, formEditProfile);

function renderCard(item) {
   const card = new Card(item, "#card");
   cardsBlock.prepend(card.createCard());
}
function addCard(e) {
   e.preventDefault();
   closePopup(popupCard);
   renderCard({
      name: nameInputCard.value,
      link: linkInput.value,
   });
   formAddCard.reset();
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
   validationFormRedactProfile.removeError();
   openPopup(popupRedact);
}
function removeErrorCardPopup() {
   formAddCard.reset();
   validationFormAddCard.removeError();
   openPopup(popupCard);
}
buttonsClosePopups.forEach(item => {
   item.addEventListener("click", function () {
      const element = item.closest(".popup");
      closePopup(element);
   });
});
arrCards.forEach(item => renderCard(item));
forms.forEach(item => {
   new FormValidator(config, item).enableValidation();
});
addCardButton.addEventListener("click", removeErrorCardPopup);
formEditProfile.addEventListener("submit", handleFormSubmitRedactProfile);
formAddCard.addEventListener("submit", addCard);
openPopupButtonProfile.addEventListener("click", openPopupEdit);






