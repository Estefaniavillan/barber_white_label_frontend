<script scope>
  import ProductosAdmi from '../views/ProductsAdminView.vue';
  import ServiciosAdmi from './Servicios_admi.vue';
  import Creacion_Servicios from './Creacion_Servicios.vue';
  
  export default {
    components: {
    ProductosAdmi,
    ServiciosAdmi,
    Creacion_Servicios
},
  }
  </script>
  
<template>
    <div>
      <h1>Página de Administración</h1>
      <ProductosAdmi />
      <ServiciosAdmi />
      <Creacion_Servicios />
    </div>
  </template>
  
  
  <style scoped>
  </style>