const nav = document.querySelector("nav")

nav.innerHTML = `<div class="container">
<!-- Logo de la tienda -->
<a class="navbar-brand" href="../admin/inicio.html">
    <img src="../../resources/imgs/logo-no-background.png" alt="..." height="36">
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<!-- Menú de navegacion -->
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="../admin/inicio.html">INICIO</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/productos.html">PRODUCTOS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/categorias.html">CATEGORÍAS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/marcas.html">MARCAS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/empleados.html" id="empleados">EMPLEADOS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/clientes.html">CLIENTES</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../admin/pedidos.html">PEDIDOS</a>
        </li>
    </ul>
</div>
</div>`