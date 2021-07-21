//-----------------------------------[ Objetos ]-----------------------------------//

/* dentro de un objeto a las variables se le van a llamar atributos/propiedades
 y a las funciones se les llama métodos */


const objeto ={
    //Tipo de datos primitivos
    keyPorReferencia: 'valor',
    'string': 'valor',
    123: 'number',
    Booleano: true/false,

    //Tipo de datos Compuestos
    objeto:{},
    array:[],
    crearMetodo: function(){},
}


const tipado = {
    nombre: "Equiio Tipado",
    "integrantes": 3,
    nombIntegrantes: ["Juan", "Fernanda", "Diana"],
    pasatiempos: ["Programar", "Ver Attack on Titan", "Hacer ejercicios"],
    seRinden: false,
    caracteristicas: {
    1: "Trabajar en quipo",
    2: "Chismocear",
    3: "Aconcejar"
    },

    saludar: function () { //METODO
    console.log(`Hola perrito somos el ${this.nombre} :)
Conformado por: ${this["integrantes"]} integrantes
${this.nombIntegrantes[0]}, ${this.nombIntegrantes[1]} y ${this.nombIntegrantes[2]},
Nos gusta ${this.caracteristicas[1]}, ${this.caracteristicas[2]} y ${this.caracteristicas[3]}`)
    },

}

tipado.saludar();

//Metodos del Objeto:

    console.log(Object.keys(tipado)); // Esta buscando las llaves del objeto
    console.log(Object.values(tipado)); //Esta buscando los valores de la llaves
    console.log(tipado.hasOwnProperty("nombre"));
    // aqui se pregunta si pertetenece la propiedad en e objeto, esto daria verdadero porque la llave 
    //nombre si pertenece al objeto de tipado
    console.log(tipado.hasOwnProperty("nacimiento"));
    // aqui se pregunta si pertetenece la propiedad en ek objeto, esto daria falso porque la llave 
    //nacimiento NO pertenece al objeto de tipado//

//Crear UN nuevo Objeto

const nuevoObjeto = new Object('hola');
console.log(nuevoObjeto);
const nuevoObjetoNum = new Number(12345);
console.log(nuevoObjetoNum);