<!-- <script setup>
import ProductsTable from './ProductsTable.vue';


</script>

<template>
    <section>
        <ProductsTable :headers="headers" :items="products" class="table" :rows-items="[5, 10, 15]" :rows-per-page="10">
            <template #item-name="item">
                <div>
                    📖 {{ item.name }}
                </div>
            </template>
            <template #item-category="item">
                <div>
                    📖 {{ item.category }}
                </div>
            </template>
            <template #item-brand="item">
                <div>
                    📖 {{ item.brand }}
                </div>
            </template>
            <template #itemprice="item">
                <div>
                    {{ currencyFormatter({ currency: "USD", value: item.price }) }}
                </div>
            </template>
            <template #item-stock="item">
                <div class="state" :class="{ disponible: item.stock > 0, agotado: item.stock === 0 }">
                    {{ stockValidation(item.stock) }}
                </div>
            </template>

            <template #item-editar="item">
                <ModalUpdateBook :book="item" @on-update="handleClickUpdate"/>
            </template>
            <template #item-eliminar="item">
                <ModalDeleteBook @on-delete="$event => $emit('onDelete', item.codigo)" />
            </template>
        </ProductsTable>
    </section>
</template>

<style scoped>
section {
    margin-top: 1rem;
    height: 100%;
    border-radius: 0.5rem;
    background-color: rgb(0, 0, 0);
    color: #5B656F;
}

.state {
    border-radius: 1rem;
    padding: 0 0.5rem 0 0.5rem;
}

.disponible {
    background-color: #C1D8C9;
    color: #4B8A61;
    text-align: center;
}

.agotado {
    background-color: #FFA58A;
    color: #BF3D16;
    text-align: center;
}

.edit-icon {
    width: 16px;
}

.state {
    border-radius: 0.5;
}

.delete-icon {
    width: 14px;
}
</style> -->