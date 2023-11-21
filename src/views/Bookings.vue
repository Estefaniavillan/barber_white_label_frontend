<script>
import BookNow from "../components/common/ComponentBookings/BookNow.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
import FooterB from "../components/common/FooterB.vue";

import TextField from "../components/common/ComponentBookings/TextField.vue";
import ChoiceField from "../components/common/ComponentBookings/ChoiceField.vue";
import CalendarField from '../components/common/ComponentBookings/CalendarField.vue'
import NumberPhoneField from "../components/common/ComponentBookings/NumberPhoneField.vue";




export default {
  components: {
    BookNow,
    Whatsapp,
    FooterB,
    TextField,
    ChoiceField,
    CalendarField,
    NumberPhoneField
},
};
</script>

<template>
  <div class="container">
    <h2>¡Reserva ahora!</h2>
    <picture>
      <img src="../assets/img/bookings/Rectangle 45.png" class="backgroundImage" alt="background image" />
    </picture>
    <div class="content-wrapper">
      <form class="bookings">
        <TextField title="Nombre:" placeholder="Ingresa tu nombre completo"/>
        <TextField title="Direccion:" placeholder="Ingresa la direccion en la que se realizara el servicio"/>
        <NumberPhoneField title="Nùmero de telèfono:"/>

        <ChoiceField title="Servicio:" placeholder="Selecciona el servicio"/>
        <ChoiceField title="Mètodo de pago:" placeholder="Selecciona el mètodo de pago"/>
          
        <div id="horaFecha">
        <ChoiceField class="hora" title="Hora:" placeholder="Selecciona el rango horario"/>
        <!--<p>Horario sujeto a cambios debido a la disponibilidad</p>--> 
        <CalendarField class="fecha" title="Fecha:" />
        </div>
        <BookNow></BookNow>
      </form>
      <picture>
        <img src="../assets/img/bookings/Bookings.png" alt="" />
      </picture>
    </div>
  </div>
  <br />
  <br />

  <Whatsapp></Whatsapp>
  <FooterB></FooterB>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(15, 15, 15);

  
}
h2 {
  width: 1200px;
  height: 20px;
  font-size: 64px;
  line-height: 67.2px;
  font-weight: 400;
  text-align:right ;
 
}
.backgroundImage{
 margin-bottom: 4rem;
}


.content-wrapper {
  display: flex;
  flex-direction: row-reverse;
}

p{
color: #B48100;
}
#horaFecha{
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  width: 50%;
  }

 







</style>
