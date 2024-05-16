/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '0px';
MAIN.style.paddingBottom = '0px';
MAIN.classList.add('container');
// Se establece el título de la página web.
// document.querySelector('title').textContent = 'CoffeeShop - Store';
// Constante para establecer el elemento del título principal.
// const MAIN_TITLE = document.getElementById('mainTitle');
// MAIN_TITLE.classList.add('text-center', 'py-3');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
            <br>
            <!-- Contenido de menú del documento-->
        <nav class="navbar navbar-expand-lg navbar-dark static-top" id="fondo">
            <div class="container">
                <!-- Se llama a la imagen -->
                <a class="navbar-brand" href="../public/index.html">
                    <img src="../../resources/imgs/logo-no-background.png" alt="..." height="36">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Menú -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../public/index.html" id="inicio">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/balones.html">BALONES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/guantes.html">GUANTES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/botellas.html">BOTELLAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/calzado.html">CALZADO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/info.html">¿QUIÉNES SOMOS?</a>
                        </li>
                        <li class="nav-item">
                        <div class="navbar-nav ms-auto">
                        <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i> Carrito</a>
                        <a class="nav-link" href="#" onclick="logOut2()"><i class="bi bi-box-arrow-left"></i> Cerrar sesión</a>
                    </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            `);
        } else {
            location.href = 'index.html';
        }
    } else {
        sweetAlert(3, DATA.error, false, 'index.html');

    }
}