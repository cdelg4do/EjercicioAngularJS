
// Documento con los ajustes de configuración de la aplicación
// -----------------------------------------------------------
angular
    .module("whatapop")
    .value("Settings", {
        serverUrl: "http://localhost:8000",
        categoriesEndPoint: "/api/categories",
        productsEndPoint: "/api/products",
        usersEndPoint: "/api/users",
        staticsEndPoint: "/upload"
    });
