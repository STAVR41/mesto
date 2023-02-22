const popupRedact = document.querySelector(".popup_type_redact");
const formElement = document.querySelector(".form")
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const openPopupButtonProfile = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_type_card");
const closePopupButton = document.querySelectorAll(".popup__close");
const like = document.querySelectorAll(".card__like");

function handleFormSubmit(evt) {
   evt.preventDefault();
   profileName.textContent = nameInput.value;
   profileJob.textContent = jobInput.value;
   closePopup(popupRedact);
};

function openPopup(item) {
   item.classList.add("popup_opened");
};
function closePopup(item) {
   item.classList.remove("popup_opened");
};
//Открытие попап редактирования профиля
openPopupButtonProfile.addEventListener("click", function () {
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
   openPopup(popupRedact)
});
//Закрытие обоих попапов
closePopupButton.forEach(item => {
   item.addEventListener("click", function () {
      const element = item.closest(".popup");
      closePopup(element);
   });
});
//Открытие попап с карточками
addCardButton.addEventListener("click", function () {
   openPopup(popupCard);
});
formElement.addEventListener('submit', handleFormSubmit);
like.forEach(item => {
   item.addEventListener("click", function () {
      item.classList.toggle("card__like_active")
   });
});

const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   // {
   //    name: 'Камчатка',
   //    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   // },
   // {
   //    name: 'Холмогорский район',
   //    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   // },
   // {
   //    name: 'Байкал',
   //    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   // }
];
const template = document.querySelector("#card").content;
const cloneTemplate = template.querySelector(".card").cloneNode(true);
const cardsBlock = document.querySelector(".cards");

for (let i = 0; i <= initialCards.length; i++) {
   cloneTemplate.querySelector(".card__title").textContent = initialCards[i].name;
   cloneTemplate.querySelector(".card__img").setAttribute("src", initialCards[i].link);
   cardsBlock.append(cloneTemplate);
}



