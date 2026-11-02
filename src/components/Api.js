export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  // Metodo que revisa la respuesta del servidor:
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // Error si se rechaza el promise
    return Promise.reject(`Error: ${res.status}`);
  }
  // Metodo base para evitar que repetir el fetch
  _request(endpoint, options = {}) {
    return fetch(`${this._baseUrl}${endpoint}`, {
      headers: this._headers,
      ...options,
    }).then(this._checkResponse);
  }
  /* ***** Metodos para cada clase ***** */
  /* ***** UserInfo ***** */
  // Obtener la informacion del servidor sobre el usurario
  getUserInfo() {
    return this._request("/users/me");
  }
  // Editar perfil
  editUserInfo({ name, about }) {
    return this._request("/users/me", {
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    });
  }
  // Editar foto de perfil
  editPhoto({ avatar }) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    });
  }
  /* ***** CardInfo ***** */

  // Obtener la informacion del servidor sobre el usurario
  getCardInfo() {
    return this._request("/cards/");
  }
  // Agregar Tarjeta
  addCard({ name, about }) {
    return this._request("/cards/", {
      method: "POST",
      body: JSON.stringify({ name, about }),
    });
  }
  // Dar y quitar Like
  changeLikeCardStatus({ cardId, isLiked }) {
    return this._request(`/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
    });
  }
  // Borrar Card
  deleteCard({ cardId }) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  /* ***** Carga inicial ***** */
  getAppData() {
    return Promise.all([this.getUserInfo(), this.getCardInfo()]);
  }
}
