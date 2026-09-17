export class Card {
  constructor(data, template, handleCardClick) {
    this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }
  _createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._titleElement = this._cardElement.querySelector(".card__title");
    this._imageElement = this._cardElement.querySelector(".card__image");
  }
  //Asignamos los parametros de name y image, al src/alt de la "image" y texcontent de "title"
  _setData() {
    this._titleElement.textContent = this._data.name;
    this._imageElement.src = this._data.description;
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
    this._imageElement.addEventListener("click", () => {
      this._handleCardClick(this._data.name, this.data.description);
    });
  }
  generateCard() {
    this._createCard();
    this._setData();
    this._setEventListeners();
    return this._cardElement;
  }
}
