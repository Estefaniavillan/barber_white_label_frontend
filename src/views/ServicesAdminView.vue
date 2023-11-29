<script setup>
import NavBarAdmin from "../components/admin/header/NavBarAdmin.vue";
import HeaderAdmin from "../components/admin/header/HeaderAdmin.vue";
import ElementTable from "../components/admin/ElementTable.vue";
import {onMounted, ref} from "vue";
import getServices from "../controllers/ServiceController.js";

const services = ref([]);

const headers = [
    {text: "Nombre", value: "name"},
    {text: "Categoría", value: "category"},
    {text: "Marca", value: "brand"},
    {text: "Precio", value: "price"},
    {text: "Stock", value: "stock"},
    {text: "Estado", value: "state"},
    {text: "Editar", value: "edit"},
    {text: "Eliminar", value: "delete"},
];
onMounted(async () => {
    services.value = await getServices()
})
</script>

<template>
    <section class="container">
        <article class="nav-container">
            <NavBarAdmin/>
        </article>
        <article class="body-container">
            <HeaderAdmin/>
            <ElementTable :headers="headers" :items="services"/>
        </article>
    </section>
</template>

<style scoped>

.container {
    display: flex;
}

.body-container {
    flex: 1;
    padding-left: 1rem;
}

</style>