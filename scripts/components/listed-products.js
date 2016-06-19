
// Componente que muestra la barra de búsqueda y el listado de productos del sistema
// ---------------------------------------------------------------------------------
angular
    .module("whatapop")
    .component("listedProducts", {

        // Interfaz de comunicación del componente
        // (el enlace de '$router' lo hace automáticamente AngularJS en el ng-outlet)
        bindings: {
            $router: "<",              // Enrutador del SPA
        },

        // Vista del componente
        templateUrl: "views/listed-products.html",

        // Funcionalidad del componente
        controller: function(ProductService, CategoryService, $filter, $sce) {

            // Referencia al propio componente
            var self = this;

            // Función para obtener la ruta a la imagen de un producto
            self.getProductImageUrl = ProductService.getProductImageUrl;


            // Inicialización del componente
            self.$onInit = function() {

                // Colección de productos a mostrar (inicialmente ninguno)
                self.showingProducts = [];

                // Texto resumen de la búsqueda
                self.summaryText = "Prueba a realizar una búsqueda para ver los productos";

                // Categorías por la que buscar (inicialmente, por todas)
                self.categoryOptions = [ { "name":"Todas las categorías", "id":0 } ];

                // Obtener las categorías existentes del servidor
                CategoryService.getCategories().then(function(response) {

                    // El cuerpo de la respuesta HTTP está en la propiedad data
                    existingCategories = response.data;

                    // Añadimos las categorías del servidor a la colección de opciones
                    for (var i=0; i<existingCategories.length; i++) {

                        self.categoryOptions.push( existingCategories[i] );
                    }
                });
            };


            // Búsqueda de productos
            self.searchProducts = function(searchData) {

                // Realizamos una consulta al servidor para obtener todos los productos
                ProductService.getProductList().then(

                    function(response) {
                        // Si la consulta se realizó correctamente, filtramos los datos recibidos
                        // (de acuerdo con los valores text y category de searchData)
                        self.showingProducts = $filter("ProductFilter")(response.data, searchData.text, searchData.category);

                        if (self.showingProducts.length > 0)
                            self.summaryText = "Mostrando " + self.showingProducts.length + " productos";
                        else
                            self.summaryText = "Ningún producto corresponde con tu búsqueda";
                    },

                    function() {
                        // Si la consulta falló, devolvemos una colección de elementos vacía
                        self.showingProducts = [];

                        self.summaryText = "Se ha producido un error al procesar la búsqueda";
                    }
                );

            };


            // Validación del texto con código html (para la descripción de los productos)
            self.validarHtml = function(texto) {

                return $sce.trustAsHtml(texto);
            };


        }
    });
