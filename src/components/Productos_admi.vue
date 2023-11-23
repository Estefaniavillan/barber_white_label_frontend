<script setup>
import NavBarAdmin from './admin/header/NavBarAdmin.vue';
import HeaderAdmin from './admin/header/HeaderAdmin.vue';
</script>

<template>
    <div class="contenedor_productos">
        <NavBarAdmin class="nav" />
        <HeaderAdmin class="header" />

    </div>
</template>

<style scoped>
.contenedor_productos {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    background-color: #101010;

}

.header {
    flex-wrap: wrap;
}

.nav {
    flex-wrap: wrap;
    top: 0;
    left: 0;

}

.libros {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 70%;
    flex-grow: 1;
}

.top {
    display: flex;
    flex: 0 0 25%;
}
</style>