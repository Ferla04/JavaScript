//-------------------------------[ Objetos Literales ]--------------------------------------//
// Los objetos literales son objetos que literalmente definimos en una variable y utilizamos


let nombre= 'Juan',
    edad = 19;


// Objeto Normal:
let perro = {
    nombre: nombre,
    edad:  edad,
    ladrar: function(){
        console.log('guauu!!!');
    }
}

console.log(perro);
perro.ladrar();

//Objeto literal:
let dog = {
    nombre, //Aqui agilizamos el metodo de escritura ya que de una vez le estamos diciendo
    edad,   // que la llave es la variable con su valor
    raza: 'callejero',
    ladrar(){
        console.log('guauu guauu!!!');
    }
}

console.log(dog);
dog.ladrar();