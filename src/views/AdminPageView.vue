<script scope>
src/views/AdminPageView.vue
  import ProductAdmi from './ProductsAdmiView.vue';
  import ServicesAdmi from './ServicesAdmiView.vue';
  import CreactionServices from './CreationServicesView.vue';
  
  export default {
    components: {
    ProductAdmi,
    ServicesAdmi,
    CreactionServices,

  import ProductsAdmin from './ProductsAdmin.vue'; 
  import ServicesAdmin from './ServicesAdmin.vue';
  import CreactionServices from './CreationServices.vue';
  
  export default {
    components: {
    ProductsAdmin,
    ServicesAdmin,
    CreactionServices
>>>>>>> 979cb2ea2de517cfb9c0567892a5c4ad20b2ad67:src/views/AdminPage.vue
},
  }
  </script>
  
<template>
    <div>
      <h1>Página de Administración</h1>      
      <ProductsAdmi />
      <ServicesAdmi />
      <CreactionServices />
:src/views/AdminPageView.vue

    </div>
    <div class="buscador">
      <input type="text" placeholder="Buscar Producto">
      <button type="button" class="btn btn-light"><img src="" alt="Buscar"> </button>
:src/views/AdminPage.vue
    </div>
  </template>
  <style scoped>
  .buscador{
    background-color: #F5F7F9;
    border-radius: 0.5rem;
    padding: 0;
  }
  
  input {
    width: 40rem;
    border: none;
    outline: none;
    background-color: #F5F7F9;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  </style>