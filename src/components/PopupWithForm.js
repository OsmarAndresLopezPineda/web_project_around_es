import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(configSelector, handleFormSubmit, formValidator) {
    super(configSelector.popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._formValidator = formValidator;

    // ***** Seleccionamos el formulario y los inputs *****
    this._form = this._popupSelector.querySelector(configSelector.form);

    // Los inputs son opcionales según el popup
    this._name = configSelector.name
      ? this._form.querySelector(configSelector.name)
      : null;
    this._about = configSelector.about
      ? this._form.querySelector(configSelector.about)
      : null;
    this._avatar = configSelector.avatar
      ? this._form.querySelector(configSelector.avatar)
      : null;
  }

  // Metodo que obtiene los valores de entrada
  _getInputValues() {
    // Popup de avatar: la API espera { avatar: "url" }
    if (this._avatar) {
      return { avatar: this._avatar.value };
    }
    // Regresamos un objeto con los datos
    return {
      name: this._name.value,
      about: this._about.value,
    };
  }
  // Metodo que establece los valores de entrada
  setInputValues({ name, about }) {
    this._name.value = name;
    this._about.value = about;
  }
  // Metodo que lee el listener al enviar y al cerrar
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          this.close();
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
        });
    });
  }
  close() {
    // Limpiamos los campos del formulario
    this._form.reset();
    this._formValidator.resetValidation();
    super.close();
  }
}
