
// Repositorio de funciones para la gestión de categorías de la aplicación
// -----------------------------------------------------------------------
angular
    .module("whatapop")
    .service("CategoryService", function($http, Settings) {

        // Función para obtener la lista de categorías del sistema
        this.getCategories = function() {

            return $http.get(Settings.serverUrl + Settings.categoriesEndPoint);
        };
    });
