//------------------------------ MAP ------------------------------
/*El metodo .map sirve de una forma similar al foreach (el foreach solo recorre el array 
sin entregar ningun valor) en  el .map entrega un valor que se guarda en una variable*/
console.log('MAP-----------------------');
let arr = ['juan', 'jesus', 'juliana', 'andrea', 'fernanada'];

let metMap = arr.map((e,i) =>{
    return `<div>${e}</div>`
});

console.log(metMap);


//------------------------------ FILTER ------------------------------
/*Este metodo nos permite firltar en un arreglo los elementos basados por una condicion y 
nos devuelve otro arreglo que cumpla con la condicion*/
console.log('FILTER--------------------');
let arr2 = ['juan', 'jesus', 'andrea', 'juliana', 'fernanada'];

// let metFilter = arr.filter((e,i) =>{
//     return e[0] == 'j'; // --> aqui va la condición 
// });

//más resumido
let metFilter = arr.filter((e,i) => e[0] == 'j'); // --> aqui va la condición 

console.log(metFilter);


//------------------------------ FIND ------------------------------
/*Este metodo nos permite encontrar la primera concidencia dentro de un arreglo
basado en una condición, es parecido a filter pero find solo tre el PRIMER elemento*/
console.log('FIND----------------------');
let arr3 = [
    { student: 'Carlos', note: 5},
    { student: 'Leslie', note: 6},
    { student: 'Lizeth', note: 10},
    { student: 'Samuel', note: 10}
]

let metFind = arr3.find(e => e.note > 9);
console.log(metFind);


//------------------------------ FINDINDEX ------------------------------
/*Este metodo es igual al de find pero este entrega el indice del primer elemnto
que cumple la condición */
console.log('FIND-FILTER---------------');

let metFindIndex = arr3.findIndex(e => e.note > 9);
console.log(metFindIndex);
console.log(arr3[metFindIndex]); /*--> como este retorna un numero podemos traer de una vez
                                       el elemento por eso es mejor usar primero findIndex*/


//------------------------------ REDUCE ------------------------------
/*Este aplica una serie de operaciones y se va a tener un unico resultado,
ejemplo cuando se suma todos elementos de un arreglo (reduce el arreglo a un unico resultado)*/
console.log('REDUCE--------------------');

let arr4 = [5,6,4,2,7,8,1,3,9];

let metReduce = arr4.reduce((prev, e, i) =>{ //prev hace referencia al acumulador 
    return prev + e; // ej: 10 = 10 + 3
}, 5); // --> el otro argumento de reduce es el valor inicial de prev este es OPCIONAL
console.log(metReduce);

//OTRO EJEMPLO: Sacar el numero mas grande de arr4

let metReduce2 = arr4.reduce((prev, e, i) =>{
    return Math.max(prev, e);
})
console.log(metReduce2);


//------------------------------ EVERY ------------------------------
/*Nos permite hacer un test sobre cada uno de los elemtos a ver si cumplen 
una condición, ESTE VA A RETORNAR UN TRUE O FALSE */
console.log('EVERY---------------------');

let metEvery = arr4.every(e => e > 5);
console.log(metEvery);
/*En metEvery testea si todos los elementos son mayores a 5, pero no todos cumplen
con esta condicion por eso da un resultado false*/


//------------------------------ SOME ------------------------------
/*Este metodo es casi igual que EVERY, la diferencia es que si por
lo menos algun elemento del array cumple esa condición da True de lo contrario False */
console.log('SOME----------------------');

let metSome = arr4.some(e => e > 5);
console.log(metSome);

//OTRO EJEMPLO: saber si algun retaurante no tiene rating
let restaurant = [
    {name: 'McDonals'},
    {name: 'KFC', rating: 8},
    {name: 'Frisby'}
]

let restSome = restaurant.some(e => e.rating === undefined);
console.log(restSome);


//------------------------------ INCLUDES ------------------------------
/*La diferencia entre SOME e INCLUDES, es que este ultimo va a buscar un elemento
en específico, inclides no acepta un CALLBACK*/
console.log('INCLUDES------------------');

let restIncludesFALSE = restaurant.includes({name: 'Frisby'}); 
//acá va a dar false, porque tiene buscar un elemto en especifico
console.log(restIncludesFALSE);

let item = {name: 'Frisby'}

let restaurant2 = [
    {name: 'McDonals'},
    {name: 'KFC', rating: 8},
    item,
]

let restIncludes = restaurant2.includes(item);
console.log(restIncludes);


//------------------------------ SORT ------------------------------
/*Permite ordenar elemento de un arreglo */
console.log('SORT----------------------');


let arr5 = [41,36,2,49,65,75];

let metSort = arr5.sort((i, j) =>{
    return i - j;
});


let metSort2 = arr5.sort((i, j) =>{
    if(i < j){
        return -1; /*el -1 le indica al metodo que no haga nada */
    }

    if(i > j){
        return 1; /*el 1 le indica al metodo que haga el cambio */
    }

    return 0;
});



console.log(metSort);

/*MODO BURBUJA */
for(let i = 0; i < arr5.length; i++){
    for(let j = i + 1 ; j < arr5.length; j++){
        if(arr5[i] > arr5[j]){
            let change = arr5[i];
            arr5[i] = arr5[j];
            arr5[j] = change;  
        }
    }
}

//---------------------------- REPLACE -----------------------------

let cadena = 'Python es genial';
console.log(cadena);
cadena = cadena.replace('Python','JavaScript');
console.log(cadena);

//---------------------------- REGEXP -----------------------------
let cadena2 = 'Java es mi primer lenguaje, java es genial, java tiene una sintaxis muy facil';

/*EXPRESIONES REGULARES*/
let ExpRegular = new RegExp('java','ig');//-----El segundo argumento se llaman banderas
let ExpRegular2 = /java/ig;
/*
/java{1}/ig --> las llaves dan a entender que dan un rango
/java{1,4}/ig --> rango donde la palabra se tiene que repetir de 1 a 4
/java{1,}/ig --> si dejamos la coma es indefinido 
*/

console.log(ExpRegular.test(cadena2));
console.log(ExpRegular.exec(cadena2));

let cadena3 = 'HolA CoMo ESTa la GeTuzA';
cadena3 = cadena3.replace(/[a-z]/g,'p');
console.log(cadena3)