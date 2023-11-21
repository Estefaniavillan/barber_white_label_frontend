<script>

function mostrarPopupEliminar(idProducto) {
    // Eliminar el producto de la lista de productos
    const index = productos.findIndex((producto) => producto.id === idProducto);
    productos.splice(index, 1);

    // Actualizar la base de datos
    // ...

    // Mostrar el mensaje de éxito
    document.querySelector(".alert-success").style.display = "block";
}
function mostrarPopupEliminar(idProducto) {
    if (confirm("Estás seguro gonorrea qué quiere eliminarlo gonorrea, gonorrea!?")) {
        eliminarProducto(idProducto);
    }
}

</script>

<template>
    <h1>Productos</h1>

    <button class="btn-eliminar" @click="eliminarProducto(producto.id)">
        <img src="icono-eliminar.png" alt="Eliminar" />
    </button>
    <button onclick="cerrarFormulario()">Cancelar</button>
</template>