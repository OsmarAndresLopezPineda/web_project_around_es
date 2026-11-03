# Sprint 12: JavaScript asíncrono y trabajo con APIs

## TripleTen — `web_project_around_es`

Este proyecto corresponde al Sprint 12 del bootcamp de Desarrollo Web de TripleTen y tiene como objetivo aprender a trabajar con JavaScript asíncrono y consumir APIs para obtener, enviar y actualizar información desde un servidor.

A partir del proyecto desarrollado en el Sprint 11, se realizó una nueva actualización para conectar la aplicación con una API externa, sustituyendo los datos estáticos por información proporcionada directamente por el servidor.

Durante esta etapa se implementó la clase `Api`, encargada de centralizar las solicitudes HTTP y administrar la comunicación entre el frontend y el servidor.

También se incorporaron conceptos como **Promises, Fetch API, métodos HTTP y manejo de respuestas asíncronas**, permitiendo que las acciones realizadas por el usuario se reflejen y almacenen en el servidor.

## Características del proyecto

- Consumo de una API externa mediante la función `fetch()`.
- Creación de la clase `Api` para centralizar las solicitudes al servidor.
- Implementación de métodos para realizar solicitudes HTTP.
- Uso de Promises para administrar operaciones asíncronas.
- Uso de `Promise.all()` para obtener simultáneamente la información del usuario y las tarjetas.
- Implementación de los métodos HTTP `GET`, `POST`, `PATCH`, `PUT` y `DELETE`.
- Obtención de la información del perfil del usuario desde el servidor.
- Actualización del nombre y descripción del perfil.
- Actualización de la fotografía de perfil.
- Obtención y renderizado dinámico de las tarjetas proporcionadas por la API.
- Creación de nuevas tarjetas y almacenamiento en el servidor.
- Implementación de funcionalidades para agregar y quitar likes.
- Eliminación de tarjetas mediante una ventana de confirmación.
- Sincronización de las acciones del usuario con el servidor.
- Manejo de respuestas HTTP y errores mediante `Promise.reject()`.
- Implementación de una función auxiliar `_request()` para reutilizar las solicitudes HTTP.
- Centralización de la configuración de conexión mediante `apiConfig`.
- Conservación de la estructura modular y los principios de Programación Orientada a Objetos.

## Mejoras realizadas

Durante esta etapa se buscó mejorar principalmente:

- La comunicación entre el frontend y el backend mediante una API REST.
- La administración de solicitudes HTTP mediante una clase independiente.
- La reutilización de código mediante el método `_request()`.
- La gestión de operaciones asíncronas mediante Promises.
- La actualización dinámica de los elementos del DOM con información del servidor.
- La sincronización de los datos del usuario y las tarjetas.
- El manejo de errores y respuestas HTTP.
- La separación de responsabilidades entre las clases del proyecto.
- La organización y mantenibilidad del código JavaScript.
- La eliminación de la dependencia de datos estáticos para administrar la información principal de la aplicación.

## Estructura del proyecto

El código JavaScript se divide en diferentes módulos para mantener una separación clara de responsabilidades:

- `index.js` — Punto de entrada del proyecto e inicialización de las clases y funcionalidades.
- `Api.js` — Administración de las solicitudes HTTP y comunicación con el servidor.
- `Section.js` — Administración y renderizado de elementos dentro de una sección.
- `Popup.js` — Clase base para administrar las ventanas emergentes.
- `PopupWithForm.js` — Administración de ventanas emergentes que contienen formularios.
- `PopupWithImage.js` — Visualización de imágenes dentro de una ventana emergente.
- `PopupWithConfirmation.js` — Administración de ventanas de confirmación para eliminar tarjetas.
- `UserInfo.js` — Gestión y actualización de la información del perfil del usuario.
- `Card.js` — Creación y administración de las tarjetas, incluyendo likes y eliminación.
- `FormValidator.js` — Validación de formularios.
- `utils.js` — Funciones auxiliares del proyecto, si se utilizan.
- `constants.js` — Selectores del DOM y configuraciones de los diferentes componentes.
- `config.js` — Configuración de conexión con la API.
- `package.json` — Configuración del proyecto y administración de dependencias mediante NPM.

## Tecnologías y técnicas utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **Promises**
- **Node.js / NPM**
- **Webpack**
- **API REST**
- **Métodos HTTP (GET, POST, PATCH, PUT y DELETE)**
- Programación Orientada a Objetos (POO).
- Clases, constructores y herencia.
- Encapsulamiento.
- Acoplamiento débil (_Low Coupling_).
- Módulos JavaScript (`import` / `export`).
- Funciones flecha.
- Métodos `.then()` y `.catch()`.
- `Promise.all()`.
- Manejo de errores y respuestas HTTP.
- Manipulación del DOM.
- Renderizado dinámico de elementos.
- `JSON.stringify()`.
- Consumo y actualización de datos desde un servidor.
- Validación de formularios.
- Metodología **BEM** para la organización de estilos.

## Planes de mejora

Como parte del proceso de aprendizaje, los siguientes aspectos pueden seguir mejorándose:

- Profundizar en el funcionamiento de JavaScript asíncrono.
- Comprender mejor el ciclo de vida de las Promises.
- Profundizar en el uso de `async` y `await`.
- Mejorar el manejo y tratamiento de errores HTTP.
- Implementar estrategias para mostrar mensajes de error al usuario.
- Optimizar las solicitudes realizadas al servidor.
- Mejorar la organización y reutilización de métodos dentro de la clase `Api`.
- Profundizar en la arquitectura cliente-servidor y el funcionamiento de las APIs REST.
- Continuar aplicando buenas prácticas de programación y principios SOLID.

## Enlace al proyecto

[Ver mi proyecto Around The U.S.](https://osmarandreslopezpineda.github.io/web_project_around_es/)

[Ver mi repositorio en GitHub](https://github.com/OsmarAndresLopezPineda/web_project_around_es)
