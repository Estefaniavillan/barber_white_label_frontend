<script>
 function mostrarFormularioAgregar() {
            // Lógica para mostrar el formulario de agregar
        }

        function mostrarFormularioEditar(idProducto) {
            // Lógica para mostrar el formulario de editar con los datos cargados
        }

        function guardarProducto() {
            // Lógica para guardar o actualizar el producto
            // y enviar o actualizar la información del producto
        }

        function mostrarPopupEliminar(idProducto) {
            // Lógica para mostrar el popup de confirmación para eliminar
        }

        function eliminarProducto(idProducto) {
            // Lógica para eliminar el producto
        }

        function cerrarFormulario() {
            // Lógica para cerrar el formulario
        }
</script>
<template>
 
    <h1>Productos</h1>

  <button onclick="mostrarFormularioAgregar()">Agregar Producto</button>

   <ul id="listaProductos">
  </ul>
  <div id="formulario" style="display: none;">
        <h2 id="formularioTitulo">Agregar Producto</h2>
       <label for="nombre">Nombre:</label>
        <input type="text" id="nombre">

        <label for="precio">Precio:</label>
        <input type="number" id="precio">

        <button onclick="guardarProducto()">Guardar Producto</button>
        <button onclick="cerrarFormulario()">Cancelar</button>
    </div>

</template>



<style scoped>
</style>