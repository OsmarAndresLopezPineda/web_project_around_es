export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    //Funcion que cierra el popup si se presiona ESC
    this._handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    };
  }
  openPopup() {
    this._popupSelector.classList.add("popup_is-opened");
    //Agregamos detector de eventos para ESC
    document.addEventListener("keydown", this._handleEscClose);
  }
  closePopup() {
    this._popupSelector.classList.remove("popup_is-opened");
    //Quitamos detector de eventos para ESC
    document.removeEventListener("keydown", this._handleEscClose);
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
  }
}

export class EditProfilePopup extends Popup {
  constructor(popupSelector, dataProfile) {
    super(popupSelector);
    this._dataProfile = dataProfile;

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
    this._nameInput.value = this._dataProfile.name.textContent;
    this._descriptionInput.value = this._dataProfile.description.textContent;
    super.openPopup();
  }
  //Metodo que cambia los datos de title y description del html al enviar el formulario
  handleSubmitEditProfile(evt) {
    evt.preventDefault();
    this._dataProfile.name.textContent = this._nameInput.value;
    this._dataProfile.description.textContent = this._descriptionInput.value;
    super.closePopup();
  }
  setEventListeners() {
    this._formProfile.addEventListener("submit", (evt) =>
      this.handleSubmitEditProfile(evt),
    );
    super.closeEventListeners();
  }
}

export class NewCardPopup extends Popup {
  constructor(popupSelector, dataCard, formValidator) {
    super(popupSelector);
    this._dataCard = dataCard;
    this._formValidator = formValidator;
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
    this._formValidator.resetValidation();
    super.closePopup();
  }
  setEventListeners() {
    this._formCard.addEventListener("submit", (evt) =>
      this.handleSubmitCard(evt),
    );
    super.closeEventListeners();
  }
}

export class ImageWithPopup extends Popup {
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
