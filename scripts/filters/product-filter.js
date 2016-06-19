
// Filtro que permite cribar los elementos de una colección de productos obtenida del servidor
// en base a dos parámetros: un texto y una categoría de producto:
//
// - Si la categoría indicada es 0, entonces se aceptan todas las categorías.
//
// - Se busca la coincidencia del texto indicado tanto en el nombre como en la descripción
//   del producto, sin tener en cuenta los tag html de la descripción ni las mayúsculas/minúsculas.
// ------------------------------------------------------------------------------------------------
angular
    .module("whatapop")
    .filter("ProductFilter", function() {

        return function(productList, text, idCategory) {

            // Asegurarse de que los parámetros tengan un valor correcto
            // (por si alguno de ellos fuese undefined)
            productList = productList || [];
            text = text.toLowerCase() || "";
            idCategory = idCategory || 0;

            // Colección de productos que devuelve el filtro
            var filteredList = [];

            // Se recorre la colección de productos buscando coincidencias
            for (var i=0; i<productList.length; i++) {

                var product = productList[i];

                // Si se indicaron todas las categorías,
                // o bien el producto actual es de la categoría indicada
                if (idCategory===0 || product.category.id===idCategory) {

                    // Para la comparación, usamos el nombre y la descripción en minúsculas
                    // y eliminamos las etiquetas html de la descripción
                    var div = document.createElement("div");
                    div.innerHTML = product.description.toLowerCase();
                    var prodDescription = div.innerText;
                    var prodName = product.name.toLowerCase();

                    // Si no se indicó texto por el que filtrar, o bien el texto indicado
                    // está contenido en el nombre o en la descripción del producto,
                    // entonces añadimos el producto actual a la lista a devolver
                    if (text==="" || prodName.indexOf(text)>=0 || prodDescription.indexOf(text)>=0 )
                        filteredList.push(product);
                }
            }
            
            // Devolver la colección filtrada
            return filteredList;
        };
    });
