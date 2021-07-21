//-------------------------[ Destructuracion en arrays y objetos ]-------------------------------//


/*----------------------------------- Arrays -------------------------------------------------- */
let numeros = [1,2,3];

//Sin destructuracion
console.log('-----Sin destructuracion arrays-----')
let uno = numeros[0],
    dos = numeros[1],
    tres= numeros[2];

console.log(uno,dos,tres);


//Con destructuracion
console.log('-----Con destructuracion arrays-----');
let [one,two,three] = numeros;
console.log(one,two,three);

/*----------------------------------- Objetos -------------------------------------------------- */

let persona ={
    nombre: 'Fernanda',
    apellido: 'Velásquez',
    edad: 17
};

console.log('-----Con destructuracion objetos-----');
let {nombre, apellido, edad} = persona;
/*¡¡¡OJO!!! Cuidado al declarar las variables de para el objeto
esta se deben llamar IGUAL a las llaves o no funcionará  
let {name, lastname, age} = persona;
Daria UNDEFINED toca llamarlas igual
*/
console.log(nombre,apellido, edad);