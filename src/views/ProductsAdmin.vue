<script setup>
import { ref } from 'vue';
import { getProducts } from '../controller/ProductController';
import NavBar from '../components/common/NavBar.vue';
import Products from '../components/common/product/Products.vue';
import Tops from '../components/common/product/Tops.vue'

const products = ref([
    {
        id: 1,
        title: "gel",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Liminia",
        price: "1200000"
    },
    {
        id: 2,
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
        price: "1000000"
    },
    {
        id: 3,
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
        price: "1000000"
    },
    {
        id: 4,
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
        price: "1000000"
    }
])

const tops = ref([
    {
        
        title: "gel",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Liminia",
        
    },
    {
        
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
       
    },
    {
        
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
        
    },
    {
        
        title: "Shampoo",
        image: "https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image?fm=webp&w=548",
        brand: "Savital",
        
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
    <NavBar/>   
    
    <div class="a">
        <h1>Productos</h1>
    </div>
    
    <Products :products="products" />
    <Tops :tops="tops"/>
   
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
<style scoped>
.a {
    color: var(--gray-100, #040404);
    font-family: Nunito;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>

