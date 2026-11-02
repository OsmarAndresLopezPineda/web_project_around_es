// Array "initialCards" con 6 objetos
export const initialCards = [
  {
    name: "Jacques Cousteau",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
  },
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

//Selectores de configuracion para FormValidator
export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

//##############################################################################

//##############################################################################

/* ***** 1.Selectores para UserInfo ***** */
//Selector boton para UserInfo
export const editProfileButton = document.querySelector(
  ".profile__edit-button",
);
//Selectores de title y description en nuestro HTML
export const profileTitle = ".profile__title";
export const profileDescription = ".profile__description";
export const profileImage = ".profile__image";

//Selectores de configuracion para UserInfo
export const userConfig = {
  popupSelector: "#edit-popup",
  form: "#edit-profile-form",
  name: ".popup__input_type_name",
  about: ".popup__input_type_description",
};

//Selector para el boton de editar avatar
export const editAvatarButton = document.querySelector(
  ".profile__edit-avatar-button",
);

//Selectores de configuracion para editAvatar
export const editAvatarConfig = {
  popupSelector: "#edit-avatar-popup",
  form: "#edit-avatar-form",
  avatar: ".popup__input_type_avatar",
};

//##############################################################################

/* ***** 2.Selectores para añadir una nueva Card ***** */
//Selector boton para añadir Card
export const newCardButton = document.querySelector(".profile__add-button");
//export const cardList = document.querySelector(".cards__list");
export const cardList = ".cards__list";
//Selector de la Templeate de las tarjetas
export const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card");

//Selectores de configuracion para CardInfo
export const cardConfig = {
  popupSelector: "#new-card-popup",
  form: "#new-card-form",
  name: ".popup__input_type_card-name",
  about: ".popup__input_type_url",
};

//Selectores de configuracion para poupImageConfig
export const poupImageConfig = {
  popupSelector: "#image-popup",
  image: ".popup__image",
  caption: ".popup__caption",
};

//Selectores de configuracion para deleteCard
export const deleteCardConfig = {
  popupSelector: "#type-confirm-popup",
  button: ".popup__confirm_button",
};
