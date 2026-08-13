//Importamos nuestras clases para abir y cerrar los diferentes Popups
import { EditProfilePopup, NewCardPopup, ImageWithPopup } from "./utils.js";
//Importamos nuestra clase para crear las tarjetas
import { Card } from "./Card.js";
//Importamos nuestro validador de formularios
import { FormValidator } from "./FormValidator.js";

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

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
//Declaramos nuestro listener para "Enviar" y "cerrar" el Popup
editProfilePopup.setEventListeners();

//##############################################################################

/* ***** 2.Metodos que abren y cierran nuestro Popup newCardSelector ***** */
//Instanciamos ventana emergente (popup) ImagePopup
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

//Generamos el array de las tarjetas iniciales
initialCards.forEach((item) => {
  const card = new Card(item, imageWithPopup, cardTemplate);
  cardList.prepend(card.generateCard());
});

//Declaramos nuestro listener para "Abrir" el Popup
newCardButton.addEventListener("click", () => {
  newCardPopup.openPopup();
});

//Declaramos nuestro listener para "Enviar" y "Cerrar" el Popup
newCardPopup.setEventListeners();

imageWithPopup.closeEventListeners();

//##############################################################################

/* ***** 3.Metodos que detectan nuestros errores en nuestros Popup Forms ***** */
//Instanciamos el validador de formulario de EditProfile
const editProfileForm = new FormValidator(
  validationConfig,
  document.querySelector("#edit-profile-form"),
);
editProfileForm.setEventListeners();

//Instanciamos el Validador de formulario de NewCard
const newCardForm = new FormValidator(
  validationConfig,
  document.querySelector("#new-card-form"),
);
newCardForm.setEventListeners();
