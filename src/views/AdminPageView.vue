<script scope>
  import ProductAdmi from './ProductsAdmiView.vue';
  import ServicesAdmi from './ServicesAdmiView.vue';
  import CreactionServices from './CreationServicesView.vue';
  
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