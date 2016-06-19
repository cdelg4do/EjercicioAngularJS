
// Componente que muestra la ficha en detalle de un producto del sistema
// ---------------------------------------------------------------------
angular
    .module("whatapop")
    .component("productDetail", {

        // Interfaz de comunicación del componente
        // (el enlace de '$router' lo hace automáticamente AngularJS en el ng-outlet)
        bindings: {
            $router: "<",              // Enrutador del SPA
        },

        // Vista del componente
        templateUrl: "views/product-detail.html",

        // Funcionalidad del componente
        controller: function(ProductService, CategoryService, $filter, $sce) {

            // Referencia al propio componente
            var self = this;

            // Función para obtener la ruta a la imagen de un producto
            self.getProductImageUrl = ProductService.getProductImageUrl;


            // Inicialización del componente
            self.$onInit = function() {

                // Datos del objeto a mostrar (inicialmente ninguno)
                self.product = {};
/*                self.product = {
                    name: "-",
                    category: { "name": "-" },
                    seller: { "nick": "-",  },
                    published_date: "-",
                    price: "-"
                };
*/
            };


            self.$routerOnActivate = function(next) {

                // Recuperar el id del producto a mostrar de los parámetros de la ruta
                var productId = next.params.id;

                // Obtener del servidor los datos del producto a mostrar
                ProductService.getProductInfo(productId).then(

                    function(response) {
                        // Si la consulta se realizó correctamente, guardamos los datos del producto
                        self.product = response.data;

                        // Modificamos los datos del producto recibido, para adaptarlos a la vista en pantalla
                        // (fecha de publicación y estado del producto)
                        self.product.published_date = $filter("date")(self.product.published_date,"dd/MM/yyyy hh:mm");

                        if (self.product.state==="selling")
                            self.product.state = "En venta";
                        else
                            self.product.state = "Vendido";
                    },

                    function() {
                        // Si la consulta falló, mostramos un aviso y volvemos a la página de búsqueda
                        alert("No se ha podido localizar el producto solicitado.\n\nPor favor, prueba a realizar una nueva búsqueda");
                        self.$router.navigate(["ProductList"]);
                    }
                );
            };


            // Validación del texto con código html (para la descripción de los productos)
            self.validateHtml = function(texto) {

                return $sce.trustAsHtml(texto);
            };

        }
    });
