<script scope>
  import HomeView from './views/HomeView.vue'
  import ServicesAdmin from './views/ServicesAdmin.vue';
  import ProductsAdmin from './views/productsadmin.vue';
  import CreactionServices from './views/CreationServices.vue';
  
  export default {
    components: {
    ServicesAdmin,
    ProductsAdmin,
    CreactionServices
},
  }
  </script>
  
<template>
  <div>
    <router-view></router-view>
  </div>
</template>



<style>
#app{
  color: #ffffff;
}
html, body {
  margin: 0;
  padding: 0;
}
</style>
=======
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
>>>>>>> 979cb2ea2de517cfb9c0567892a5c4ad20b2ad67
