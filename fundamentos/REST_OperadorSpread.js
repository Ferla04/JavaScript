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

//Operador Sread = Convierte a valores sueltos;




//EJERCICIOS:

const encotrarMayor = (menor = 'mayor', ...array) => {
    let contador = 0;
    for( let i in array ) {

        if(menor == 'mayor'){
            if( array[i] > array[contador] ) {
                contador = i;
            }
        }else if(menor == 'menor'){
            if( array[i] < array[contador] ) {
                contador = i;
            }
        }else{
            menor = 'mayor'
        }
    }
    return array[contador];
}


console.log(encotrarMayor('menor', 9,6,8,19,1));
//                                     |_____________ Este argumento lo toma como array.

//--------------------------------------------------------------------------------------------//

function MayorMenor(a,b,...c){
    let numeros = [a, b];
    let mayor = 0;
    let menor = numeros[0];
    
    c.forEach(n =>{
        numeros.push(n);
    });

    // for(let i = 0; i < numeros.length; i++){
    //     if(mayor < numeros[i]){
    //         mayor = numeros[i];
    //     }
    // }

    // for(let i = 0; i < numeros.length; i++){
    //     if(menor > numeros[i]){
    //         menor = numeros[i];
    //     }
    // }

    for(i in numeros){
        if(mayor < numeros[i]){
            mayor = numeros[i];
        }
        if(menor > numeros[i]){
            menor = numeros[i];
        }
    }

    console.log(`El mayor es: ${mayor} 
El menor es: ${menor}`);
}

MayorMenor(3,4,6,7,22,3,6);