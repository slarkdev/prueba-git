var assert = require('assert'); // en esta linea cargamos un modulo puede ser should
describe("Grupo de casos", function() { // describe: agrupa las pruebas
    it("debe ser verdadero", function() { //it:   define cada uno de las casos de prueba
        // assert.equal(-1, [1,2,3].indexOf(4));
        assert.equal(true, true);
    });
});


// Ejercicios de Arrays
// Ejercicio 1
console.log("Ejercicio 1");
var arr = [4, 4, 5, 12];
var resultado = arr.reduce((n, m) => n * m, 9);
console.log(resultado);

// Ejercicio 2
console.log("Ejercicio 2");
var arr = [78412397, 918374817841, 2173784, 784129837, 3487396478, 2348798];
var validos = [7841];
var aux = arr.filter(n => {
    for (var i in validos) {
        //cogemos los primeros caracteres y los ultimos del arreglo
        var primeros = n.toString().substr(0, validos[i].toString().length);
        var ultimos = n.toString().substr(-1 * validos[i].toString().length);
        if (primeros == validos[i].toString() || ultimos == validos[i].toString())
            return true;
    }
    return false;
});
console.log(aux);

// Ejercicio 3
console.log("Ejercicio 3");
var ejercicio3 = function(aleatorios, x) {
    var respuesta = [];
    aleatorios.forEach(n => {
        if (n % x == 0)
            respuesta.push(n);
    });
    return respuesta;
}
console.log(ejercicio3([7, 21, 44, 56], 2));

// Ejercicio 4
console.log("Ejercicio 4");
var arr = [2, 5, 7, 2, 3, 8, 10];
var resultado = function(arreglo) {
    return arreglo.map(n => n * 2 + 1);
};
console.log(resultado(arr));

// Ejercicio 5
console.log("Ejercicio 5");
var arregloFarenheit = function(arregloCelsius) {
    return arregloCelsius.map(n => 9 * n / 5 + 32);
}
console.log(arregloFarenheit([0, 100]));

// Ejercicio 6
console.log("Ejercicio 6");
var producto = function(arreglo) {
    return arreglo.reduce((n, m) => n * m);
}
console.log(producto([1, 2, 3, 4]));

// Ejercicio 7
console.log("Ejercicio 7");
var edades = function(array) {
    return array.filter(n => n > 18 && n % 2 == 0).map(n => new Date().getFullYear() - n);
}
console.log(edades([20, 16, 89, 6]));