//-----------------------------------[ FUNCIONES ]------------------------------------------//

//ORDENAMIENTO DE CODIGO
/*
1. Importacion de modulos
2. Declaracion de variables
3. Declaracion de funciones
4. Ejecucion de codigo
*/

//Es un bloque de codigo auctocontenido independientemente al ambito global, se pueden
//ejercutar en cualquier momento, pueden recibir parametros(OPCIONAL) y retornar valores(OPCIONAL)

//FUNCION DECLARADA
    function numero(){
        console.log(1);
        console.log(2);
        console.log(3);
    }

    function devuelvenUnValor(){
        console.log(1);
        console.log(2);
        console.log(3);
        return 'la funcion retorna los numeros del 1 al 3'
    }
    //Lo que este despues del return no se va a ejecutar

    function suma(a, b){
        let suma = a + b;
        return suma;
    }


//FUNCION EXPRESADA -->BUENA PRACTICA
    const funcionExpresada = function(){
        console.log('Funcion expresada, es decir, una funcion que se la ha asignado a como valor a una variable, si invocamos esta funcion antes de su definicion dara como error que estamos colocando la llamada antes de la inicializacion')
    }

    //Funcion flecha -->BUENA PRACTICA

        let arrowFunction = (a,b) =>{
            let suma = a +b;
            console.log(suma);
        }

//----------------------------------------------------------------------------------------------//

//Invocar la funcion
/*
    numero();
    numero();
    numero();
*/
    // se pueden llamar varias veces
    let valorFuncion = devuelvenUnValor(); // aqui solo la llamariamos y daria el 123
    console.log(valorFuncion);//Pero aqui esta imprimiendo el return('la funcion retorna los numeros del 1 al 3')
    console.log(suma(3, 5));