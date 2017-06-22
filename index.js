var assert = require('assert'); // en esta linea cargamos un modulo puede ser should
describe("Grupo de casos", function() { // describe: agrupa las pruebas
    it("debe ser verdadero", function() { //it:   define cada uno de las casos de prueba
        // assert.equal(-1, [1,2,3].indexOf(4));
        assert.equal(true, true);
    });
});