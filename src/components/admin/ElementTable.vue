<script setup>
import CustomTable from 'vue3-easy-data-table';
import SearchField from "./SearchField.vue";
import {ref} from "vue";

defineProps(["headers", "items"])
const searchText = ref("");

function buildState(state) {
    if (state) {
        return "Activo"
    } else {
        return "Inactivo"
    }
}
</script>

<template>
    <section>
        <article class="header">
            <h2>Tabla de elementos</h2>
            <SearchField v-model="searchText"/>
        </article>
        <article>
            <CustomTable :headers="headers" :items="items" table-class-name="customize-table"
                         header-text-direction="center">
                <template #item-status="item">
                    <div class="container-state">
                        <div class="state" :class="{ 'active-state': item.status, 'inactive-state': !item.status }">
                            {{ buildState(item.status) }}
                        </div>
                    </div>
                </template>
            </CustomTable>
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

.header {
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

.customize-table {
    /* General */
    --easy-table-border: none;
    --easy-table-row-border: none;
    /* Header */
    --easy-table-header-background-color: #262727;
    --easy-table-header-font-color: white;
    --easy-table-header-item-padding: 1.5rem 1rem;
    /* Items */
    --easy-table-body-row-background-color: #262727;
    --easy-table-body-row-font-color: white;
    /* Footer */
    --easy-table-footer-background-color: #262727;
    --easy-table-footer-font-color: white;
    --easy-table-footer-height: 4rem;
}

.container-state {
    display: flex;
    justify-content: center;
}

.state {
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    color: white;
    padding: 0.2rem 0.4rem;
    width: 5rem;
    font-family: 'Maven Pro', sans-serif;
}

.active-state {
    background-color: #4B8A61;
}

.inactive-state {
    background-color: #942828;
}
</style>