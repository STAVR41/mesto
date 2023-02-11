let popup = document.querySelector(".popup");
let redact = document.querySelectorAll(".redact");
let popupName = document.querySelector(".popup__name");
let popupAchievements = document.querySelector(".popup__achievements");

for (let index = 0; index < redact.length; index++) {
   button = redact[index];
   button.addEventListener("click", function (e) {
      popup.classList.toggle("active");
   });
};

let popupButton = document.querySelector(".popup__save");

popupButton.addEventListener("click", function (e) {

   let profileName = document.querySelector(".profile__title");
   let profileAchievements = document.querySelector(".profile__subtitle");
   profileName.textContent = popupName.value;
   profileAchievements.textContent = popupAchievements.value;
   popup.classList.remove("active");
});

