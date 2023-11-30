<script scope>
  import ProductAdmi from './ProductsAdmi.vue';
  import ServicesAdmi from './ServicesAdminView.vue';
  import CreactionServices from './CreationServices.vue';
  
  export default {
    components: {
    ProductAdmi,
    ServicesAdmi,
    CreactionServices,
},
  }
  </script>
  
<template>
    <div>
      <h1>Página de Administración</h1>
      <ProductAdmi />
      <ServicesAdmi />
      <CreactionServices />
    </div>
  </template>
  
  
  <style scoped>
  </style>