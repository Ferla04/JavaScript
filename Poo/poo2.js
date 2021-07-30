//Poo
/*
Clases -> Modelo a seguir
Objetos -> Es una copia de ese modelo a seguir (instancia de una clase).
Atributos -> Es una caracteristica o propiedad del objeto(son variables dentro de un objeto)
Metodos -> son acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

// Función Constructora
// VERSION 1
function Animal1(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Método
    this.sonar = function(){                             //Es recomendable que las funcion constructora no
        console.log('Hago sonidos porque estoy vivo');   //tenga metodos (Version 2);
    }
}

const snoppy1 = new Animal1('Snoppy', 'Macho'),
      lolaBunny1 = new Animal1('Lola Bunny', 'Hembra');

console.log(snoppy1);
console.log(lolaBunny1);

//------------------------------------------------------------------------------------------------//
//VERSION 2
//Funcion constructora donde le asignamos metodos al PROPOTIPO, no a la funcion como tal
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Método agragados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){                             
    console.log('Hago sonidos porque estoy vivo');   
}

// const snoppy1 = new Animal('Snoppy', 'Macho'),
//       lolaBunny1 = new Animal('Lola Bunny', 'Hembra');

// console.log(snoppy1);
// console.log(lolaBunny1);

//----------------------------------------------------------------------------------------------------//

//Herencia  Prototípica
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
};

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobre escribir de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log('soy un perro y mi sonido es un ladrido');
};

Perro.prototype.ladrar = function(){
    console.log('Guuuaaauuuu!!!!!!!!!');
};

const snoppy = new Perro('Snoppy', 'Macho', 'Mediano'),
      lolaBunny = new Animal('Lola Bunny', 'Hembra');

console.log(snoppy);
console.log(lolaBunny);

snoppy.sonar();
snoppy.ladrar();

lolaBunny.sonar();