//----------------------------[ Programacion Orientada a Objetos ]---------------------------------//
/*
El POO es un paradigma de Programacion(Metodo para crear sistemas)
Consiste en abtraer los elementos importante que conforman objetos(cosas) del mundo real en codigo.
Esos objetos suelen comunicarse entre si para crear códigos mas robustos pero a la vez organizados y 
simples.

Ejemplo: El televisor podria ser un objeto que se puede comunicar con otro objeto como un 
control remeto y si se comuncan entre si evitan que te levantes.
*/

//PARTES DE LA POO

//Clase (Plantilla para crear Objetos) aqui se coloca,metodos,propiedades
class SonyPlaystation {
    constructor(skin){
        this.nombreSkin = skin;
    }

    encender(){}
}

//Instancia de objetos = es crear un objeto a partir de una clase
ps1 = new SonyPlaystation();
ps2 = new SonyPlaystation();

//Metodo (funciones del objeto)
ps1.encender();
ps2.encender();

//Propiedades (variables del objeto)
ps1.nombreSkin = 'Spiderman';
ps1.nombreSkin = 'Thor';


//Ejercicio
/*
ABSTRACCION: Es eliminar los detalles innecesarios para solo enfocarnos en los aspectos que son necesarios para el contexto o sistea que estamos desarrollando, ejemplo con el libros, las propiedades que necesitamos abstraer son titulo, el autor y el precio PERO no es necesario saber que tipo de caratula es. DETALES NECESARIO

ENCAPSULACION: Es ocultar los detalles que nos son relevantes para el exterior.
Agrupar datos(propiedades) y metodos que actuan sobre esas propiedades de manera que el acceso a esos
datos esta restringido desde fuera del paquete.

HERENCIA: Por medio de la herencia una clase 'hija' hereda una clase 'padre' sus metodos y atributos.

POLIMORFISMO: Se refiere a la capacidad de realixar una misma accion en diferenres formas.
Ejemplo: Una clase puede sobre escribir un metodo de una clase de ña qie hereda para emplear la misma
funcionalidad pero con alguna Variante.
*/

//encapsular
const _private = new WeakMap();

class Book {
    /*
    constructor(titulo,autor,precio){
        this._title = titulo;  //THIS: hace refencia al nuevo objeto creado en 
        this._author = autor;  // este caso es book1 y book 2, al momento de imprimirlo
        this._price = precio;  // recorre para tener el precio
    }                         // book1.title = this.title     el this es como una variable
                              // book2.title = this.title     para cambiar los distintos objetos
    */
    
    //SI NO QUEREMOS QUE MODIFIQUEN LAS PROPIEDADES TOCA ENCAPSULARLAS(propiedades privadas)
    constructor(titulo,autor,precio){
        const properties = {
            _title: titulo, 
            _author: autor, 
            _price: precio,  
        }

        _private.set(this, {properties});
    }

    //Obtener la informacion de las propiedades
    get title() {
        return _private.get(this).properties['_title'];
    }

    //setea/Cambiar/modifica las propiedades si uno quiere
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }

    get autor() {
        return _private.get(this).properties['_author'];
    }

    //setea/Cambiar/modifica las propiedades si uno quiere
    set autor(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    get price() {
        return _private.get(this).properties['_price'];
    }

    //setea/Cambiar/modifica las propiedades si uno quiere
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }

    getAllData(){
        console.log(`Titulo: ${this.title}, Autor: ${this.autor}, Precio: ${this.price} `)
    }

}  

//Herencia
class comic extends Book{
    constructor(titulo,autor,precio,ilustrators){
        super(titulo,autor,precio);//AQUI book le heredo a comic las propiedades
        this.ilustrators = ilustrators;
    }

    addIlustrator(newIlustrator = []){
        this.ilustrators.push(newIlustrator);
    }

    //Polimorfismo
    getAllData(){
        super.getAllData();
        console.log(`Iustradores ${this.ilustrators}`);
    }
}

class shoppingCart {
    constructor(){
        this.products = [];
    }

    addProduct(monto, price){
        this.products.push(...Array(monto).fill(price));
    }

    showProduct(){
        console.log(this.products);
    }

    calTotal(){
        return this.products
                            .map( price => price)
                            .reduce( (ac, price) => ac + price, 0);
    }

    printTicket(){
        console.log(`Total a pagar ${this.calTotal()}`)
    }
}

//Instancia de Book
const book1 = new Book('1894','G.O',350);
const book2 = new Book('Frankenstein','Mary',200);
const comic1 = new comic('hellow', 'cristian', 50, ['B.B']);
//Agregar otro ilistrador
comic1.addIlustrator('J.H');

console.log(book1.title);  //_title : propiedades privadas
book1.title = 'Hola Que onda';
book1.getAllData();
book2.getAllData();
comic1.getAllData();

console.log(comic1);
console.log(comic1.title);
console.log(comic1.autor);
console.log(comic1.price);

const cart = new shoppingCart();

cart.addProduct(2, comic1.price);
cart.addProduct(3, book1.price);
cart.showProduct();
cart.printTicket();

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

/*------------------------------------------------------------------------------------*/
console.log('Aqui solo mete el primer y segundo array en el array principal')
let arr3 = [arr1,arr2];
console.log(arr3);

console.log('Aqui une el primer y segundo array');
let arr4 = [...arr1,...arr2];
console.log(arr4);