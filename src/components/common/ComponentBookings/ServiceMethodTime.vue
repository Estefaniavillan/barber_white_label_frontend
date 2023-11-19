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
    <div>
    <label  for="services">Servicio:</label>
    <select  id="servicio" v-model="services">
      <option  value=""></option>
      <option value=""></option>
    </select>
  </div>
      <br>
      <div>
        <label  for="method">Método de pago:</label>
        <select  id="servicio" v-model="method">
          <option  value=""></option>
          <option value=""></option>
        </select>
      </div>
      <br>
      <div class="hour">
        <label  for="hour">Hora:</label>
        <select  id="hora" v-model="hour">
          <option  value=""></option>
          <option value=""></option>
        </select>
      </div>
      <p>Horario sujeto a cambios debido a la disponibilidad</p>
    </div>
  </template>
  
 <style scoped>
.services{
  padding: 2px 16px 2px 16px;
}
#servicio,
#metodoPago
{
  background-color:#8A939B ;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  width: 100%; 
}
#hora{
  background-color:#8A939B ;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  width: 50%; 
 

}
p{
font-weight: 500;
font-size: 12px;
line-height: 14.1px;
color: #B48100;
}
</style>
  