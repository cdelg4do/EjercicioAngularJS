
// Setter del módulo.
angular.module("whatapop", [
    "ngComponentRouter"
    //,"dahr.ng-image-picker"
]);

// Configuramos del proveedor '$locationProvider' para establecemos el
// modo de navegación HTML5, necesario para Single Page Application.
angular.module("whatapop").config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

// En el value '$routerRootComponent' indicamos el componente raíz.
angular.module("whatapop").value("$routerRootComponent", "rootComponent");
