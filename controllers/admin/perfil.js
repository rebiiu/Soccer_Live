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
        };

        // Realiza una solicitud HTTP POST para actualizar el perfil
        fetch('/ruta-de-tu-servidor-para-actualizar-perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosPerfil)
        })
        .then(response => {
            // Verifica si la solicitud fue exitosa
            if (response.ok) {
                // Notifica al usuario que el perfil se ha actualizado
                alert('Perfil actualizado exitosamente');
                // Puedes redirigir al usuario a otra página si lo deseas
                window.location.href = '/ruta-de-redireccion';
            } else {
                // Si hay un error, muestra un mensaje de error
                throw new Error('Error al actualizar el perfil');
            }
        })
        .catch(error => {
            // Maneja el error
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el perfil');
        });
    });
});
