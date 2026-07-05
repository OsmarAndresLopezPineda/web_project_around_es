// Seleccionamos el formulario
const editProfileForm = document.querySelector("#edit-profile-form");
//Seleccionamos los inputs del formulario
const editProfileInputs = editProfileForm.querySelectorAll(".popup__input");
//Seleccionamos el boton de guardar
const submitButton = editProfileForm.querySelector(".popup__button");
//Funcion para mostrar mensajes de error
function showInputError(inputElement, errorMessage) {
  const errorElement = editProfileForm.querySelector(
    `.${inputElement.id}-input-error`,
  );
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}
//Funcion para ocultar mensajes de error
function hideInputError(inputElement) {
  const errorElement = editProfileForm.querySelector(
    `.${inputElement.id}-input-error`,
  );
  inputElement.classList.remove("form__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
}
//Funcion para habilitarr o deshabilitar el boton de guardar
function toggleButtonState() {
  const allValid = Array.from(editProfileInputs).every(
    (input) => input.validity.valid,
  );
  submitButton.disabled = !allValid;
}
//Ciclo for para aplicar las funciones de ocultar y mostrar errores
editProfileInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
    toggleButtonState();
  });
});

//Boton inactivo al si el fformul;ario es invalido
editProfileForm.addEventListener("submit", (event) => {
  let formValid = true;

  editProfileInputs.forEach((input) => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
      formValid = false;
    }
  });

  if (!formValid) {
    event.preventDefault();
  }
});
