import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(configSelector, handleFormSubmit, formValidator) {
    super(configSelector.popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._formValidator = formValidator;

    // ***** Seleccionamos el formulario y los inputs *****
    this._form = this._popupSelector.querySelector(configSelector.form);
    this._name = this._form.querySelector(configSelector.name);
    this._description = this._form.querySelector(configSelector.description);
  }
  // Metodo que obtiene los valores de entrada
  _getInputValues() {
    // Regresamos un objeto con los datos
    return {
      name: this._name.value,
      description: this._description.value,
    };
  }
  // Metodo que establece los valores de entrada
  setInputValues({ name, description }) {
    this._name.value = name;
    this._description.value = description;
  }
  // Metodo que lee el listener al enviar
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  close() {
    // Limpiamos los campos del formulario
    this._form.reset();
    this._formValidator.resetValidation();
    super.close();
  }
}
