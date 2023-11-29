<script setup>
import { onMounted, ref } from 'vue';
import NavBar from '../components/common/NavBar.vue';
import CustomFooter from '../components/common/CustomFooter.vue';

</script>

<template>
    
    <NavBar/>
    <CustomFooter/>
</template>

<style scoped>
nav {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
}

nav a {
    color: #5B656F;
    text-align: center;
    padding: 1rem 2rem;
    text-decoration: none;
}

nav a:hover {
    color: #D75C37;
}

.active {
    color: #D75C37;
    font-weight: bold;
}
</style>
 