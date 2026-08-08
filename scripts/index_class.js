// Array "initialCards" con 6 objetos
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//##############################################################################

/* ***** 1.Selectores para editar perfil ***** */
//Selector boton para editar perfil
const editProfileButton = document.querySelector(".profile__edit-button");
//Selectores de title y description en nuestro HTML
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

/* ***** 2.Selectores para añadir una nueva tarjeta ***** */
//Selector boton para añadir tarjeta
const newCardButton = document.querySelector(".profile__add-button");
//Selector del contenedor de las tarjetas
const cardList = document.querySelector(".cards__list");
//Selector de la Templeate de las tarjetas
const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card");

//##############################################################################

class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  openPopup() {
    this._popupSelector.classList.add("popup_is-opened");
  }
  closePopup() {
    this._popupSelector.classList.remove("popup_is-opened");
  }
  // Agrega los eventos necesarios para cerrar el popup.
  closeEventListeners() {
    //Selector de boton de cierre
    this._popupSelector
      .querySelector(".popup__close")
      .addEventListener("click", () => this.closePopup());
    //Funcion que cierra el popup si se hace click afuera
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target === this._popupSelector) {
        this.closePopup();
      }
    });
    //Funcion que cierra el popup si se presiona ESC
    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this._popupSelector.classList.contains("popup_is-opened")
      ) {
        this.closePopup();
      }
    });
  }
}

class EditProfilePopup extends Popup {
  constructor(name, description, popupSelector) {
    super(popupSelector);
    this._name = name;
    this._description = description;
    //Seleccionamos el formulario y los inputs EditProfile
    this._formProfile = this._popupSelector.querySelector("#edit-profile-form");
    this._nameInput = this._formProfile.querySelector(
      ".popup__input_type_name",
    );
    this._descriptionInput = this._formProfile.querySelector(
      ".popup__input_type_description",
    );
  }
  //Metodo que rellena las entradas con los campos y abre el formulario
  handleOpenEditProfile() {
    this._nameInput.value = this._name.textContent;
    this._descriptionInput.value = this._description.textContent;
    super.openPopup();
  }
  //Metodo que cambia los datos de title y description del html al enviar el formulario
  handleSubmitEditProfile(evt) {
    evt.preventDefault();
    this._name.textContent = this._nameInput.value;
    this._description.textContent = this._descriptionInput.value;
    super.closePopup();
  }
}

class NewCardPopup extends Popup {
  constructor(popupSelector, dataCard) {
    super(popupSelector);
    this._dataCard = dataCard;
    // ***** Seleccionamos el formulario y los inputs NewCard *****
    this._formCard = this._popupSelector.querySelector("#new-card-form");
    this._titleInput = this._formCard.querySelector(
      ".popup__input_type_card-name",
    );
    this._linkInput = this._formCard.querySelector(".popup__input_type_url");
  }
  handleSubmitCard(evt) {
    evt.preventDefault();
    //Creamos un objeto con los datos
    this._dataCard({
      name: this._titleInput.value,
      link: this._linkInput.value,
    });
    //Limpiamos los campos del formulario
    this._formCard.reset();
    super.closePopup();
  }
}

class ImageWithPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // ***** Selectores para abrir las imagenes en el DOM (HTML) *****
    this._imagePopupElement =
      this._popupSelector.querySelector(".popup__image");
    this._imagePopupCaption =
      this._popupSelector.querySelector(".popup__caption");
  }
  // Metodo para abir la imagen emergente
  handleCardImagePopup(title, link) {
    this._imagePopupElement.src = link;
    this._imagePopupElement.alt = title;
    this._imagePopupCaption.textContent = title;
    super.openPopup();
  }
}

class Card {
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
    //Listener para el boton de me gustra
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

//##############################################################################

/* ***** 1.Metodos que abren, cierran y envian nuestro Popup editProfile ***** */
//Instanciamos ventana emergente (popup) EditProfile
const editProfilePopup = new EditProfilePopup(
  profileTitle,
  profileDescription,
  document.querySelector("#edit-popup"),
);
//Declaramos nuestro listener para "Abrir" el Popup
editProfileButton.addEventListener("click", () => {
  editProfilePopup.handleOpenEditProfile();
});
//Declaramos nuestro listener para "Enviar" el Popup
editProfilePopup._formProfile.addEventListener("submit", (evt) =>
  editProfilePopup.handleSubmitEditProfile(evt),
);
editProfilePopup.closeEventListeners();

/* ***** 2.Metodos que abren y cierran nuestro Popup newCardSelector ***** */
//Instanciamos ventana emergente (popup) NewCard
const imageWithPopup = new ImageWithPopup(
  document.querySelector("#image-popup"),
);
//Instanciamos ventana emergente (popup) NewCard
const newCardPopup = new NewCardPopup(
  document.querySelector("#new-card-popup"),
  (cardData) => {
    //Instanciamos creacion de nueva Card
    const newCard = new Card(cardData, imageWithPopup, cardTemplate);
    //Agregamos la tarjeta al DOM
    cardList.prepend(newCard.generateCard());
  },
);
//Declaramos nuestro listener para "Abrir" el Popup
newCardButton.addEventListener("click", () => {
  newCardPopup.openPopup();
});
//Declaramos nuestro listener para "Enviar" el Popup
newCardPopup._formCard.addEventListener("submit", (evt) =>
  newCardPopup.handleSubmitCard(evt),
);

//Generamos el array de las tarjetas iniciales
initialCards.forEach((item) => {
  const card = new Card(item, imageWithPopup, cardTemplate);
  cardList.prepend(card.generateCard());
});

newCardPopup.closeEventListeners();
imageWithPopup.closeEventListeners();
