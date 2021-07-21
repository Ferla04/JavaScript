//-----------------------[ Parametro REST/ Operador Spread]--------------------------------------//

//PARAMETRO REST: se escribe con tres puntos antes del parametro, esto significa que los 
//parametros pueden ser mas, o la cantidad de parametros es incierta.
//EL REST TIENE QUE IR AL FINAL

function sumar(a,b,...c){ 
    //Aqui no sabemos cuantos numeros se van a sumar, entonces se colocar
    //el REST para que pueda variar la cantidad de parametros.
    let resultado = a +b; // Los unicos parametros fijos

    c.forEach(function(n){//Aqui la c se cuenta como si fuera un array entonces toca recorrerlo(ForEach)
        resultado += n    //para poder sumarlo al resultado.
    });

    return resultado;
};

console.log(sumar(1,2));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,6,6,6));

//OPERADOR SPREAD

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

/*------------------------------------------------------------------------------------*/
console.log('Aqui solo mete el primer y segundo array en el array principal')
let arr3 = [arr1,arr2];
console.log(arr3);

/*------------------------------------------------------------------------------------*/
console.log('Aqui une el primer y segundo array');
let arr4 = [...arr1,...arr2];
console.log(arr4);