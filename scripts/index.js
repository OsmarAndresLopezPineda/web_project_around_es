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
//Selector ventana emergente EditProfile
const editProfilePopup = document.querySelector("#edit-popup");
//Selectores de titulo, descripcion del HTML
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
//Seleccionamos el formulario en el DOM y sus valores de entrada
const formElement = editProfilePopup.querySelector("#edit-profile-form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

/* ***** 2. Selectores añadir nuevas tarjetas ***** */
//Selector boton para añadir tarjeta
const newCardSelector = document.querySelector(".profile__add-button");
//Selector ventana emergente NewCard
const newCardPopup = document.querySelector("#new-card-popup");
//Seleccionamos el formulario en el DOM y sus valores de entrada
const cardForm = newCardPopup.querySelector("#new-card-form");
const cardNameInput = cardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = cardForm.querySelector(".popup__input_type_url");
//Selector del contenedor de las tarjetas
const cardList = document.querySelector(".cards__list");

/* ***** 3. Selectores para abrir las imagenes en el DOM (HTML) ***** */
const imagePopup = document.querySelector("#image-popup");
const imagePopupElement = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

//##############################################################################

// ###### Funciones generales que abren y cierran el modal cuando se llamen ######
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// ###### Super Funcion general para cerrar al hacer click afuera ######
function closePopupOptions(popupName) {
  const popupClose = popupName.querySelector(".popup__close");
  popupClose.addEventListener("click", () => closeModal(popupName));
  function handleCloseModal(evt) {
    const clickOutside = evt.type === "mousedown" && evt.target === popupName;
    const pressEscape = evt.type === "keydown" && evt.key === "Escape";

    if (clickOutside || pressEscape) {
      closeModal(popupName);
    }
  }
  popupName.addEventListener("mousedown", handleCloseModal);
  document.addEventListener("keydown", handleCloseModal);
}

//##############################################################################

// ***** 1.Funcion para rellenar y enviar los campos de "profileTitle" y "rofileDescription" *****
//Funcion que abre el formulario y lo rellena las entradas con los campos de "profileTitle" y "rofileDescription" *****
function handleOpenEditModal() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editProfilePopup);
}
//Function que rellena los campos de entrada en el "profileTitle" y "profileDescription" al enviar formulario *****
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  //Hacemos que los campos de titulo y descripcion cambian conforme a los valores ingresados
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  //Cerramos la ventana emergente
  closeModal(editProfilePopup);
}

/* ***** 2. Campos del formulario de newCardPopup ***** */
//Funcion encargada de crear las tarjetas a partir de un objeto de datos
function getCardElement(nameCard, linkCard) {
  //Selecciona y clona el contenido de la Template, con todos sus subelementos
  const cardElement = document
    .querySelector("#card__template")
    .content.querySelector(".card")
    .cloneNode(true);
  //Seleccionamos el elementos "Title" e "Image" del clon
  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  //Asignamos los parametros de name y link, al src/alt de la "image" y rexcontent de "title"
  imageElement.src = linkCard;
  imageElement.alt = nameCard;
  titleElement.textContent = nameCard;

  /* Agregar botones "Me gusta" a cada tarjeta */
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", (evt) =>
    evt.target.classList.toggle("card__like-button_is-active"),
  );
  /* Eliminar tarjetas */
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => cardElement.remove());
  //Devuelve el elemento clonado
  /* Imagen emergente */
  imageElement.addEventListener("click", () => {
    imagePopupElement.src = imageElement.src;
    imagePopupElement.alt = imageElement.alt;
    imagePopupCaption.textContent = nameCard;
    openModal(imagePopup);
  });
  return cardElement;
}
//---------------------------------------------------------------------
//Creamos la funcion que agregara el clon de la tarjeta en el DOM
function renderCard(nameCard, linkCard, containerCard) {
  const renderCardElement = getCardElement(nameCard, linkCard);
  containerCard.prepend(renderCardElement);
}
//Funcion para enviar el formulario y agregar un Card al inicio del contenedor
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  //Agregamos los campos de nombre y link a nuestro array
  renderCard(cardNameInput.value, cardLinkInput.value, cardList);
  //Cerramos la ventana emergente
  closeModal(newCardPopup);
  //Borramos los datos anteriores del formulario
  cardForm.reset();
}

//##############################################################################

/* ***** 1.Controladores de eventos para enviar, abrir y cerrar la pestaña de Edit profile ***** */
//Metodos que abren y cierran nuestro Popup editProfileSelector *****
editProfileSelector.addEventListener("click", () => handleOpenEditModal());
//Controlador que activa la funcion al enviar el formulario
formElement.addEventListener("submit", handleProfileFormSubmit);
closePopupOptions(editProfilePopup);

/* ***** 2. Metodos para abir y cerrar el formulario de newCardPopup ***** */
newCardSelector.addEventListener("click", () => openModal(newCardPopup));
closePopupOptions(newCardPopup);
//Controlador que activa la funcion al enviar el formulario
cardForm.addEventListener("submit", handleCardFormSubmit);

//Ciclo forEach que renderiza los objetos en tarjetas para el DOM
initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardList);
});
closePopupOptions(imagePopup);
//############################################################
