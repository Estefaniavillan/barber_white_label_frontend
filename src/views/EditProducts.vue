<script>
function mostrarFormularioEditar(idProducto) {
  // Obtener los datos del producto
  const producto = productos.find((producto) => producto.id === idProducto);

  // Cargar los datos en el formulario
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("precio").value = producto.precio;

  // Cambiar el título del formulario
  document.getElementById("formularioTitulo").innerHTML = "Editar Producto";

  // Cambiar el texto del botón de guardar
  document.getElementById("guardarProducto").innerHTML = "Actualizar";

  // Mostrar el formulario
  document.getElementById("formulario").style.display = "block";
}
function guardarProducto() {
  // Obtener los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  // Actualizar los datos del producto
  const producto = productos.find((producto) => producto.id === idProducto);
  producto.nombre = nombre;
  producto.precio = precio;

  // Actualizar el producto en la base de datos
  // ...

  // Mostrar el mensaje de éxito
  document.querySelector(".alert-success").style.display = "block";
}
</script>

<template>
  <h1>Productos</h1>

  <ul id="listaProductos"></ul>
  <div id="formulario" style="display: none">
    <h2 id="formularioTitulo">Editar Producto</h2>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" />

    <label for="precio">Precio:</label>
    <input type="number" id="precio" />
    <button class="btn-editar" @click="mostrarFormularioEditar(producto.id)">
      <img src="icono-lapiz.png" alt="Editar" />
    </button>
    <button onclick="guardarProducto()">Guardar Producto</button>
    <button onclick="cerrarFormulario()">Cancelar</button>

  </div>
</template>