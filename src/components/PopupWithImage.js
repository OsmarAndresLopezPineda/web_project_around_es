import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(configSelector) {
    super(configSelector.popupSelector);
    // ***** Selectores para abrir las imagenes en el DOM (HTML) *****
    this._imagePopupElement = this._popupSelector.querySelector(
      configSelector.image,
    );
    this._imagePopupCaption = this._popupSelector.querySelector(
      configSelector.caption,
    );
  }
  // Metodo para abir la imagen emergente
  open(title, link) {
    this._imagePopupElement.src = link;
    this._imagePopupElement.alt = title;
    this._imagePopupCaption.textContent = title;
    super.open();
  }
}
