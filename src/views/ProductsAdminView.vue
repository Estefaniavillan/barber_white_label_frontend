<script setup>
import NavBarAdmin from "../components/admin/header/NavBarAdmin.vue";
import HeaderAdmin from "../components/admin/header/HeaderAdmin.vue";
import getProducts from "../controllers/product/GetProductController.js"
import deleteProduct from "../controllers/product/DeleteProductController.js"
import {onMounted, ref} from "vue";
import ElementTable from "../components/admin/ElementTable.vue";

const products = ref([]);
const headers = [
    {text: "ID", value: "reference"},
    {text: "Nombre", value: "name"},
    {text: "Categoría", value: "category"},
    {text: "Marca", value: "brand"},
    {text: "Precio", value: "price"},
    {text: "Stock", value: "quantity"},
    {text: "Estado", value: "status"},
    {text: "Editar", value: "edit"},
    {text: "Eliminar", value: "delete"},
];
onMounted(async () => {
    products.value = await getProducts()
})

async function handleDelete(reference) {
    await deleteProduct(reference)
    products.value = await getProducts()
}
</script>

<template>
    <div class="contenedor_productos">
        <NavBarAdmin class="nav"/>
        <div class="container-body">
            <HeaderAdmin class="header"/>
            <ElementTable :headers="headers" :items="products" @on-delete="handleDelete"/>
        </div>

    </div>
</template>

<style scoped>
.contenedor_productos {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    background-color: #101010;

}

.container-body {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.header {
    flex-wrap: wrap;
}

.nav {
    flex-wrap: wrap;
    top: 0;
    left: 0;

}

</style>