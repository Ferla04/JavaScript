//-----------------------------------[ Break-Continue ]-----------------------------------//

let numeros = [1,2,3,4,5,6,7,8,9,0];


//Break: Es para teminar el ciclo no importando donde este
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break; //Aqui se va a imprimir hasta la posicion 4 y despues de este se rompe/finaliza en ciclo
    }
    console.log(numeros[i]);
}

console.log('--------------------------------------------------------');

//Continue: sigue el ciclo y puede saltar iteraciones
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue;// aca salta la iteracion de la posicion 5, o sea se va imprimir de la posicion 0 
    }            // hasta la 9 pero no imprime el numero en la pocision 5(el numero 6);
    console.log(numeros[i]);
}