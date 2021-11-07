//-------------------------[ Destructuracion en arrays y objetos ]-------------------------------//


/*----------------------------------- Arrays1 -------------------------------------------------- */
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

/*----------------------------------- Arrays 2 -------------------------------------------------- */
let arreglo = [1,2,3,4,5,6];
let [x,y] = arreglo;
console.log(x,y);

let [a,b,c,d = 0] = arreglo;
console.log(a,b,c,d);

/*----------------------------------- Objetos1 -------------------------------------------------- */

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

/*----------------------------------- Objetos2 -------------------------------------------------- */
let usuario ={
    nombre2: 'Fernanda',
    apellido2: 'Velásquez',
    edad2: 17,
    familia: {
        madre: 'Alma',
        hermano: 'Cristian',
    },
    codigoColores: {
        amarillo: '#FFFF00',
        azul: '#0000FF',
        rojo: '#FF0000'
    }
}

//Ejemplo1
let {nombre2, apellido2, edad2} = usuario;
console.log(nombre2, apellido2, edad2);

//Ejemplo2
let {familia: {madre , hermano}} = usuario;
console.log(madre, hermano);

//Ejemplo3
let {codigoColores: {azul: blue}} = usuario;
console.log('Renombre la variable de amarillo a yellow ', blue);

//Ejemplo 4
function miColor({codigoColores: {amarillo}}){
    console.log(`mi color favorito es ${amarillo}`)
}
miColor(usuario);
