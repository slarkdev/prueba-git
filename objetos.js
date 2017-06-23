//ejercicios de Objetos

// ejercicio 1
function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.area = function() { return this.base * this.altura };
}
var rectangulo = new Rectangulo(2, 4);
// console.log(rectangulo.area());

//ejercicio 2
function Persona(nombre, dia, mes, anio) {
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.edad = function() {
        var fecha = new Date();
        var edad = fecha.getFullYear() - this.anio;
        if (this.mes > fecha.getMonth() + 1)
            edad--;
        if (this.mes == fecha.getMonth() + 1 && this.dia > fecha.getDate())
            edad--;
        return edad;
    }
}
var lesly = new Persona("Lesly", 24, 6, 1995);
// console.log(lesly.edad());

//ejercicio 3
function Persona2(nombre, edad, pasatiempo) {
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
}
var persona = new Persona2("Lesly", 22, "jugar voley");
console.log("Hola soy " + persona.nombre + " tengo " + persona.edad + " años y me gusta" + persona.pasatiempo);