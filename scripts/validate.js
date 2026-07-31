// Seleccionamos el formulario para editar perfil
const editProfileForm = document.querySelector("#edit-profile-form");
//Seleccionamos el formulario para crear tarjetas
const newCardForm = document.querySelector("#new-card-form");

//----------------Super funcion que muestra los mensajes de error en ambos formularios----------
function popupErrorMessages(popupName) {
  //1. Declarar selectores
  //Seleccionamos los inputs del formulario
  const popupInputs = popupName.querySelectorAll(".popup__input");
  //Seleccionamos el boton de guardar
  const popupSubmitButton = popupName.querySelector(".popup__button");
  //2. Funcion para mostrar los mendajes de error
  function showInputError(inputElement, errorMessage) {
    const errorElement = popupName.querySelector(
      `.${inputElement.id}-input-error`,
    );
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
  }
  //3. Funcion para ocultar los mensajes de error
  function hideInputError(inputElement) {
    const errorElement = popupName.querySelector(
      `.${inputElement.id}-input-error`,
    );
    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_active");
  }
  //4. Funcion para habilitarr o deshabilitar el boton de guardar
  function toggleButtonState() {
    const allValid = Array.from(popupInputs).every(
      (input) => input.validity.valid,
    );
    popupSubmitButton.disabled = !allValid;
  }
  //5. Creamos un ciclo for para validar todas las entradas en tiempo real
  // #Nota: Mostramos y ocultamos todos los mensajes de error, y desactivamos o activamos el botton.
  popupInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
      } else {
        hideInputError(input);
      }
      toggleButtonState();
    });
  });
  //Inicializamos el boton de guardar
  toggleButtonState();
  //6. Funcion para enviar el formulario
  popupName.addEventListener("submit", (event) => {
    let formValid = true;
    //Ciclo for que valida que todos los campos sean validos antes de enviar
    popupInputs.forEach((input) => {
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
        formValid = false;
      }
    });
    //Desactivamos los mensajes predeterminados del formulario si es falso.
    if (!formValid) {
      event.preventDefault();
    }
  });
}
//Llamamos a la funcion para editar perfil
popupErrorMessages(editProfileForm);
//Llamamos a la funcion para editar tarjetas
popupErrorMessages(newCardForm);
