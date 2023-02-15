let popup = document.querySelector(".popup");
let formElement = document.querySelector(".form")
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");
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

function popupOpen() {
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
   popup.classList.add("popup_opened");
};
function popupClose() {
   popup.classList.remove("popup_opened");
};

openPopup.addEventListener("click", popupOpen);
closePopup.addEventListener("click", popupClose);
formElement.addEventListener('submit', handleFormSubmit);


