import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        this._formPopup = this._popupItem.querySelector(".form");
        this._handleFormSubmit = handleFormSubmit;
    }
    open(card) {
        this._card = card;
        super.open();
    }
    setEventListeners() {
        super.setEventListeners();
        this._formPopup.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._card);
        });

    }
}