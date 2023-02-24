const popupRedact = document.querySelector(".popup_type_redact");
const formElement = document.querySelector(".form")
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const textInput = document.querySelector(".form__input_type_text");
const linkInput = document.querySelector(".form__input_type_link");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const openPopupButtonProfile = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_type_card");
const closePopupButton = document.querySelectorAll(".popup__close");

const cardsBlock = document.querySelector(".cards");
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
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];
const formCard = document.querySelector(".form_card");
const popupImg = document.querySelector(".popup_type_img");


////////////////////
///////////////////
function createCard(name, link) {
   const newCard = document.querySelector("#card").content.cloneNode(true);
   newCard.querySelector(".card__img").src = link;
   newCard.querySelector(".card__img").alt = name;
   newCard.querySelector(".card__img").addEventListener("click", openModalImg);
   newCard.querySelector(".card__title").textContent = name;
   newCard.querySelector(".card__like").addEventListener("click", clickLikeCard);
   newCard.querySelector(".card__delite").addEventListener("click", deliteCard);
   cardsBlock.prepend(newCard);
};

const img = document.querySelector(".popup__img");
const caption = document.querySelector(".popup__caption");
initialCards.forEach(item => { createCard(item.name, item.link) });

//Открытие модального окна с картинкой
function openModalImg(e) {
   img.src = e.target.src
   caption.textContent = e.target.alt;
   openPopup(popupImg)
};


//Удаление карточек
function deliteCard(e) {
   e.target.closest(".card").remove();
};


//Активный лайк
function clickLikeCard(e) {
   e.target.classList.toggle("card__like_active");
};


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

// Заполнение профиля
formElement.addEventListener('submit', handleFormSubmit);


//Добавление новой карточки
function addCard(e) {
   e.preventDefault();
   closePopup(popupCard);
   createCard(textInput.value, linkInput.value);
};
formCard.addEventListener("submit", addCard);
