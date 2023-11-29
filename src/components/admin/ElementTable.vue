<script setup>
import CustomTable from 'vue3-easy-data-table';
import SearchField from "./SearchField.vue";
import {ref} from "vue";

defineProps(["headers", "items"])
const searchText = ref("");
console.log(searchText.value)
</script>

<template>
    <section>
        <article class="header">
            <h2>Tabla de elementos</h2>
            <SearchField v-model="searchText"/>
        </article>
        <article>
            <CustomTable :headers="headers" :items="items"/>
        </article>
    </section>
</template>

<style scoped>
section {
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    background-color: #262727;
    border-radius: 1rem;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

article {
    margin-bottom: 1.5rem;
}

article h2 {
    color: white;
}
</style>