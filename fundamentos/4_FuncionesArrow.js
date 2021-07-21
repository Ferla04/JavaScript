//----------------------------[ FUNCIONES FLECHA]----------------------------------------//

const saludar = () =>{
    console.log('hola');
}

//Y si es de una sola linea podemos omitir las llaves
const saludar2 = () => console.log('Hola x2');
//y si tiene SOLO UN parametro se le pueden quitar los parectesis
const saludar3 = nombre => console.log(`Hola ${nombre}`);
saludar3('Fernanda');

let sumar = (a, b) => a + b;
console.log(sumar(9,8));

const VariasLineas = () => {
    console.log('uno');
    console.log('Dos');
    console.log('tres');
}

const numeros = [1,2,3,4,5];
numeros.forEach((n,index) => {
    console.log(`num:${n} posicion:${index}`);
});

// IMPORTANTE
// function perro() {
//     console.log(this);
// }
// perro();

const perro = {
    nombre: 'Juan',
    ladrar () {
        console.log(this.nombre); //Arrow saltan el contexto y reconocen el objeto padre ej: windows
    }

    //MALA PRACTICA: Es usar arrow fuction como metodos
    // ladrar: ()=>{
    //     console.log(this.nombre); //Arrow saltan el contexto y reconocen el objeto padre ej: windows
    // }                             //Pero no podriamos acceder al nombre, daria undefined
}

perro.ladrar();