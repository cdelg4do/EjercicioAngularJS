# Práctica Fundamentos de AngularJS de Carlos Delgado Andrés

**Whatapop** es un prototipo de aplicación web similar a Walapop realizada en Angular 1.5.

Se trata de una Single Page Application con dos páginas, una para buscar y mostrar un listado de productos, y otra para mostrar la información de un producto en detalle.

La práctica se ha implementado utilizando la **Opción 1** (usando **node-sparrest** como backend).

.
### Página de búsqueda y listado de productos:
Esta es la página por defecto de la aplicación y puede accederse a través del enpoint **/products**.

Esta página cuenta con una barra de búsqueda consistente en:
* **Selector de categorías**: una lista desplegable que permite al usuario seleccionar una categoría concreta, o bien ampliar la búsqueda a **todas** las categorías (que es la opción por defecto).
* **Formulario de búsqueda**: un campo de texto que permite al usuario introducir la(s) palabra(s) clave de su búsqueda de productos.
* **Botón de búsqueda**: para realizar la consulta al servidor de acuerdo con los criterios indicados por el usuario.

Si por alguna razón no es posible obtener las categorías del servidor, la opción de **Todas las categorías** siempre estará disponible.

La búsqueda por texto se realiza buscando coincidencias en el nombre o en la descripción de los productos, sin distinguir mayúsculas ni minúsculas. Tampoco se tienen en cuenta para esta búsqueda las etiquetas Html de la descripción del producto.

El botón de búsqueda se inhabilita mientras no se introduzca un texto de al menos 3 caracteres (sin contar espacios).

Si la búsqueda arroja coincidencias, se muestra un listado de las mismas que incluye:
* La primera imágen del producto (en caso de que tuviese más de una).
* Nombre del producto
* Precio
* Autor del anuncio
* Categoría a la que pertenece

.
### Página de detalle del producto:
Se accede a esta página pulsando sobre la imágen del producto o sobre su nombre, en el listado de búsqueda de productos.

También se puede acceder a través del endpoint **/product/** especificando el id del producto a mostrar.

Si la consulta al servidor para obtener los datos del producto falló, o si el producto indicado no existe, se mostrará un mensaje de aviso al usuario y se le redirigirá a la `´agina de búsqueda.

En caso de obtener correctamente los datos del producto, se mostrarán en pantalla:
* Foto en grande del producto (si tuviese varias, la primera)
* Nombre del producto
* Precio del producto, en Euros
* Fecha y autor de la publicación
* Estado del producto (si está en venta o si ya está vendido)
* Categoría a la que pertenece
* Descripción del producto (incorporando etiquetas html, si las tuviese)

Es posible regresar a la página de búsqueda desde esta página en cualquier momento pulsando el botón "ir atrás" del navegador o pulsando sobre el nombre del sitio en la cabecera de la página en la parte superior.
