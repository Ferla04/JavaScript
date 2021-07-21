//-----------------------------------[ Arreglos ]-----------------------------------//
//JavaScript reconoce una variable o una constante como arreglo ya qye tendrá corchetes[]
//Algunos programadores prefieren declarar los arrays como variables y otros comos constantes

let arregloLet = [];
const ARREGLO_CONST = [];

//Pueden almanezar varos tipos de datos

let b = [1,true,'hola',['A','B','C',[1,2,3]]];
//las pocisiones de los arrays comienzan desde el 0
//si quiero acceder al hola uso su posicion
console.log(b[2]);
//Acceder a la C
console.log(b[3][2]);
//Acceder al 2
console.log(b[3][3][1]);


//OTRA MANERA DE CREAR OTRO ARRAY
let c = Array.of('Diana','Juan','Fernanda');
console.log(c);

//En el siguiente ejemplo va a llegar un array con 10 posiciones 
//y en cada uno se va a llenar de la palabra hola
let d = Array(10).fill('hola');
console.log(d);

//Manera vieja de crear un array
let nuevoArray = Array('1','2','3');
console.log(nuevoArray);


//Recorrer un array

let numeros = [1,2,3,4,5,6,7,8,9];
let suma = 0;

for(let i = 0; i < numeros.length; i++){
    //Imprimir numeros
    console.log(numeros[i]);
    suma = numeros[i] + suma;
}
console.log('resultado de la suma es:', suma);

for(let i = numeros.length-1; i >= 0; i--){
    console.log(numeros[i]);
}

//FOR EACH
let colores = ['Amarillo', 'Azul','Rojo'];
let suma2 = 0;

colores.forEach(function(color, index/*posicion*/){
    console.log(`El color es: ${color} y su posicion es: ${index}`);
});

numeros.forEach(argumento => {
    suma2 =argumento + suma2;
});
console.log('La suma con forEach:', suma2);