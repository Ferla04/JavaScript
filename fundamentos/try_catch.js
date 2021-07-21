//Es una funcionalidad para el MANEJO DE ERRORES:

//-----------------------------------[ TryCatch ]-----------------------------------//

try {
    console.log('TRY: se agrega en el código a evaluar');
    noExiste; // -->Aqui detecta un error y en las siguientes linea no se realiza los codigos
    // y se dirije al catch.
    //el error dectecta (es que no declaramos bien la variable);
    console.log('Segundo mensaje del try');//-
} catch (error) {
    console.log('CATCH: captura cualquier error surgido o lanzado en el try');
    console.log(error);// --> Aca se imprime error que sucedio y donde sucedio
}finally{// --> OPCIONAL
    console.log('El bloque finally se ejecutará siempre al final de un bloque try-catch');
}


try {
    let numero = 'x';

    if(isNaN(numero)){
        throw new Error('El caracter introducido no es un Número')
    //En la linea anterior dice se lanza(throw) el nuevo error, que despues se guardará en el
    //catch error
    }
} catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);
    //se imprime  = se produjo el siguiente error: el caracter introducido no es Número
}