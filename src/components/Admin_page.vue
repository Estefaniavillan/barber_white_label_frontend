<template>
    <div>
      <h1>Página de Administración</h1>
      <ProductosAdmi />
      <ServiciosAdmi />
    </div>
  </template>
  
  <script scope>
  import ProductosAdmi from './Productos_admi.vue';
  import ServiciosAdmi from './Servicios_admi.vue';
  
  export default {
    components: {
      ProductosAdmi,
      ServiciosAdmi,
    },
  }
  </script>
  
  <style scoped>
  </style>