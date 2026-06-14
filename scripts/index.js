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

/*------1. Abrir y cerrar el cuadro emergente------*/
//1. Seleccionamos el boton de "Editar perfil", cerrar y el modal
const profileEditButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const popupClose = editPopup.querySelector(".popup__close");
//2. Funciones que abren y cierran el modal cuando se llamen
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}
//3. Metodo que llama a las dos funciones anteriores para abrir o cerrar el modal
profileEditButton.addEventListener("click", () => handleOpenEditModal());
popupClose.addEventListener("click", () => closeModal(editPopup));

/*------2. Campos del formulario------*/
//Selectores de titulo, descripcion, boton, formularios e inputs del formulario en el DOM
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
//Valores de entrada del formulario
const nameInput = editPopup.querySelector(".popup__input_type_name");
const jobInput = editPopup.querySelector(".popup__input_type_description");
//2.1 Funcion que rellene los campos de entrada con los datos de la pagina
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}
//Funcion que abre el formulario y lo rellena las entradas con los campos de "profileTitle" y "rofileDescription"
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}
//Seleccionamos el formulario en el DOM
const formElement = editPopup.querySelector("#edit-profile-form");

/*------3. Editar tu nombre y Acerca de mí------*/
//Function que convierte los campos de entrada en el "profileTitle" y "profileDescription"
function handleProfileFormSubmit(evt) {
  //Desactivamos enviar el formulario de forma predeterminada
  evt.preventDefault();
  //Hacemos que los campos de titulo y descripcion cambian conforme a los valores ingresados
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  //Cerramos la ventana emergente
  closeModal(editPopup);
}
//Controlador que activa la funcion al enviar el formulario
formElement.addEventListener("submit", handleProfileFormSubmit);

/* ---------Proyecto Etapa 3 -------------*/
/*-----1. Generar las tarjetas dinámicamente a partir de un elemento de plantilla------------ */
//Sellecionamos el contrenido de la Template
const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card");
//Seleccionamos el contenedor de las tarjetas:
const cardList = document.querySelector(".cards__list");
/* ------5. Abrir versiones más grandes de las imágenes como ventanas emergentes ---------------*/
const imagePopup = document.querySelector("#image-popup");
const imagePopupElement = imagePopup.querySelector(".popup__image");
const imagePopupClose = imagePopup.querySelector(".popup__close");

imagePopupClose.addEventListener("click", () => closeModal(imagePopup));
//Funcion encargada de crear las tarjetas a partir de un objeto de datos
function getCardElement(
  nameCard = "Sin titulo",
  linkCard = "./images/placeholder.jpg",
) {
  //Clona el contenido de la plantilla, con todos sus subelementos
  const cardElement = cardTemplate.cloneNode(true);
  //Seleccionamos el elementos "Title" e "Image" del clon
  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  //Asignamos los parametros de name y link, al src/alt de la "image" y rexcontent de "title"
  imageElement.src = linkCard;
  imageElement.alt = nameCard;
  titleElement.textContent = nameCard;

  /* ------3. Agregar botones "Me gusta" a cada tarjeta ---------------*/
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", (evt) =>
    evt.target.classList.toggle("card__like-button_is-active"),
  );
  /* ------4. Eliminar tarjetas ---------------*/
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => cardElement.remove());
  //Devuelve el elemento clonado
  /* ------5. Imagen emergente ---------------*/
  imageElement.addEventListener("click", () => {
    imagePopupElement.src = imageElement.src;
    imagePopupElement.alt = imageElement.alt;
    openModal(imagePopup);
  });
  return cardElement;
}

//Creamos la funcion que agregara el clon de la tarjeta en el DOM
function renderCard(nameCard, linkCard, containerCard) {
  const renderCardElement = getCardElement(nameCard, linkCard);
  containerCard.prepend(renderCardElement);
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardList);
});
/* ------2. Agregar nuevas tarjetas con la ventana emergente "Agregar una tarjeta” ---------------*/
/*------1. Abrir y cerrar el cuadro emergente------*/
//Seleccionamos el boton de "Editar perfil", cerrar y el modal
const profileAddButton = document.querySelector(".profile__add-button");
//Seleccionamos la ventana emergente y el boton de cerrar de la ventanan emergente
const newCardPopup = document.querySelector("#new-card-popup");
const cardPopupClose = newCardPopup.querySelector(".popup__close");
//Metodo que llama a las dos funciones anteriores para abrir o cerrar el modal
profileAddButton.addEventListener("click", () => openModal(newCardPopup));
cardPopupClose.addEventListener("click", () => closeModal(newCardPopup));
/*------2. Campos del formulario------*/
//Selectores de los valores de entrada del formulario
const cardForm = newCardPopup.querySelector("#new-card-form");
const cardNameInput = cardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = cardForm.querySelector(".popup__input_type_url");
//Funcion para enviar el formulario y agregar un Card al inicio del contenedor
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  //Agregamos los campos de nombre y link a nuestro array
  renderCard(cardNameInput.value, cardLinkInput.value, cardList);
  //Cerramos la ventana emergente
  closeModal(newCardPopup);
}
//Controlador que activa la funcion al enviar el formulario
cardForm.addEventListener("submit", handleCardFormSubmit);
