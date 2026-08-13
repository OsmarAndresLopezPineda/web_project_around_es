export class Card {
  constructor(data, imagePopup, templateSelector) {
    this._data = data;
    this._imagePopup = imagePopup;
    this._templateSelector = templateSelector;
  }
  _createCard() {
    this._cardElement = this._templateSelector.cloneNode(true);
    this._titleElement = this._cardElement.querySelector(".card__title");
    this._imageElement = this._cardElement.querySelector(".card__image");
  }
  //Asignamos los parametros de name y link, al src/alt de la "image" y texcontent de "title"
  _setData() {
    this._titleElement.textContent = this._data.name;
    this._imageElement.src = this._data.link;
    this._imageElement.alt = this._data.name;
  }
  _setEventListeners() {
    //Listener para el boton de me gusta
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) =>
        evt.target.classList.toggle("card__like-button_is-active"),
      );
    //Listener para el boton de borrar card
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._cardElement.remove());
    //Listener para el abrir el popup de la imagen
    this._imageElement.addEventListener("click", () => {
      this._imagePopup.handleCardImagePopup(this._data.name, this._data.link);
    });
  }
  generateCard() {
    this._createCard();
    this._setData();
    this._setEventListeners();
    return this._cardElement;
  }
}
