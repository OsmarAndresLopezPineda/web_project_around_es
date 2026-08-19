export class Card {
  constructor(data, template) {
    this._data = data;
    this._template = template;
  }
  _createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._titleElement = this._cardElement.querySelector(".card__title");
    this._imageElement = this._cardElement.querySelector(".card__image");
  }
  //Asignamos los parametros de name y link, al src/alt de la "image" y texcontent de "title"
  _setData() {
    this._titleElement.textContent = this._data.name;
    this._imageElement.src = this._data.link;
    this._imageElement.alt = this._data.name;
  }
  //Listener para el boton de me gusta
  _handleLikeClick() {
    const likeButton = this._cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", (evt) =>
      likeButton.classList.toggle("card__like-button_is-active"),
    );
  }
  //Listener para el boton de borrar card
  _handleDeleteClick() {
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._cardElement.remove());
  }
  _setEventListeners() {
    this._handleLikeClick();
    this._handleDeleteClick();
  }
  generateCard() {
    this._createCard();
    this._setData();
    this._setEventListeners();
    return this._cardElement;
  }
}
