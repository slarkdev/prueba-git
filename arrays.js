var assert = require('assert'); // en esta linea cargamos un modulo puede ser should

// commit de arrays
// Ejercicios de Arrays
// Ejercicio 1

function ejercicio1(arr, numero) {
    return arr.reduce((n, m) => n * m, numero);
}

// Ejercicio 2
function ejercicio2(arr, validos) {
    return arr.filter(n => {
        for (var i in validos) {
            //cogemos los primeros caracteres y los ultimos del arreglo
            var primeros = n.toString().substr(0, validos[i].toString().length);
            var ultimos = n.toString().substr(-1 * validos[i].toString().length);
            if (primeros == validos[i].toString() || ultimos == validos[i].toString())
                return true;
        }
        return false;
    });
}

// Ejercicio 3
var ejercicio3 = function(aleatorios, x) {
    var respuesta = [];
    aleatorios.forEach(n => {
        if (n % x == 0)
            respuesta.push(n);
    });
    return respuesta;
}

// Ejercicio 4
var ejercicio4 = function(arreglo) {
    return arreglo.map(n => n * 2 + 1);
};

// Ejercicio 5
var arregloFarenheit = function(arregloCelsius) {
    return arregloCelsius.map(n => (9 * n / 5) + 32);
}

// Ejercicio 6
var producto = function(arreglo) {
    return arreglo.reduce((n, m) => n * m);
}

// Ejercicio 7
var edades = function(array) {
    return array.filter(n => n > 18 && n % 2 == 0).map(n => new Date().getFullYear() - n);
}


describe("Ejercicios de Arreglos con pruebas TDD en mocha", function() {
    describe("Ejercicio 1", function() { // describe: agrupa las pruebas
        it("arr = [4,4,5,12] y numero = 9 debe ser 8640", function() { //it:   define cada uno de las casos de prueba
            assert.equal(ejercicio1([4, 4, 5, 12], 9), 8640);
        });
    });

    describe("Ejercicio 2", function() { // describe: agrupa las pruebas
        it("arr = [78412397, 918374817841, 2173784, 784129837, 3487396478, 2348798] y array2= [784] debe ser [784123123, 2173784, 784129837]", function() { //it:   define cada uno de las casos de prueba
            var arr = [78412397, 918374817841, 2173784, 784129837, 3487396478, 2348798];
            var validos = [784];
            assert.deepEqual(ejercicio2(arr, validos), [78412397, 2173784, 784129837]);
        });
    });

    describe("Ejercicio 3", function() { // describe: agrupa las pruebas
        it("arr = [7,21,44,80,77,35] y numero = 7 debe ser [7,21,77,35]", function() { //it:   define cada uno de las casos de prueba
            assert.deepEqual(ejercicio3([7, 21, 44, 80, 77, 35], 7), [7, 21, 77, 35]);
        });
    });

    describe("Ejercicio 4", function() { // describe: agrupa las pruebas
        it("arr = [2, 5, 7, 2, 3, 8, 10] debe ser [5,11,15,5,7,17,21]", function() { //it:   define cada uno de las casos de prueba
            var arr = [2, 5, 7, 2, 3, 8, 10];
            assert.deepEqual(ejercicio4(arr), [5, 11, 15, 5, 7, 17, 21]);
        });
    });

    describe("Ejercicio 5", function() { // describe: agrupa las pruebas
        it("celsius = [0,50,100] debe ser farenheits = [32,122,212]", function() { //it:   define cada uno de las casos de prueba
            var arr = [0, 50, 100];
            assert.deepEqual(arregloFarenheit(arr), [32, 122, 212]);
        });
    });

    describe("Ejercicio 6", function() { // describe: agrupa las pruebas
        it("producto= [1,2,3,4] debe ser 24", function() { //it:   define cada uno de las casos de prueba
            assert.deepEqual(producto([1, 2, 3, 4]), 24);
        });
    });

    describe("Ejercicio 7", function() { // describe: agrupa las pruebas
        it("edades= [20, 16, 89, 6] debe ser [1997]", function() { //it:   define cada uno de las casos de prueba
            assert.deepEqual(edades([20, 16, 89, 6]), [1997]);
        });
    });
});