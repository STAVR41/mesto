// let popup = document.querySelector(".popup");
// let redact = document.querySelectorAll(".redact");
// let popupName = document.querySelector(".popup__name");
// let popupAchievements = document.querySelector(".popup__achievements");

// for (let index = 0; index < redact.length; index++) {
//    button = redact[index];
//    button.addEventListener("click", function (e) {
//       popup.classList.toggle("active");
//    });
// };

// let popupButton = document.querySelector(".popup__save");

// popupButton.addEventListener("click", function (e) {
//    e.preventDefault();
//    let profileName = document.querySelector(".profile__title");
//    let profileAchievements = document.querySelector(".profile__subtitle");
//    profileName.textContent = popupName.value;
//    profileAchievements.textContent = popupAchievements.value;
//    popup.classList.remove("active");
// });



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


