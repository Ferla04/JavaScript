{//--------------------------------[ Ejemplo: forEach ]-----------------------------------//
/*El forEach es una funcion que usa un parametro que normalmente se llama "element" para recorrer
los elementos de un array, esto hace la misma funcion que este for(let i = 0; i < array.length; i++){}*/

// 1. Construya dos algoritmos que implementen el método forEach

// let arrayF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Este programa imprime los numeros pares del 1 al 10

// arrayF.forEach(element => {
//     if(element % 2 == 0){
//         console.log(`El numero ${element} es par`);
//     }
// });

// Este programa saca el promedio del arreglo

// let suma = 0;
// let promedio;
// arrayF.forEach(element => suma += element);
// promedio = suma / arrayF.length;
// console.log(promedio);
}

{//--------------------------------[ Ejemplo: push ]------------------------------------//
/*La funcion push añade un elemento a la ultima posicion del array*/

// 2. Construya dos algoritmos que implementen el método push

// En este ejercicio agrega un String que el usurio ingrese al arrayP

// let arrayP = [];
// let usurio = prompt("Escriba una palabra");

// arrayP.push(usurio);
// console.log(arrayP);

// En este ejercicio agregan dos arrays al arrayP

// let arrayNumeros = [1, 2, 3, 4, 5];
// let arrayVocales = ["a", "e", "i", "o", "u"];

// arrayP.push(arrayNumeros, arrayVocales);
// console.log(arrayP);
}

{//--------------------------------[ Ejemplo: pop ]------------------------------------//
/* La funcion pop elimina el ultimo elemento de un array*/

// 3. Construya dos algoritmos que implementen el método pop

// En este ejercicio elimina el ultimo elemento

let arrayPop = ["Nosotros", "somos", "Programadores", "y Bailarines"];

arrayPop.pop();
console.log(arrayPop);

// En este ejercicio elimina el utlimo array(elemento) dentro del array principal

let arrayPop2 = [ ["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"] ];

arrayPop2.pop();
console.log(arrayPop2);
}

{//--------------------------------[ Ejemplo: unshift ]------------------------------------//
/* La funcion unshift añade un elemento a la primera posicion de un array*/

// 4. Construya dos algoritmos que implementen el método unshift

// Este ejercicio agrega un numero a un array

let arrayU = [1, 2, 3, 4, 5];
arrayU.unshift(0);
console.log(arrayU); 

// Este ejercicio agrega varios String a un array

let arrayU2 = ["Dina", "son del equipo tipado"];
arrayU2.unshift("Juan", "Fernanda", "y");
console.log(arrayU2);
}

{//--------------------------------[ Ejemplo: indexof ]------------------------------------//
/* La funcion indexof busca un elemento en el array, si lo encuntra nos da el numero de su posicon 
y si no lo encuentra nos da un -1*/

// 5. Construya dos algoritmos que implementen el método indexOf

let arrayI = [1, 2, 3, 4, 5];
let indice = arrayI.indexOf(4);
console.log(`Indice: ${indice}  Elemento: ${arrayI[indice]}`);

//segundo para parámetro desde donde o hasta donde buscar el elemento
//si el numero es positivo, indica desde donde empezara a buacar desde la izquierada del array(la primera posicion es 0)
//si el numero es negativo, indica hasta donde buscara empezando desde la derecha del array(el ultimo elemento es -1 o -0, el penultimo es -2 y asi sucivamente)
//Si el el indexOf nos envia un -1 es que no encontro el elemento
let arrayI2 = ["A", "B", "D", "E"];
let indice2 = arrayI2.indexOf("B", -3);
console.log(`Indice: ${indice2}  Elemento: ${arrayI2[indice2]}`);
}

{//--------------------------------[ Ejemplo: splice ]------------------------------------//
/* La funcion splice elimina el o los elementos de un array, si deseamos podemos guardarlos en una variable*/

// 6. Construya dos algoritmos que implementen el método splice

// En este ejercicio eliminamos el "no" poniendo en el primer parametro la posicion 
// y en el segundo parametro el numero de elementos a eliminar de izquierda a derecha
let arraySp = ["Nosotros", "no", "somos buenos", "programadores"];
let eliminado = arraySp.splice(1, 1);
console.log(arraySp);
console.log("eliminado: ", eliminado);

// En este ejercicio elimamos los dos arrays(elementos) del array pricipal que tienen letras dentro
let arraySp2 = [ [1, 2, 3], [4, 5, 6], [7, "A", "B"], ["C", 8, 9] ];
arraySp2.splice(2, 2);
console.log(arraySp2);
}

{//--------------------------------[ Ejemplo: slice ]------------------------------------//
/* La funcion slice copia el o los elemntos de una array y los guarda en una varible*/

// 7. Construya dos algoritmos que implementen el método slice

// En este ejercicio copiamos los elementos desde la posicion 1 
// hasta la posicion 6(esta ultima posicion no se copia)
let arraySL = [1,2,3,4,5,6,7,8,9]
let copia = arraySL.slice(1,6);
console.log(arraySL);
console.log(copia);

// En este ejercicio copiamos todo el array y añadimos los numeros pareces a un array que vaciamos con splice
let arraySL2 = [1,2,3,4,5,6,7,8,9,10];
let copia2 = arraySL2.slice();
arraySL2.splice(0, arraySL2.length);

for(let i = 0; i < copia2.length; i++){
    if(copia2[i]%2 == 0){
        arraySL2.push(copia2[i]);
    }
}
console.log(copia2);
console.log(arraySL2);
}

{//--------------------------------[ Ejemplo: join ]------------------------------------//
/* La funcion join convierte los elementos de un array a un String y los guarda en una variable sin modificar el array original, en el parametro indicamos el separador de los elementos que por defecto es una coma*/

//1. Construya dos algoritmos que implementen el método join
//
let arrayJ = ["trabajo", "equipo"];  
let texto = arrayJ.join(" en ");
console.log(texto);

let arrayJ2 = [ ["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"] ];  
let texto2 = arrayJ2.join();
console.log(texto2);
}

{//--------------------------------[ Ejemplo: split ]------------------------------------//
/* La funcion split separa un string y lo convierte en un array, el separador lo indicamos en el primer parametro, el segundo parametro es el numero de elementos a combertir*/

//1. Construya dos algoritmos que implementen el método split

let string = "¿Que dia es hoy?";
let arraySP = string.split(" ", 3);
console.log(arraySP);

let stringSP1 = 'hola,mundo,hermoso';
let arrayV =  stringSP1.split("");
console.log(arrayV);

let stringSP2 = 'hola,mundo,hermoso';
let arrayP =  stringSP2.split(",", 2);
console.log(arrayP);
}