<script scope>
function mostrarFormularioAgregar() {
            // Lógica para mostrar el formulario de agregar
            // Puedes inicializar los campos del formulario si es necesario
        }

        function mostrarFormularioEditar(idServicio) {
            // Lógica para mostrar el formulario de editar con los datos cargados
        }

        function guardarServicio() {
            // Lógica para guardar o actualizar el servicio
            // Puedes utilizar AJAX o Fetch para comunicarte con un servidor
            // y enviar o actualizar la información del servicio
        }

        function mostrarPopupEliminar(idServicio) {
            // Lógica para mostrar el popup de confirmación para eliminar
        }

        function eliminarServicio(idServicio) {
            // Lógica para eliminar el servicio
        }

        function cerrarFormulario() {
            // Lógica para cerrar el formulario
        }
</script>

<template>
  <h1>Servicios</h1>

  <button onclick="mostrarFormularioAgregar()">Agregar Servicio</button>

  <ul id="listaServicios">
  </ul>

  <div id="formulario" style="display: none;">
      <h2 id="formularioTitulo">Agregar Servicio</h2>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre">

      <label for="precio">Precio:</label>
      <input type="number" id="precio">

      <label for="categoria">Categoría:</label>
      <select id="categoria">
          <option value="Barbería">Barbería</option>
          <option value="Mascarilla">Mascarilla</option>
          <option value="Otros">Otros</option>
      </select>

      <label for="activo">Activo:</label>
      <input type="checkbox" id="activo">

      <label for="duracion">Duración:</label>
      <input type="text" id="duracion">


      <button onclick="guardarServicio()">Guardar Servicio</button>
      <button onclick="cerrarFormulario()">Cancelar</button>
  </div>
  </template>
  
  <style scoped>
  </style>