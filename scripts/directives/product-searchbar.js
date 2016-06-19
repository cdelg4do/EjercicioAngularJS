
// Directiva que dota de funcionalidad a la barra de búsqueda de la aplicación
// ---------------------------------------------------------------------------
angular
    .module("whatapop")
    .directive("productSearchbar", function(CategoryService) {

        return {
            // Para compatibilidad con IE8 y anteriores, 
            // se puede usar tanto como elemento como atributo
            restrict: "EA",

            // Vista de la directiva
            templateUrl: "views/product-searchbar.html",

            // Interfaz de comunicación entre la directiva y el scope padre (controlador / componentes)
            scope: {
                onSearchBtnClick: "&"     // Notificación de evento al scope padre
            },

            // Lógica de la directiva y manipulación del DOM de la directiva
            link: function(scope) {

                // Objeto con los datos de búsqueda del usuario
                // (inicialmente un texto vacío y sin una categoría específica)
                scope.searchData = {
                    text: "",
                    category: 0
                };

                // Obtener las categorías existentes en el servidor
                // y cargarlas en una colección junto a la opción por defecto
                // (esta colección es usada en la vista usada por la lista desplegable de categorías)
                CategoryService.getCategories().then(

                    function(response) {
                        // En caso de éxito, cargamos la opción por defecto
                        // y después las categorías obtenidas
                        scope.categoryOptions = [ { id: 0, name: "Todas las categorías" } ];

                        for (var i=0; i<response.data.length; i++) {
                            scope.categoryOptions.push( response.data[i] );
                        }
                    },

                    function(response) {
                        // En caso de fallo, cargamos solo la opción por defecto
                        scope.categoryOptions = [ { id: 0, name: "Todas las categorías" } ];
                    }

                );


                // Función que indica si se puede pulsar el botón de búsqueda
                // (si se introdujeron al menos 3 caracteres, sin contar espacios)
                scope.goodToGo = function() {

                    var txt = scope.searchData.text.replace(/ /g,"_");

                    if ( txt.length >= 3 ) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };


                // Manejador del botón Buscar
                scope.searchBtnClicked = function() {

                    // Notificamos al scope padre los datos de la búsqueda
                    scope.onSearchBtnClick({ searchData: scope.searchData });
                };
            }
        };
    });
