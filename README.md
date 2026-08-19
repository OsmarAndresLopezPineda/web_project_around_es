# Sprint 10: Introducción a la Programación Orientada a Objetos

## TripleTen — `web_project_around_es`

Este proyecto corresponde al Sprint 10 del bootcamp de Desarrollo Web de TripleTen y tiene como objetivo aplicar los principios de la Programación Orientada a Objetos (POO) en JavaScript.

A partir de una versión funcional del proyecto, se realizó una refactorización del código para organizar mejor sus responsabilidades mediante clases, herencia, encapsulamiento y módulos JavaScript.

## Características del proyecto

- Refactorización del código utilizando Programación Orientada a Objetos.
- Creación de clases independientes para organizar diferentes responsabilidades, se convierten todas las funciones en metodos de clase y se asignan a diferentes clases relacionadas con una funcion en especifico.
- Uso de herencia de clases mediante la clase [Popup] y sus clases derivadas.
- Uso de módulos JavaScript mediante [export] e [import].
- Encapsulamiento de propiedades y métodos mediante la convención de propiedades privadas con `_`.
- Gestión de eventos mediante [addEventListener] y [removeEventListener].
- Validación de formularios y control del estado de los botones de envío.
- Creación dinámica de tarjetas a partir de objetos con información proporcionada por el usuario.
- Apertura y cierre de ventanas emergentes (popups).
- Edición de información del perfil mediante un formulario.
- Creación de nuevas tarjetas mediante un formulario.
- Visualización de imágenes en un popup.

## Mejoras realizadas

Durante la refactorización se buscó mejorar principalmente:

- La organización y legibilidad del código.
- La separación de responsabilidades.
- La reutilización de componentes.
- La consistencia en los nombres de clases, métodos y propiedades.
- La eliminación de lógica repetida.
- El mantenimiento y escalabilidad del proyecto.

## Estructura del proyecto

El código JavaScript se divide en diferentes módulos para mantener una separación clara de responsabilidades:

- [index.js] — Punto de entrada del proyecto e inicialización de las clases.
- Popup.j` — Clase base para los popups.
- [EditProfilePopup.js] — Gestión del popup de edición del perfil.
- [NewCardPopup.js] — Gestión del popup para crear tarjetas.
- [ImagePopup.js ]— Gestión del popup de imágenes.
- [Card.js] — Creación y comportamiento de las tarjetas.
- [FormValidator.js] — Validación de formularios.
- [utils.js]— Funcionalidades y clases auxiliares.

## Tecnologías y técnicas utilizadas:

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- Programación Orientada a Objetos (POO).
- Clases y constructores.
- Herencia de clases.
- Encapsulamiento.
- Métodos de clase.
- Módulos JavaScript (`import` / `export`).
- Manipulación del DOM.
- `addEventListener` y `removeEventListener`.
- Funciones flecha.
- Arrays y objetos.
- Plantillas HTML mediante `<template>`.
- Validación de formularios.
- Reutilización de código.
- Metodología **BEM** para la organización de estilos.

## Planes de mejora:

Como parte del proceso de aprendizaje, los siguientes aspectos pueden seguir mejorándose:

- Profundizar en los principios de Programación Orientada a Objetos.
- Mejorar la identificación de responsabilidades de cada clase.
- Perfeccionar la nomenclatura de métodos, propiedades y variables.
- Seguir reduciendo la duplicación de código.
- Mejorar la estructura y organización de los módulos.
- Continuar aplicando buenas prácticas de JavaScript.

## Enlace al proyecto:

[Ver proyecto en GitHub Pages](https://osmarandreslopezpineda.github.io/web_project_around_es/)
