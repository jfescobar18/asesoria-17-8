// tener todos los numeros
// sumar
// dividir entre el numero de sumados

// las funciones se declaran primero, despues se usan

let numeros = [];
let sumatoria = 0;
let promedio = 0;

function obtenerNumeros() {
    // funcion push agrega un elemento al final de arreglo
    let numero1 = prompt("Ingres el numero 1");
    let numero2 = prompt("Ingres el numero 2");
    let numero3 = prompt("Ingres el numero 3");
    let numero4 = prompt("Ingres el numero 4");
    let numero5 = prompt("Ingres el numero 5");

    numeros.push(numero1);
    numeros.push(numero2);
    numeros.push(numero3);
    numeros.push(numero4);
    numeros.push(numero5);
}

function sumarNumeros() {
    numeros.forEach((numero) => {
        sumatoria = sumatoria + numero;
        // sumatoria += numero;
    })
}

function dividirYObtenerResultado() {
    promedio = sumatoria / 5;
    console.console.log(promedio);
}

function sacarPromedio() {
    obtenerNumeros();
    sumarNumeros();
    dividirYObtenerResultado();
}

sacarPromedio();
