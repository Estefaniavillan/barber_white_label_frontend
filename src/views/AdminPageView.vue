<script scope>
import ProductsAdmi from "./ProductsAdminView.vue";
import ServicesAdmi from "../components/home/ServicesHome.vue";
import CreactionServices from "./CreationServicesView.vue";
</script>

<template>
  <div>
    <h1>Página de Administración</h1>
    <ProductsAdmi />
    <ServicesAdmi />
    <CreactionServices />
  </div>
  <div class="buscador">
    <input type="text" placeholder="Buscar Producto" />
    <button type="button" class="btn btn-light">
      <img src="" alt="Buscar" />
    </button>
  </div>
</template>
<style scoped>
.buscador {
  background-color: #f5f7f9;
  border-radius: 0.5rem;
  padding: 0;
}

input {
  width: 40rem;
  border: none;
  outline: none;
  background-color: #f5f7f9;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
