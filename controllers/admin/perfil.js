// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario de perfil por su ID
    const perfilForm = document.getElementById('perfilForm');

    // Agrega un evento de escucha para el envío del formulario
    perfilForm.addEventListener('submit', function (event) {
        // Evita el comportamiento predeterminado de envío del formulario
        event.preventDefault();

        // Captura los valores del formulario
        const nombre = document.getElementById('nombreEmpleado').value;
        const apellido = document.getElementById('apellidoEmpleado').value;
        const telefono = document.getElementById('telefonoEmpleado').value;
        const correo = document.getElementById('correoEmpleado').value;

        // Objeto con los datos a enviar al servidor
        const datosPerfil = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo
        }
      
        .catch(error => {
            // Maneja el error
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el perfil');
        });
    });
});
