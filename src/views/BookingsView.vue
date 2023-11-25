<script>
import TextField from "../components/common/ComponentBookings/TextField.vue";
import ChoiceField from "../components/common/ComponentBookings/ChoiceField.vue";
import CalendarField from "../components/common/ComponentBookings/CalendarContainer.vue";
import NumberPhoneField from "../components/common/ComponentBookings/containerPhoneNumber.vue";
import BookNow from "../components/common/ComponentBookings/BookNow.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
import FooterB from "../components/common/FooterB.vue";

export default {
  components: {
    TextField,
    ChoiceField,
    CalendarField,
    NumberPhoneField,
    BookNow,
    Whatsapp,
    FooterB,
  },
};
</script>

<template>
  <div class="container">
    <h2>¡Reserva ahora!</h2>
    <picture>
      <img
      
        src="../assets/img/bookings/Rectangle 45.png"
        class="rectangle"
        alt="background image"
      />
    </picture>
    <div class="content-wrapper">
      <form class="bookings">
        <TextField title="Nombre:" placeholder="Ingresa tu nombre completo" />
        <TextField
          title="Direccion:"
          placeholder="Ingresa la direccion en la que se realizara el servicio"
        />
        <NumberPhoneField
          title="Nùmero de telèfono:"
          placeholder="codigo del pais"
        />
        <ChoiceField
          title="Mètodo de pago:"
          placeholder="Selecciona el mètodo de pago"
        />

        <ChoiceField
         title="Servicio:"
         placeholder="Selecciona el servicio" />

        <div id="horaFecha">
          <ChoiceField
            class="hora"
            title="Hora:"
            placeholder="Selecciona el rango horario"
            text="Horario sujeto a cambios debido a la disponibilidad"
          />
          <CalendarField 
          class="fecha" 
          title="Fecha:" />
        </div>
       
        <BookNow class="getInto" placeholder="¡Reserva ahora!"></BookNow>
      </form>
      <picture>
        <img src="../assets/img/bookings/Bookings.png" alt="" />
      </picture>
    </div>
  </div>


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
  width: 920px;
  height: 20px;
  font-size: 64px;
  line-height: 67.2px;
  font-weight: 400;
  text-align: right;
}
.rectangle{
  width: 1222px;
  height: 2px;
}
.bookings{
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 46px 9px;
}

.content-wrapper {
  display: flex;
  flex-direction: row-reverse;
}

#horaFecha {
  display: flex;
  flex-direction: row-reverse;
  width: 22rem;
  margin: 5px 0;
}

.getInto {
  display: flex;
  width: 351px;
  padding: 12px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 2rem 0;
}
</style>
