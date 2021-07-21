//-----------------------------[ Tipos de datos Primitivos ]---------------------------------//

//String: Cadena de texto, esta se realiza con comillas dobles, simples y template de string.

    let nombre = 'Fernanda'; // --> variable de tipo string
    let apellido = 'velásquez';

//Number: Se escribe el numero pero no se coloca las comillas si no lo tomaria como string
    let numero = 3.59;
    let numero2 = '6'

    console.log(numero.toFixed(4));//--> Esta funcion sirve para colocar la cantidad de decimales que queremos del numero;
    console.log(parseInt(numero));
    console.log(parseInt(numero2));
    //Convertir un numemero decimal a entero y tambien puede convertir numeros de tipo string a numero.
    console.log(parseFloat(numero));//Convertir un numemero entero a decimal.

//Booleans:
    let verdadero = true;
    let falso = false;

    console.log(Boolean(0)); //retorna a falso
    console.log(Boolean(-7)); //retorna a verdadero
    console.log(Boolean('')); //retorna a falso
    console.log(Boolean(' ')); //retorna a verdadero
    //Se pueden buscar valores que tienen a ser falsos y verdareros buscando en internet: mdn truthy.

//-----------------------------[ Tipos de Concatenación ]---------------------------------//
//SIGNO SUMA: Esta no es muy recomendable ya que el signo suma es para operaciones
let saludo = 'Hola mi nombre es: ' + nombre + ' ' + apellido + '.';
console.log(saludo);

//TEMPLATE STRING: En esta concatenacion se usa los backticks/comillas invertidas 
//backticks = (altGr + llave de cerrado)
//La template string si permite saltos de linea;
let saludo3 = `Hola mi nombre es: ${nombre} ${apellido}.`
console.log(saludo3);