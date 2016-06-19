
// Repositorio de funciones para la gestión de usuarios de la aplicación
// ---------------------------------------------------------------------
angular
    .module("whatapop")
    .service("UserService", function($http, Settings) {

        // Función para obtener la lista de usuarios
        this.getUserList = function() {

            return $http.get(Settings.serverUrl + Settings.usersEndPoint);
        };

        // Función para obtener los datos de un usuario concreto
        this.getUserInfo = function(userId) {

            return $http.get(Settings.serverUrl + Settings.productsEndPoint + "/" + userId);
        };

        // Función para obtener la ruta absoluta al avatar indicado
        this.getUserImageUrl = function(relativePath) {

            return relativePath
                ? (Settings.serverUrl + "/" + relativePath)
                : undefined;
        };
    });
