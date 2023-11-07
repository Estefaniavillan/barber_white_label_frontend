<template>
  <div>
    <h2>Listado de Productos</h2>
    <!-- Agrega aquí la barra de búsqueda y filtros -->
    <div>
      <input v-model="busqueda" placeholder="Buscar por nombre">
      <select v-model="filtroCategoria">
        <option value="">Todas las categorías</option>
        <option value="Ceras">Ceras</option>
        <option value="Tratamientos capilares">Tratamientos Capilares</option>
        <option value="Cuidado de barba">Cuidado de Barba</option>
      </select>
      <input v-model.number="filtroPrecio" type="number" placeholder="Filtrar por precio">
    </div>
    <!-- Agrega aquí la tabla paginada con los datos de los productos -->
    <table>
      <!-- Encabezados de la tabla -->
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Activo-Inactivo</th>
          <th>Cantidad o Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <!-- Datos de los productos -->
      <tbody>
        <tr v-for="producto in productosFiltrados" :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>{{ producto.categoria }}</td>
          <td>{{ producto.activo ? 'Activo' : 'Inactivo' }}</td>
          <td>{{ producto.cantidad }}</td>
          <td>
            <button @click="editarProducto(producto)">Editar</button>
            <button @click="confirmarEliminar(producto)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['productos'],
  data() {
    return {
      busqueda: '',
      filtroCategoria: '',
      filtroPrecio: null,
    };
  },
  computed: {
    productosFiltrados() {
      // Filtra los productos según la búsqueda y filtros
      return this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) &&
        (this.filtroCategoria === '' || producto.categoria === this.filtroCategoria) &&
        (this.filtroPrecio === null || producto.precio <= this.filtroPrecio)
      );
    },
  },
  methods: {
    editarProducto(producto) {
      // Lógica para editar el producto
      // Puedes emitir un evento o navegar a una nueva ruta con Vue Router
      // y pasar el producto como parámetro
    },
    confirmarEliminar(producto) {
      const confirmacion = window.confirm('¿Estás seguro qué quieres eliminarlo?');
      if (confirmacion) {
        this.eliminarProducto(producto);
      }
    },
    eliminarProducto(producto) {
      // Lógica para eliminar el producto
      // Puedes emitir un evento o llamar a un método para realizar la eliminación
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del listado de productos */
</style>