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
const editProfileSelector = document.querySelector(".profile__edit-button");
//Selectores de title y description en nuestro HTML
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

/* ***** 2.Selectores para añadir una nueva tarjeta ***** */
//Selector boton para añadir tarjeta
const newCardSelector = document.querySelector(".profile__add-button");

/* ***** 3. Selectores para abrir las imagenes en el DOM (HTML) ***** */
const imagePopup = document.querySelector("#image-popup");
const imagePopupElement = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

//##############################################################################

class Popup {
  constructor(popupName) {
    this._popupName = popupName;
  }
  openPopup() {
    this._popupName.classList.add("popup_is-opened");
  }
  closePopup() {
    this._popupName.classList.remove("popup_is-opened");
  }
  // Agrega los eventos necesarios para cerrar el popup.
  closeEventListeners() {
    //Selector de boton de cierre
    this._popupName
      .querySelector(".popup__close")
      .addEventListener("click", () => this.closePopup());
    //Funcion que cierra el popup si se hace click afuera
    this._popupName.addEventListener("click", (evt) => {
      if (evt.target === this._popupName) {
        this.closePopup();
      }
    });
    //Funcion que cierra el popup si se presiona ESC
    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this._popupName.classList.contains("popup_is-opened")
      ) {
        this.closePopup();
      }
    });
  }
}

class Profile extends Popup {
  constructor(name, description, popupName) {
    super(popupName);
    this._name = name;
    this._description = description;
    //Seleccionamos el formulario y sus inputs EditProfile
    this._formProfile = popupName.querySelector("#edit-profile-form");
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

class Card extends Popup {
  constructor(popupName) {
    super(popupName);
    //Seleccionamos el formulario y sus inputs NewCard
    this._formCard = popupName.querySelector("#new-card-form");
    this._nameInput = this._formCard.querySelector(
      "..popup__input_type_card-name",
    );
    this._urlInput = this._formCard.querySelector(".popup__input_type_url");
  }
  //Metodo que renderiza las funciones en el DOM
  renderCard() {
    const renderCardElement = getCardElement(this._nameInput, this._urlInput);
    popupName.prepend(renderCardElement);
  }
  handleSubmitCard(evt) {
    evt.preventDefault();
  }
}

//##############################################################################

/* ***** 1.Metodos que abren y cierran nuestro Popup editProfileSelector ***** */
//Instanciamos ventana emergente (popup) EditProfile
const editProfilePopup = new Profile(
  profileTitle,
  profileDescription,
  document.querySelector("#edit-popup"),
);
//Declaramos nuestros listeners
editProfileSelector.addEventListener("click", () => {
  editProfilePopup.handleOpenEditProfile();
});
editProfilePopup._formProfile.addEventListener("submit", (evt) =>
  editProfilePopup.handleSubmitEditProfile(evt),
);
editProfilePopup.closeEventListeners();

/* ***** 2.Metodos que abren y cierran nuestro Popup newCardSelector ***** */
//Instanciamos nuestra ventana emergente NewCard en nuestra clase
const newCardPopup = new Card(document.querySelector("#new-card-popup"));
newCardSelector.addEventListener("click", () => {
  newCardPopup.openPopup();
});
newCardPopup.closeEventListeners();

//Ciclo forEach que renderiza los objetos en Cards para el DOM
initialCards.forEach((card) => {
  newCardPopup.renderCard(card.name, card.link, cardList);
});

/* 
class Card {
  constructor(data, cardTemplate) {
    this._cardText = data.name;
    this._cardImage = data.link;
    this._cardTemplate = cardTemplate;
  }

  //Selecciona y clona la template con todos sus subElementos
  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .querySelector(".card")
      .cloneNode(true);
    //Seleccionamos el elementos "Title" e "Image" del clon
    const titleElement = cardElement.querySelector;
    return cardElement;
  }
  _generateCard() {
    this._cardElement = this._getCardTemplate();
  }
  _handleOpenPopup() {}
  _handleClosePopup() {}
  _setEventListener() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });
  }
}
######################################################

//Funciones responsivas
    function editProfilePopup() {
      nameInput.value = profileTitle.textContent;
      jobInput.value = profileDescription.textContent;
    }
    function newCardPopup() {}
    function openImagePopup() {
      imagePopupElement.src = imageElement.src;
      imagePopupElement.alt = imageElement.alt;
      imagePopupCaption.textContent = nameCard;
    }
*/
