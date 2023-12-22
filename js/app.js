import { usuarios } from "./db.js";

//variables
const users = document.querySelector("#users");
const entrada = document.querySelector("#entrada");
const alerta = document.querySelector("#alerta");

//eventos
(() => {
    document.addEventListener('DOMContentLoaded', filtrarDatos);
    entrada.addEventListener("input", filtrarDatos);
})()


//funciones
function mostrarDatos() {
    usuarios.forEach(item => {
        const { id, nombre, correo } = item;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
        `
        users.appendChild(row)
    });
}

function filtrarDatos(e) {

    limpiarDatos();

    let entradaInput = (e.target.value)?.toLowerCase() || '';
    const usersFiltrados = usuarios.filter((item) => {
        return item.nombre.toLowerCase().includes(entradaInput);
    })
    usersFiltrados.forEach(item => {
        const { id, nombre, correo } = item;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
        `
        users.appendChild(row)
    });

    if (!users.firstChild) {
        const mensaje = document.createElement("h4");
        mensaje.textContent = "NO HAY USUARIOS CON ESOS FILTROS"
        mensaje.classList.add("text-center", "text-danger", "m-0", "border", "border-danger");
        if (!alerta.firstChild) {
            alerta.appendChild(mensaje)
        }
    } else {
        alerta.innerHTML = ''
    }

}

function limpiarDatos() {
    while (users.firstChild) {
        users.removeChild(users.firstChild);
    }
}