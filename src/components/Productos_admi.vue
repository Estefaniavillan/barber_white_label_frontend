<script setup>
import NavBarAdmin from "./admin/header/NavBarAdmin.vue";
import HeaderAdmin from "./admin/header/HeaderAdmin.vue";
import ProductsTable from "./admin/header/ProductsTable.vue";
import getProducts from "../controllers/ProductController.js"
import { onMounted, ref } from "vue";

const products = ref([]);
onMounted(async () => {
    products.value = await getProducts()
})

</script>

<template>
    <div class="contenedor_productos">
        <NavBarAdmin class="nav" />
        <div class="container-body">
            <HeaderAdmin class="header" />
            <ProductsTable class="table" :items="products" />
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