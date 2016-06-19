
// Componente raíz de la Single Page Application
// ---------------------------------------------
angular
    .module("whatapop")
    .component("rootComponent", {

        // Rutas de SPA
        $routeConfig:[
            { name: "ProductList", path: "/products", component: "listedProducts", useAsDefault: true },
            { name: "ProductInfo", path: "/product/:id", component: "productDetail" }
        ],

        // Vista del componente.
        templateUrl: "views/root-component.html",

        // Funcionalidad del componente
        controller: function() {

            // Referencia al propio componente (para uso futuro)
            var self = this;
        }
    });
