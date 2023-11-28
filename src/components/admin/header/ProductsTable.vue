<script setup>
import ProductsTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const props = defineProps(["items"])

const headers = [
  { text: "Nombre", value: "name" },
  { text: "Categoría", value: "category" },
  { text: "Marca", value: "brand" },
  { text: "Precio", value: "price" },
  { text: "Stock", value: "stock" },
  { text: "Estado", value: "state" },
  { text: "Editar", value: "edit" },
  { text: "Eliminar", value: "delete" },
];

</script>
<template>
  <section>
    <ProductsTable :headers="headers" :items="items" theme-color="#262727" table-class-name="customize-table"
      header-text-direction="center" body-text-direction="center">
      <template #item-edit="item">
      <img src="../../../assets/img/Admin_product/edit.svg">
      </template>
      <template #item-delete="item">
      <img src="../../../assets/img/Admin_product/delete.svg">
      </template>
    </ProductsTable>
  </section>
</template>

<style scoped>
section {
  margin: 1.5rem 1.5rem 1.5rem 0;
  padding: 1rem 2rem;
  background-color: #262727;
  border-radius: 0.5rem;
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
</style>