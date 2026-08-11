class FormValidator {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    // Seleccionamos los inputs del formulario
    this._popupInputs = this._popupSelector.querySelectorAll(".popup__input");

    // Seleccionamos el botón de guardar
    this._popupSubmitButton =
      this._popupSelector.querySelector(".popup__button");
  }

  // Método para mostrar los mensajes de error
  showInputError(inputElement, errorMessage) {
    const errorElement = this._popupSelector.querySelector(
      `.${inputElement.id}-input-error`,
    );

    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
  }

  // Método para ocultar los mensajes de error
  hideInputError(inputElement) {
    const errorElement = this._popupSelector.querySelector(
      `.${inputElement.id}-input-error`,
    );

    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_active");
  }

  // Método para habilitar o deshabilitar el botón de guardar
  toggleButtonState() {
    const allValid = Array.from(this._popupInputs).every(
      (input) => input.validity.valid,
    );

    this._popupSubmitButton.disabled = !allValid;
  }

  // Validamos los inputs en tiempo real
  validatePopupInputs() {
    this._popupInputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (!input.validity.valid) {
          this.showInputError(input, input.validationMessage);
        } else {
          this.hideInputError(input);
        }

        this.toggleButtonState();
      });
    });
  }

  // Validamos el formulario antes de enviarlo
  validateSubmitPopup() {
    this._popupSelector.addEventListener("submit", (evt) => {
      let formValid = true;

      this._popupInputs.forEach((input) => {
        if (!input.validity.valid) {
          this.showInputError(input, input.validationMessage);
          formValid = false;
        }
      });

      if (!formValid) {
        evt.preventDefault();
      }
    });
  }
}

//Instanciamos el formulario de EditProfile
const editProfileForm = new FormValidator(
  document.querySelector("#edit-profile-form"),
);

editProfileForm.toggleButtonState();
editProfileForm.validatePopupInputs();
editProfileForm.validateSubmitPopup();
//Instanciamos el formulario de NewCard
const newCardForm = new FormValidator(document.querySelector("#new-card-form"));

newCardForm.toggleButtonState();
newCardForm.validatePopupInputs();
newCardForm.validateSubmitPopup();
