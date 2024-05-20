// Elementos del DOM
const perfilForm = document.getElementById('perfilForm');
const nombreEmpleado = document.getElementById('nombreEmpleado');
const apellidoEmpleado = document.getElementById('apellidoEmpleado');
const telefonoEmpleado = document.getElementById('telefonoEmpleado');
const correoEmpleado = document.getElementById('correoEmpleado');

// Modal y formulario para cambiar contraseña
const PASSWORD_MODAL = new bootstrap.Modal('#passwordModal');
const PASSWORD_FORM = document.getElementById('passwordForm');

// URL de la API del usuario 
const USER_API = 'services/admin/empleados.php'; 

// Función para obtener datos del perfil del usuario
const fetchData = async (url, action, formData = null) => {
    const options = {
        method: formData ? 'POST' : 'GET',
        body: formData ? formData : null
    };
    const response = await fetch(`${url}?action=${action}`, options);
    const data = await response.json();
    return data;
};

// Función para cargar la plantilla del sitio (cabecera y pie de página)
const loadTemplate = () => {
    // Implementa la lógica para cargar la cabecera y pie de página si es necesario
};

document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento
    loadTemplate();

    // Se establece el título del contenido principal
    document.title = 'Editar perfil';

    // Petición para obtener los datos del usuario que ha iniciado sesión
    const DATA = await fetchData(USER_API, 'readProfile');

    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción
    if (DATA.status) {
        // Se inicializan los campos del formulario con los datos del usuario que ha iniciado sesión
        const ROW = DATA.dataset;
        nombreEmpleado.value = ROW.nombre_empleado;
        apellidoEmpleado.value = ROW.apellido_empleado;
        telefonoEmpleado.value = ROW.telefono_empleado;
        correoEmpleado.value = ROW.correo_empleado;
    } else {
        sweetAlert(2, DATA.error, null);
    }
});

// Método del evento para cuando se envía el formulario de editar perfil
perfilForm.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario
    event.preventDefault();

    // Constante tipo objeto con los datos del formulario
    const FORM = new FormData(perfilForm);

    // Petición para actualizar los datos personales del usuario
    const DATA = await fetchData(USER_API, 'editProfile', FORM);

    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción
    if (DATA.status) {
        sweetAlert(1, DATA.message, true);
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

// Método del evento para cuando se envía el formulario de cambiar contraseña
PASSWORD_FORM.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario
    event.preventDefault();

    // Constante tipo objeto con los datos del formulario
    const FORM = new FormData(PASSWORD_FORM);

    // Petición para actualizar la contraseña
    const DATA = await fetchData(USER_API, 'changePassword', FORM);

    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción
    if (DATA.status) {
        // Se cierra la caja de diálogo
        PASSWORD_MODAL.hide();

        // Se muestra un mensaje de éxito
        sweetAlert(1, DATA.message, true);
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

// Función para preparar el formulario al momento de cambiar la contraseña
const openPassword = () => {
    // Se abre la caja de diálogo que contiene el formulario
    PASSWORD_MODAL.show();

    // Se restauran los elementos del formulario
    PASSWORD_FORM.reset();
};
