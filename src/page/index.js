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

// Importamos nuestra clase para borrar las tarjetas
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

// Importamos nuestro validador de formularios
import { FormValidator } from "../components/FormValidator.js";

// Importamos todas nuestras constantes por nombre
import {
  validationConfig,
  editProfileButton,
  profileTitle,
  profileDescription,
  profileImage,
  userConfig,
  editAvatarButton,
  editAvatarConfig,
  newCardButton,
  cardList,
  cardTemplate,
  cardConfig,
  deleteCardConfig,
  poupImageConfig,
} from "../utils/constants.js";

import { Api } from "../components/Api.js";

import { apiConfig } from "../utils/config.js";

//##############################################################################

/* ***** 1. Métodos que detectan nuestros errores en nuestros Popup Forms ***** */

// Instanciamos el validador de formulario de EditProfile
const checkProfileForm = new FormValidator(
  validationConfig,
  document.querySelector("#edit-profile-form"),
);

checkProfileForm.setEventListeners();

// Instanciamos el validador de formulario de EditAvatar
const checkAvatarForm = new FormValidator(
  validationConfig,
  document.querySelector("#edit-avatar-form"),
);

checkAvatarForm.setEventListeners();

// Instanciamos el validador de formulario de NewCard
const checkCardForm = new FormValidator(
  validationConfig,
  document.querySelector("#new-card-form"),
);

checkCardForm.setEventListeners();

//##############################################################################
// instanciamos nuestra clase API
const api = new Api(apiConfig);

/* ***** 2. Métodos que abren y cierran nuestros Popups ***** */

// Instanciamos ventana emergente ImagePopup
const popupWithImage = new PopupWithImage(poupImageConfig);
// Instanciamos ventana emergente deleteCard
const deleteCardPopup = new PopupWithConfirmation(deleteCardConfig, (cardId) =>
  api.deleteCard({ cardId }),
);

// Prepare Card
const prepareCard = (cardData) => {
  const card = new Card(cardTemplate, cardData, {
    handleCardClick: (name, about) => {
      popupWithImage.open(name, about);
    },
    handleLikeCard: (cardId, isLiked) => {
      return api.changeLikeCardStatus({ cardId, isLiked });
    },
    handleDeleteCard: (cardId, cardElement) => {
      deleteCardPopup.setSubmitAction(() => {
        return api
          .deleteCard(cardId)
          .then(() => {
            cardElement.remove();
            deleteCardPopup.close();
          })
          .catch((error) => {
            console.error("Error al eliminar las tarjetas:", error);
          });
      });
      deleteCardPopup.open();
    },
  });
  return card.generateCard();
};

popupWithImage.setEventListeners();
deleteCardPopup.setEventListeners();
//##############################################################################

/* ***** 3. Section ***** */

//Instanciamos nuestros datos del DOM
const userInfo = new UserInfo({
  nameSelector: profileTitle,
  aboutSelector: profileDescription,
  avatarSelector: profileImage,
});

// Instanciamos Section para las tarjetas
let defaultCards;

//Usamos la informacion del servidor para actualizar el usuario:
api
  .getAppData()
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);

    defaultCards = new Section(
      { items: cards, renderer: prepareCard },
      cardList,
    );
    defaultCards.renderItems();
  })
  .catch((error) => {
    console.error("Error al cargar los datos iniciales:", error);
  });
//Usamos las tarjetas del servidor
//##############################################################################

/* ***** 4. PopupWithForm para las UserInfo ***** */

// Instanciamos ventana emergente EditProfile
const popupProfile = new PopupWithForm(
  userConfig,
  (formData) => {
    return api.editUserInfo(formData).then((userData) => {
      userInfo.setUserInfo(userData);
    });
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

/* ***** 4.1 PopupWithForm para el Avatar ***** */
const popupAvatar = new PopupWithForm(
  editAvatarConfig,
  (formData) => {
    return api.editPhoto(formData).then((userData) => {
      userInfo.setUserInfo(userData);
    });
  },
  checkAvatarForm,
);

editAvatarButton.addEventListener("click", () => {
  popupAvatar.open();
});

popupAvatar.setEventListeners();
//##############################################################################

/* ***** 5. PopupWithForm para las Cards ***** */
// Instanciamos ventana emergente Card
const popupCard = new PopupWithForm(
  cardConfig,
  (cardData) => {
    return api.addCard(cardData).then((savedCard) => {
      defaultCards.addItem(prepareCard(savedCard));
    });
  },
  checkCardForm,
);

// Declaramos nuestro listener para "Abrir" el Popup
newCardButton.addEventListener("click", () => {
  popupCard.open();
});

// Declaramos nuestro listener para "Enviar" y "Cerrar" el Popup
popupCard.setEventListeners();
