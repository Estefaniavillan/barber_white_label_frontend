<script>
export default {
  data() {
    return {
      fecha: '',
    };
  },
};
</script>
<template>
    <div class="calendar">
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" v-model="fecha">
      <br>
    </div>
  </template>
  
  <style scoped>
.calendar{
  display: flex;
    align-items: center;
    height: 48px;
    border-radius: 8px;
    padding: 2px 16px 2px 16px;
    
}
#fecha{
  background-color:#8A939B;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  width: 50%; 
}
</style>
 
  