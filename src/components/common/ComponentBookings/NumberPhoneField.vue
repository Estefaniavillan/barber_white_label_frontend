<script setup>
  const props = defineProps(["title", "placeholder"])

  </script>
<template>
  <div>
  <p class="text-center">{{ props.title }}</p>  
  <div class="telefono-container">
    <div class="input-group">
      <select id="codigoPais" v-model="codigoPais">
        <option value="" selected disabled hidden>Codigo del paìs</option>
        <option value="+57">+57</option>
        <option value="+1">+1</option>
      </select>
      <label for="numeroContacto"></label>
      <input type="text" placeholder="0000 0000" id="numberContact" v-model="numeroContacto">
    </div>
  </div>
</div>
  </template>
  
  
  <style scoped>

  #numberContact{
    width: 100%;
   
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
     

  }
  
  
</style>