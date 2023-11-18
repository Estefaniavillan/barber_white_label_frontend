<script>
export default {
  data() {
    return {
      servicio: '',
      metodoPago: '',
      hora: '',
    };
  },
};
</script>
<template>
    <div class="services">
      <label for="servicio">Servicio:</label>
      
      <input type="text" placeholder="Selecciona el servicio" id="servicio" v-model="servicio">
      <select id="servicio" v-model="servicio">
        <option  value=""></option>
        <option value=""></option>
      </select>
      <br>
      <label for="metodoPago">Método de Pago:</label>
      <input type="text" placeholder="Selecciona el método de pago" id="metodoPago" v-model="metodoPago">
      <select id="metodoPago" v-model="metodoPago">
        <option  value=""></option>
        <option value=""></option>
      </select>
      <br>
      <label for="hora">Hora</label>
      <input type="text" placeholder="Selecciona el rango horario" id="hora" v-model="hora">
      <select id="hora" v-model="hora">
        <option  value=""></option>
        <option value=""></option>
      </select>
      <label for="hora">Horario sujeto a cambios debido a la disponibilidad</label>

      <br>
    </div>
  </template>
  
 <style scoped>
.services{
  background-color:#8A939B ;
  color:#FFFFFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;
  padding: 2px 16px 2px 16px;
  
}

#servicio,
#metodoPago,
#hora{
  background-color:#8A939B ;
  

  
}
</style>
  