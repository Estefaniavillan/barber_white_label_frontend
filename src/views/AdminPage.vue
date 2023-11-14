<script scope>
  import ProductsAdmi from './ProductsAdmi.vue';
  import ServicesAdmi from './ServicesAdmi.vue';
  import CreactionServices from './CreationServices.vue';
  
  export default {
    components: {
    ProductsAdmi,
    ServicesAdmi,
    CreactionServices
},
  }
  </script>
  
<template>
    <div>
      <h1>Página de Administración</h1>
      <ProductAdmi />
      <ServicesAdmi />
      <CreactionServicios />
    </div>
  </template>
  
  
  <style scoped>
  </style>