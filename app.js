let amigos = [];

//Función creada para editar el texto en pantalla.
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
     //Captura el valor de campo de entrada.
    let nombres = document.getElementById("amigo").value; 
    //Valida la entrada.
    if (nombres === "") { 
        alert("Por favor, inserte un nombre.");
    //Verifica si ya existe el nombre.
    } else if (amigos.includes(nombres)) {
        asignarTextoElemento('h2', `"${nombres}" ya existe en la lista, ingrese otro nombre.`);
        } else {
        //Agregar el nombre a la lista.
        amigos.push(nombres);
        asignarTextoElemento('h2','Digite el nombre de sus amigos:');
        //Actualiza el array de amigos.
        alert(`Amigo '${nombres}' añadido a la lista.`);
        // Limpia el campo de entrada.
        document.getElementById("amigo").value = "";
    }
}


