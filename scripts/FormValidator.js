export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    // Seleccionamos los inputs del formulario
    this._popupInputs = this._formElement.querySelectorAll(
      this._config.inputSelector,
    );
    // Seleccionamos el botón de guardar
    this._popupSubmitButton = this._formElement.querySelector(
      this._config.submitButtonSelector,
    );
  }

  // Método para mostrar los mensajes de error
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`,
    );

    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  // Método para ocultar los mensajes de error
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`,
    );

    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }

  // Método para habilitar o deshabilitar el botón de guardar
  _toggleButtonState() {
    const allValid = Array.from(this._popupInputs).every(
      (input) => input.validity.valid,
    );

    if (allValid) {
      this._popupSubmitButton.classList.remove(
        this._config.inactiveButtonClass,
      );
      this._popupSubmitButton.disabled = false;
    } else {
      this._popupSubmitButton.classList.add(this._config.inactiveButtonClass);
      this._popupSubmitButton.disabled = true;
    }
  }

  // Validamos los inputs en tiempo real
  _checkValidityInput() {
    this._popupInputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (!input.validity.valid) {
          this._showInputError(input, input.validationMessage);
        } else {
          this._hideInputError(input);
        }

        this._toggleButtonState();
      });
    });
  }

  // Validamos el formulario antes de enviarlo
  _checkValidityButton() {
    this._formElement.addEventListener("submit", (evt) => {
      let formValid = true;

      this._popupInputs.forEach((input) => {
        if (!input.validity.valid) {
          this._showInputError(input, input.validationMessage);
          formValid = false;
        }
      });

      if (!formValid) {
        evt.preventDefault();
      }
    });
  }
  //Set de validaciones
  setEventListeners() {
    this._toggleButtonState();
    this._checkValidityInput();
    this._checkValidityButton();
  }
  //Checa las validaciones despues de un reset
  resetValidation() {
    this._popupInputs.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }
}
