import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(configSelector) {
    super(configSelector.popupSelector);
    // ***** Selectores de los botones *****
    this._acceptButton = this._popupSelector.querySelector(
      configSelector.button,
    );
  }
  setSubmitAction(action) {
    this._handleSubmit = action;
  }
  setEventListeners() {
    super.setEventListeners();
    this._acceptButton.addEventListener("click", () => {
      this._handleSubmit();
    });
  }
}
