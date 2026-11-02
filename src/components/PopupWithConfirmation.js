import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(configSelector) {
    super(configSelector.popupSelector);
    // ***** Selector del boton *****
    this._submitButton = this._popupSelector.querySelector(
      configSelector.button,
    );
    this._submitButtonText = this._submitButton.textContent;
  }
  // Cambia el texto del botón mientras se guarda
  _renderLoading(isLoading, loadingText = "Eliminando...") {
    this._submitButton.textContent = isLoading
      ? loadingText
      : this._submitButtonText;
    this._submitButton.disabled = isLoading;
  }
  setSubmitAction(action) {
    this._submitAction = action;
  }
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => {
      this._renderLoading(true);
      Promise.resolve(this._submitAction()).finally(() => {
        this._renderLoading(false);
      });
    });
  }
}
