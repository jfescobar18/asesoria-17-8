// Generar una instancia de los elementos del archivo html
const cuenta = document.getElementById("cuenta"); // span
const agregar = document.getElementById("agregar"); // button
const quitar = document.getElementById("quitar"); // button
const nombres = document.getElementById("nombres");
let contador = 0

// cuenta.innerText = "<b>12</b>"; inserta solo texto
// cuenta.innerHTML = "<b>12</b>"; // inserta elementos html

cuenta.addEventListener("mouseover", function () {
    alert("El mouse paso sobre el elemento cuenta");
})

function actualizarHTML() {
    cuenta.innerHTML = contador;
}

function agregarAlContador() {
    contador += 1;
}

function quitarAlContador() {
    contador -= 1;
}

agregar.addEventListener("click", function () {
    agregarAlContador();
    actualizarHTML();
});

quitar.addEventListener("click", function () {
    quitarAlContador();
    actualizarHTML();
});
 
// --------------------------------------------------------------------------------- //

const arregloNombres = ["Fran", "Andrea", "Vic", "Sofi"];

nombres.innerHTML = /*html*/ `<ul>`;

arregloNombres.forEach((nombre) => {
    nombres.innerHTML += /*html*/ `<li>${nombre}</li>`;
});

nombres.innerHTML += /*html*/ `</ul>`;
