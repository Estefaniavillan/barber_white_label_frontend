<script>
  export default {
    data() {
      return {
        name: '',
        address: '',
      };
    },
  };
  </script>
<template>
  
    <div class="addressName ">
      <label for="name">Nombre:</label>
      <input type="text" placeholder="Ingresa tu nombre completo" id="name" v-model="nombre">
      <br>
      <label for="address">Dirección:</label>
      <input type="text" placeholder="Ingresa la direccion en la que se realizara el servicio" id="address" v-model="direccion">
      <br>
    </div>
  </template>
  
  <style scoped>

  .addressName{
    line-height: 24px;
    padding: 2px 16px 2px 16px;
    
    
  }
  input {
    width: 100%; 
    box-sizing: border-box; 
    background-color:#8A939B ;
    border-radius: 8px  ; 
    padding: 8px;
  }
  
 
</style>