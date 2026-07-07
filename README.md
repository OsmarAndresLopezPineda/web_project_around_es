# Proyecto 8-Parte 1: Métodos de JavaScript y trabajar con el DOM: Tripleten web_project_around_es

## Características del proyecto

# Proyecto 8-Parte 1:

- Es esta primera parte del proyecto 8 primero se crea una directorio de "scripts" que contendra todos los scrips de JavaScript del proyecto, despues se crea un archivo index.js que contendra todas las funcionalidades de nuestro proyecto js.
- Tambien se crea un array llamado "initialCards" donde creamos 6 objetos para cada elemento "card" de "cart\_\_list" de nuestro "index.html".
  - Se elimina el metodo forEach para iterar en cada uno de los campos de "name" del los objetos del array "initialCards".

# Proyecto 8-Parte 2:

- Se seleccionan los selectores de "profile\_\_edit-button" en el document, y los selectores edit-popup, y close popup.
- Se crean dos funciones para abrir y cerrat Modal (openModal, closeModal).
- Se usa el metodo "addEventListener" para abrir los selectores edit-popup, y close popup.
- Se crea una funcion que rellene los campos de nameInput y jobInput con los campos actuales de profileTitle y profileDescription.
- Se crea una funcion que se encarga de actualizar los datos de profileTitle y profileDescription con los datos de nameInput y jobInput, cuando esta se envie con el botton de "submit"
- Se le asignan valores predeterminados al Titulo y Descripcion de la "getCardElement".

# Proyecto 8-Parte 3:

- Se selecciona el boton "profile\_\_add-button" en el documento, asi como "new-card-popup".
- Se crean diversos selectores para los elementos internos de #new-card-popup" y "cardForm".
- Se reutilizan los modales openModal y closeModal para abrir y cerrar los repectivos atravez del metodo "addEventListener" "click".
- Se crea una funcion que se encarga de crear una nueva tarjeta con los datos de nameCard y linkCard, a partir de un clon de los elementos de la "cardTempleate", cuando se da click en "submit" gracias al metodo "addEventListener".
- Se crea una funcion que renderiza la copia de la "cardTempleate" en al princio del contenedor de las tarjetas dentro del DOM del HTML.
- Se agrega la funcion de "cardLikeButton" (me gusta) al boton a la funcion que crea los clones con las tarjetas de "cardTempleate".
- Se agrega la funcion de "cardDeleteButton" (borrar) a la funcion que crea los clones con las tarjetas de "cardTempleate".
- Se llama al selector #image-popup" para que abra el modal cuando se de click en la imagen de una tarjeta dentro de el clon que se crea de cada "cardTempleate".

# Proyecto 9-Parte 1:

- Se agrega el mensaje de validacion tipo <span> el el formulario de editar perfil.
- Se agrega la condicion de 2 a 40 caracteres para el nombre de perfil
- Se agrega la condicion de 2 a 200 caracteres para la descripcion del perfil
- Se inabilita el boton de guardado hasta que las condiciones del formulario se cumplan.
- Se crea una funcion universal reutilizable para validar los formularios de editProfileForm y newCardForm.
- Se agrega la funcion de cerrar los formularios popup al hacer click afuera
- Se agrega la funcion de cerrar el formulario al presionar ESC
- Se crea una funcion que combina las funcionas de cerrar el formulario al hacer click afuera y presionar esc.
- Se llama la nueva funcion parra los bloques de esditar perfil, crear tarjeta y abrir imagen de tarjeta.

### Planes de mejora

Memorizar las definiciones de cada termino y su estructura, ya que se me costo un poco recordar que era y como se estructura un "array", con los "objeto", y "campos", usando el "metodo" tal.

## Características del proyecto

- Uso de JavaScript.
- Uso de arrays con objetos con diferentes campos.
- Uso de metodos para los arrays.
- Uso de selectores.
- Uso de funciones con elementos predeterminados.
- Uso del metodo "addEventListener".
- Reutilizacion de funciones.
- Uso de funciones arrow
- Uso de modales popup.

## Page link:

- No me deja subirlo a github Pages, me dice:

- GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.
  GitHub Pages: Upgrade or make this repository public to enable Pages
  Learn more about GitHub Pages
