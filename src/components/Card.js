export class Card {
  constructor(
    template,
    data,
    { handleCardClick, handleLikeCard, handleDeleteCard },
  ) {
    this._template = template;
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
  }
  _createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._titleElement = this._cardElement.querySelector(".card__title");
    this._imageElement = this._cardElement.querySelector(".card__image");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
  }
  //Asignamos los parametros de name y image, al src/alt de la "image" y texcontent de "title"
  _setData() {
    this._titleElement.textContent = this._data.name;
    this._imageElement.src = this._data.link;
    this._imageElement.alt = this._data.name;
  }
  //Taggle para intercambiar entre me gusta y no me gusta.
  _setLikeState() {
    this._likeButton.classList.toggle(
      "card__like-button_is-active",
      this._data.isLiked,
    );
  }
  //Listener para el boton de me gusta
  _handleLikeClick() {
    this._likeButton.addEventListener("click", () => {
      const newIsLike = !this._data.isLiked;

      this._handleLikeCard(this._data._id, newIsLike)
        .then((updateCard) => {
          this._data.isLiked = updateCard.isLiked;
          this._setLikeState();
        })
        .catch((err) => {
          console.error("Error al actualizar el like", err);
        });
    });
  }

  //Listener para el boton de borrar card
  _handleDeleteClick() {
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard(this._data._id, this._cardElement);
      });
  }
  _setEventListeners() {
    this._handleLikeClick();
    this._handleDeleteClick();
    this._imageElement.addEventListener("click", () => {
      this._handleCardClick(this._data.name, this._data.link);
    });
  }
  generateCard() {
    this._createCard();
    this._setData();
    this._setLikeState();
    this._setEventListeners();
    return this._cardElement;
  }
}
