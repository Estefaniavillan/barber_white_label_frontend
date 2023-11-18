<script>
  export default {
    data() {
      return {
        codigoPais: '',
        numeroContacto: '',
      };
    },
  };
  </script>
<template>
  
  <div class="telefono-container">
    <label for="name">Número de teléfono:</label>
    <div class="input-group">
      <label for="codigoPais">Código del País:</label>
      <select id="codigoPais" v-model="codigoPais">
        <option value="+57">+57</option>
        <option value="+1">+1</option>
      </select>
      <label for="numeroContacto"></label>
      <input type="text" placeholder="0000 0000" id="numeroContacto" v-model="numeroContacto">
    </div>
  </div>
  </template>
  
  
  <style scoped>
  telefono-container {
    display: flex;
    flex-direction: column;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
 
  select,
  input {
    box-sizing: border-box;
    border: 8px;
    padding: 8px;
    background-color:#8A939B ;
    border-radius: 8px  ; 
  }
  
  
</style>