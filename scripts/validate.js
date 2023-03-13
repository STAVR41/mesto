const config = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__save",
	inactiveButtonClass: "form__save_inactive",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_active",
};

function showError(formElement ,input, errorMessage, config) {
	const errorElement = formElement.querySelector(`.${input.id}-error`);
	input.classList.add(config.inputErrorClass);
	errorElement.classList.add(config.errorClass);
	errorElement.textContent = errorMessage;
}

function hideError(formElement, input, config) {
	const errorElement = formElement.querySelector(`.${input.id}-error`);
	input.classList.remove(config.inputErrorClass);
	errorElement.classList.remove(config.errorClass);
	errorElement.textContent = "";
}

function validForm(formElement, inputElement, config) {
	if (!(inputElement.validity.valid)) {
		showError(formElement ,inputElement, inputElement.validationMessage, config);
	} else {
		hideError(formElement, inputElement, config);
	} 
}

function hasInvalidInput(inputList) {
	return inputList.some(item => {
		return !item.validity.valid;
	});
}

function disableButton(buttonElement, config) {
	buttonElement.classList.add(config.inactiveButtonClass);
	buttonElement.setAttribute("disabled", "");
}

function enableButton(buttonElement, config) {
	buttonElement.classList.remove(config.inactiveButtonClass);
	buttonElement.removeAttribute("disabled", "");
}
 
function toggleButtonState(inputList, buttonElement, config) {
	if (hasInvalidInput(inputList)) {
		disableButton(buttonElement, config);
	} else {
		enableButton(buttonElement, config);
	}
}

function setEventListeners(formElement, config) {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
	const buttonElement = formElement.querySelector(config.submitButtonSelector);
	inputList.forEach(item => {
		item.addEventListener("input", () => {
			validForm(formElement, item, config);
			toggleButtonState(inputList, buttonElement, config);
		});
	});
}

function enableValidation(config) {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach(item => {
		setEventListeners(item, config);
	});
}
enableValidation(config);

function removeError(form) {
	const inputList = form.querySelectorAll(".form__input");
	inputList.forEach(item => {
		hideError(form, item, config);
	});
}
