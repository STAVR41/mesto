export function openPopup(item) {
	item.classList.add("popup_opened");
	document.addEventListener("keyup", closePopupEscape);
	document.addEventListener("click", closePopupClickOverlay);
}
export function closePopup(item) {
	item.classList.remove("popup_opened");
	document.removeEventListener("keyup", closePopupEscape);
	document.removeEventListener("click", closePopupClickOverlay);
}
function closePopupEscape(evt) {
	if (evt.key === "Escape") {
		const popup = document.querySelector(".popup.popup_opened");
		closePopup(popup);
	}
}
function closePopupClickOverlay(evt) {
	if (evt.target.classList.contains("popup")) {
		closePopup(evt.target);
	}
}
