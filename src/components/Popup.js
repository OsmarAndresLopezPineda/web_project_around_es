export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    //Funcion que cierra el popup si se presiona ESC
    this._handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    };
  }
  open() {
    this._popupSelector.classList.add("popup_is-opened");
    //Agregamos detector de eventos para ESC
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popupSelector.classList.remove("popup_is-opened");
    //Quitamos detector de eventos para ESC
    document.removeEventListener("keydown", this._handleEscClose);
  }
  // Agrega los eventos necesarios para cerrar el popup.
  setEventListeners() {
    //Selector de boton de cierre
    this._popupSelector
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());
    //Funcion que cierra el popup si se hace click afuera
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target === this._popupSelector) {
        this.close();
      }
    });
  }
}
