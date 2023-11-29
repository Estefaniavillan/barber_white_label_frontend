<script scope>
import HomeView from "./views/HomeView.vue";
import ServicesAdmin from "./views/ServicesAdmin.vue";
import ProductsAdmin from "./views/productsadmin.vue";
import CreactionServices from "./views/CreationServicesView.vue";

export default {
  components: {
    ServicesAdmin,
    ProductsAdmin,
    CreactionServices,
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
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
