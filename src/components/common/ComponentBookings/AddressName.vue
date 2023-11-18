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
    color:#FFFFFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 2px 16px 2px 16px;
    
  }
  input {
    width: 100%; /* Ajusta el ancho del input al 100% del contenedor */
    box-sizing: border-box; /* Incluye el padding y el borde en el ancho total del input */
    background-color:#8A939B ;
    border-radius: 8px  ; /* Añade un borde al input */
    padding: 8px; /* Añade relleno al input */
  }
  
 
</style>