document.addEventListener("DOMContentLoaded", () => {
    // obtenemos la lista de usuarios
    fetch("php/login_listar.php").
    then( respuesta => respuesta.json()).
    then( usuarios => {

        //llamamos los elementos
        const tabla = document.getElementById('tablaUsuarios');

        //agregamos la info 
        for( let i = 0; i < usuarios.length; i++ ){

            //damos la base
            const filaUsuario = document.createElement("tr");

            //agregamos la info
            filaUsuario.innerHTML =
                "<td>"+ usuarios[i].id +"</td>"+
                "<td>"+ usuarios[i].usuario +"</td>"+
                "<td>"+ usuarios[i].contrasena +"</td>"+
                "<td>"+ 
                "<button onclick='eliminarUsuario("+ usuarios[i].id +")'>Eliminar</button>"+
                "<button onclick='editarUsuario("+ usuarios[i].id +")'>Editar</button>"+
                "</td>";

            //agregamos a la fila tabla
            tabla.appendChild(filaUsuario);
        }

    });
}); 

function eliminarUsuario(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        // Mandamos el ID al archivo PHP encargado de borrar
        fetch("php/eliminar_usuario.php?id=" + id, { method: "GET" })
        .then(res => res.text())
        .then(datos => {
            alert(datos);
            location.reload(); // Recarga la página para ver los cambios
        });
    }
}


function editarUsuario(id) {
    const nuevoNombre = prompt("Introduce el nuevo nombre de usuario:");
    if (nuevoNombre) {
        // Mandamos el ID y el nuevo nombre al PHP encargado de actualizar
        fetch(`php/modificar_usuario.php?id=${id}&usuario=${encodeURIComponent(nuevoNombre)}`, { method: "GET" })
        .then(res => res.text())
        .then(datos => {
            alert(datos);
            location.reload(); // Recarga la página para ver los cambios
        });
    }
}