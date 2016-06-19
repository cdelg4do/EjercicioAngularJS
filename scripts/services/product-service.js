
// Repositorio de funciones para la gestión de productos de la aplicación
// ----------------------------------------------------------------------
angular
    .module("whatapop")
    .service("ProductService", function($http, Settings) {

        // Función para obtener la colección de productos
        this.getProductList = function() {

            return $http.get(Settings.serverUrl + Settings.productsEndPoint);
        };

        // Función para obtener los datos de un producto concreto
        this.getProductInfo = function(productId) {

            return $http.get(Settings.serverUrl + Settings.productsEndPoint + "/" + productId);
        };

        // Función para obtener la ruta absoluta a una imagen de producto indicada
        this.getProductImageUrl = function(relativePath) {

            return relativePath
                ? (Settings.serverUrl + "/" + relativePath)
                : undefined;
        };
    });
