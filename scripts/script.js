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
const formCard = document.querySelector(".form_type_card");
const popupImg = document.querySelector(".popup_type_img");
const imgPopup = document.querySelector(".popup__img");
const captionPopup = document.querySelector(".popup__caption");
const initialCards = [
   {
      name: 'Frog',
      link: 'https://i.gifer.com/origin/6b/6b72817f6498f551062b2788084cb1f6_w200.gif'
   },
   {
      name: 'Ricardo',
      link: 'https://www.meme-arsenal.com/memes/c84127c51d392963f20772d51ed76ffd.jpg'
   },
   {
      name: 'Клоун',
      link: 'https://www.meme-arsenal.com/memes/308998085969483b920bf7bb77bf01f1.jpg'
   },
   {
      name: 'Simpsons',
      link: 'https://i.gifer.com/origin/ee/ee906a8fdddcf6a8f14d3faf63b1d078_w200.gif'
   },
   {
      name: 'Koreyka',
      link: 'https://media.tenor.com/K4pbXRYZmA8AAAAd/%D0%B0%D0%B1%D0%BE%D0%B1%D1%83%D1%81-%D0%B4%D0%B0%D1%88%D0%B0.gif'
   },
   {
      name: 'KoronaTime',
      link: 'https://s1.bloknot-krasnodar.ru/thumb/850x0xcut/upload/iblock/6af/4aumvukqnzwpv9ibeblhhjz6fbo419mm/b5b5db5b3f4507784922742775bd4dea.png'
   }
];
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
initialCards.forEach(item => { createCard(item.name, item.link) });
function openModalImg(e) {
   imgPopup.src = e.target.src
   captionPopup.textContent = e.target.alt;
   openPopup(popupImg)
};
function deliteCard(e) {
   e.target.closest(".card").remove();
};
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
openPopupButtonProfile.addEventListener("click", function () {
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
   openPopup(popupRedact)
});
closePopupButton.forEach(item => {
   item.addEventListener("click", function () {
      const element = item.closest(".popup");
      closePopup(element);
   });
});
addCardButton.addEventListener("click", function () {
   openPopup(popupCard);
});
formElement.addEventListener('submit', handleFormSubmit);
function addCard(e) {
   e.preventDefault();
   closePopup(popupCard);
   createCard(textInput.value, linkInput.value);
   textInput.value = "";
   linkInput.value = "";
};
formCard.addEventListener("submit", addCard);