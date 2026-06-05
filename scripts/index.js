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
//Funcion que checa el nombre de cada objeto (Ciclo forEach)
initialCards.forEach(function (element) {
  console.log(element.name);
});
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
profileEditButton.addEventListener("click", () =>
  handleOpenEditModal(editPopup),
);
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
function handleOpenEditModal(editModal) {
  fillProfileForm();
  openModal(editModal);
}
/*------3. Editar tu nombre y Acerca de mí------*/
//Buscamos el formulario en el DOM
const formElement = editPopup.querySelector("#edit-profile-form");
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
