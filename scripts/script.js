let popup = document.querySelector(".popup");
let formElement = document.querySelector(".form")
let nameInput = document.querySelector(".form__profile-name");
let jobInput = document.querySelector(".form__profile-job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__close");

function handleFormSubmit(evt) {
   evt.preventDefault();
   profileName.textContent = nameInput.value;
   profileJob.textContent = jobInput.value;
   popupClose();
};

function popupOpen(e) {
   if (openPopup) {
      popup.classList.add("popup__opened");
   }
};
function popupClose(e) {
   if (closePopup) {
      popup.classList.remove("popup__opened");
   }
};

openPopup.addEventListener("click", popupOpen);
closePopup.addEventListener("click", popupClose);
formElement.addEventListener('submit', handleFormSubmit);


