// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    // Validación: Si el campo está vacío, mostramos un mensaje de error
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Si el nombre es válido, lo agregamos al array
        amigos.push(nombre);

        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";

        // Actualizamos la lista de amigos en la página
        actualizarLista();
    }
}

// Función para recorrer el array de amigos y agregar cada uno como un <li>
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el array amigos y agregar un <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        // Crear el elemento <li>
        let li = document.createElement("li");

        // Asignar el contenido del <li> al nombre del amigo
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agrega al menos un amigo.");
        return;
    }

    // Generar un índice aleatorio entre 0 y amigos.length - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}