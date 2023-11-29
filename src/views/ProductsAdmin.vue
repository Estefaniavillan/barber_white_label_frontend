<script setup>
import { ref } from 'vue';
import { getProducts } from '../controllers/ProductController';

const products = ref([
    {
        id: 1,
        name: "gel",
        price: "1200000"
    },
    {

        id: 2,
        name: "shampoo",
        price: "100000",

    }
])



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
async function showProducts() {
    const result = await getProducts()
    console.log(result)
    products.value = result
}


</script>
<template>
    <h1>PRODUCTOS</h1>

    <ul id="listaProductos">
    </ul>
    <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    <div id="formulario" style="display: none;">
        <h2 id="formularioTitulo">Agregar Producto</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre">

        <label for="precio">Precio:</label>
        <input type="number" id="precio">

        <button onclick="guardarProducto()">Guardar Producto</button>
        <button onclick="cerrarFormulario()">Cancelar</button>
    </div>
    <button onclick="mostrarFormularioAgregar()">Agregar Producto</button>
</template>

