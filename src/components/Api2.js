//##############################################################################
/* ***** Constants ***** */
const baseUrl = "https://around-api.es.tripleten-services.com/v1";
const authorizationKey = "cfdb0906-5990-4806-a0df-87d719d6fcd1";
/* ***** UserInfo ***** */
export function getUserInfo() {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      authorization: authorizationKey,
    },
  }).then((res) => res.json());
}
// Metodo Editar Perfil
export function editUserInfo(userData) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: authorizationKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

// Metodo Editar Foto de Perfil
export function editPhoto(avatar) {
  return fetch(`${baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: authorizationKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(avatar),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

/* ***** CardInfo ***** */
export function getCardInfo() {
  return fetch(`${baseUrl}/cards/`, {
    headers: {
      authorization: authorizationKey,
    },
  }).then((res) => res.json());
}
// Metodo agregar tarjeta
export function addCard({ name, about }) {
  return fetch(`${baseUrl}/cards/`, {
    method: "POST",
    headers: {
      authorization: authorizationKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, link: about }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}
// Metodo dar like
export function changeLikeCardStatus(cardId, isLiked) {
  const method = isLiked ? "PUT" : "DELETE";

  return fetch(`${baseUrl}/cards/${cardId}/likes`, {
    method: method,
    headers: {
      authorization: authorizationKey,
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  });
}

//Metodo borrar Card
export function deleteCard(cardId) {
  return fetch(`${baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: authorizationKey,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res;
    }
    return Promise.reject(`Error: ${res.status}: ${res.statusText}`);
  });
}
