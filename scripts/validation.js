/* -------- FORM VALIDATION HELPERS --------- */

function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!errorElement) return;
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!errorElement) return;
  errorElement.textContent = "";
  errorElement.classList.remove(config.inputErrorClass);
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
  if (!buttonElement) return;
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
/* -------- FORM EVENT LISTENERS--------- */

function checkInput(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

function setEventListeners(formElement, config) {
  const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
  const button = formElement.querySelector(config.submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInput(formElement, input, config);
      toggleButtonState(inputs, button, config);
    });
  });

  toggleButtonState(inputs, button, config);
}
/* -------- ENABLE VALIDATION --------- */

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    setEventListeners(form, config);
  });
}
