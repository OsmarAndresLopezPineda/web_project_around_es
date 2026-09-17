// Importamos nuestra clase para inicializar las Cards de InitialCards
import Section from "../components/Section.js";

// Importamos nuestra clase para abir y cerrar las imagenes emergentes
import { PopupWithImage } from "../components/PopupWithImage.js";

// Importamos nuestras clases para abrir y cerrar los diferentes Popups
import { PopupWithForm } from "../components/PopupWithForm.js";

// Importamos nuestra clase para editar nuestros datos de perfil.
import { UserInfo } from "../components/UserInfo.js";

// Importamos nuestra clase para crear las tarjetas
import { Card } from "../components/Card.js";

// Importamos nuestro validador de formularios
import { FormValidator } from "../components/FormValidator.js";

// Importamos todas nuestras constantes por nombre
import {
  initialCards,
  validationConfig,
  editProfileButton,
  profileTitle,
  profileDescription,
  newCardButton,
  cardList,
  cardTemplate,
  cardConfig,
  userConfig,
} from "../utils/constants.js";

//##############################################################################

/* ***** 1. Métodos que detectan nuestros errores en nuestros Popup Forms ***** */

// Instanciamos el validador de formulario de EditProfile
const checkProfileForm = new FormValidator(
  validationConfig,
  document.querySelector("#edit-profile-form"),
);

checkProfileForm.setEventListeners();

// Instanciamos el validador de formulario de NewCard
const checkCardForm = new FormValidator(
  validationConfig,
  document.querySelector("#new-card-form"),
);

checkCardForm.setEventListeners();

//##############################################################################

/* ***** 2. Métodos que abren y cierran nuestros Popups ***** */

// Instanciamos ventana emergente ImagePopup
const popupWithImage = new PopupWithImage("#image-popup");

// Prepare Card
const prepareCard = (cardData) => {
  const card = new Card(cardData, cardTemplate, (name, link) => {
    popupWithImage.open(name, link);
  });

  return card.generateCard();
};

popupWithImage.setEventListeners();
//##############################################################################

/* ***** 3. Section ***** */

// Instanciamos Section para las tarjetas iniciales
const defaultCards = new Section(
  {
    items: initialCards,
    renderer: prepareCard,
  },
  cardList,
);

// Renderizamos las tarjetas iniciales
defaultCards.renderItems();

//##############################################################################
/* ***** 4. PopupWithForm para las UserInfo ***** */
//Instanciamos nuestros datos del DOM
const userInfo = new UserInfo({
  nameSelector: profileTitle,
  jobSelector: profileDescription,
});

// Instanciamos ventana emergente EditProfile
const popupProfile = new PopupWithForm(
  userConfig,
  (formData) => {
    userInfo.setUserInfo(formData);
  },
  checkProfileForm,
);

// Declaramos nuestro listener para "Abrir" el Popup
editProfileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  popupProfile.setInputValues(userData);
  popupProfile.open();
});

popupProfile.setEventListeners();

//##############################################################################
/* ***** 5. PopupWithForm para las Cards ***** */

// Instanciamos ventana emergente Card
const popupCard = new PopupWithForm(
  cardConfig,
  (cardData) => {
    defaultCards.addItem(prepareCard(cardData));
  },
  checkCardForm,
);

// Declaramos nuestro listener para "Abrir" el Popup
newCardButton.addEventListener("click", () => {
  popupCard.open();
});

// Declaramos nuestro listener para "Enviar" y "Cerrar" el Popup
popupCard.setEventListeners();
