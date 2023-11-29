<script setup>
import TopsItem from './TopsItem.vue';

//Son propiedades para el componente
const props = defineProps(['tops'])
</script>

<template>
    <section class="contenedor_top">
        <div class="header_top">
            <h4>{{ title }}</h4>
            <img src="../../assets/img/icons/regresar.svg" alt="regresar">
        </div>
        <div class="tops">
            <TopsItem v-for="top in props.tops" :image="top.image" :title="top.title" :brand="top.brand" />
        </div>
    </section>
</template>


<style scoped>
.contenedor_top {
    background-color: #C1D8C9;
    display: flex;
    border-radius: 2rem;
    padding: 2.5rem 1.8rem;
    flex-direction: column;
    flex-wrap: wrap;
}

.header_top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: max-content;
    align-items: center;
}

h4 {
    font-size: 1.8rem;
    font-weight: 700;
    height: max-content;
}

img {
    width: 5rem;
    height: max-content;
}
</style>