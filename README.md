# Sprint 11: POO Avanzado y NPM

## TripleTen — `web_project_around_es`

Este proyecto corresponde al Sprint 11 del bootcamp de Desarrollo Web de TripleTen y tiene como objetivo profundizar en los principios de la Programación Orientada a Objetos (POO) y comenzar a utilizar herramientas de desarrollo administradas mediante NPM.

A partir del proyecto desarrollado en el Sprint 10, se realizó una nueva refactorización para mejorar la estructura del código, aumentar la reutilización de las clases y aplicar conceptos más avanzados de POO, como la herencia y la extensión de clases existentes.

También se incorporó **NPM (Node Package Manager)** para gestionar las dependencias y herramientas utilizadas durante el desarrollo y construcción del proyecto.

## Características del proyecto

- Refactorización del código utilizando conceptos avanzados de Programación Orientada a Objetos.
- Creación de clases independientes para separar responsabilidades.
- Uso de herencia para crear clases especializadas a partir de clases existentes.
- Uso de la clase `Popup` como clase base para diferentes tipos de ventanas emergentes.
- Creación de clases derivadas como `PopupWithImage` y `PopupWithForm`.
- Uso de la clase `Section` para administrar la representación de elementos en el DOM.
- Uso de la clase `UserInfo` para administrar la información del perfil del usuario.
- Refactorizacion de la clase `Card` para crear y administrar todo lo referente a ellas.
- Encapsulamiento de propiedades y métodos mediante la convención de propiedades privadas con `_`.
- Uso de módulos JavaScript mediante `export` e `import`.
- Gestión de eventos mediante `addEventListener` y `removeEventListener`.
- Validación de formularios y control del estado de los botones de envío.
- Creación dinámica de tarjetas a partir de objetos con información proporcionada por el usuario.
- Apertura y cierre de ventanas emergentes.
- Edición de información del perfil mediante un formulario.
- Creación de nuevas tarjetas mediante un formulario.
- Visualización de imágenes en un popup.
- Administración de dependencias mediante NPM.
- Uso de Webpack para la construcción y empaquetado del proyecto.

## Mejoras realizadas

Durante esta etapa se buscó mejorar principalmente:

- La reutilización de las clases existentes.
- La separación de responsabilidades entre los diferentes componentes.
- La implementación de herencia para evitar la duplicación de código.
- La organización de los módulos JavaScript.
- La interacción entre las diferentes clases del proyecto.
- La legibilidad y mantenibilidad del código.
- La gestión de dependencias y herramientas mediante NPM.
- La preparación del proyecto para ser construido y empaquetado mediante Webpack.

## Estructura del proyecto

El código JavaScript se divide en diferentes módulos para mantener una separación clara de responsabilidades:

- [index.js] — Punto de entrada del proyecto e inicialización de las clases.
- [Section.js] — Administración y renderizado de elementos dentro de una sección.
- [Popup.js] — Clase base para administrar los popups.
- [PopupWithForm.js] — Clase para administrar popups que contienen formularios.
- [PopupWithImage.js] — Clase para mostrar imágenes dentro de un popup.
- [UserInfo.js] — Gestión de la información del perfil del usuario.
- [Card.js] — Creación y comportamiento de las tarjetas.
- [FormValidator.js] — Validación de formularios.
- [utils.js] — Configuración y funcionalidades auxiliares.
- [package.json] — Configuración del proyecto y administración de dependencias mediante NPM.
- [webpack.config.js] — Configuración de Webpack para la construcción del proyecto.

## Tecnologías y técnicas utilizadas:

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Node.js / NPM**
- **Webpack**
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
- Gestión de dependencias mediante NPM.
- Empaquetado de módulos mediante Webpack.
- Metodología **BEM** para la organización de estilos.

## Planes de mejora:

Como parte del proceso de aprendizaje, los siguientes aspectos pueden seguir mejorándose:

- Profundizar en los principios de Programación Orientada a Objetos.
- Mejorar la identificación y distribución de responsabilidades entre clases.
- Perfeccionar la implementación de herencia y reutilización de clases.
- Mejorar la nomenclatura de métodos, propiedades y variables.
- Seguir reduciendo la duplicación de código.
- Mejorar la estructura y organización de los módulos.
- Profundizar en el uso de NPM y sus herramientas.
- Continuar aprendiendo sobre Webpack y los procesos de construcción de proyectos.
- Seguir aplicando buenas prácticas de JavaScript.

## Enlace al proyecto:

[Ver proyecto en GitHub Pages](https://osmarandreslopezpineda.github.io/web_project_around_es/)
