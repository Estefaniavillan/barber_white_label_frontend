<script setup>
import TextField from "../common/ComponentBookings/TextField.vue";
import ChoiceField from "../common/ComponentBookings/ChoiceField.vue";
import CalendarField from "../common/ComponentBookings/CalendarContainer.vue";
import NumberPhoneField from "../common/ComponentBookings/containerPhoneNumber.vue";
import CustomButton from "../common/ComponentBookings/CustomButton.vue";
import Whatsapp from "../common/Whatsapp.vue";
import CustomFooter from "../common/CustomFooter.vue";
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  placeholder: String,
  options: Array,
});
</script>

<template>
  <div class="containerBookings">
    <h2 class="TextBookings">¡Reserva ahora!</h2>
    <picture>
      <img
        src="../../assets/img/bookings/Rectangle%2045.png"
        class="rectangle"
        alt="background image"
      />
    </picture>
    <div class="container-card">
      <form class="bookings">
        <TextField title="Nombre:" placeholder="Ingresa tu nombre completo" />
        <TextField
          title="Direccion:"
          placeholder="Ingresa la direccion en la que se realizara el servicio"
        />
        <NumberPhoneField
          class="numberPhone"
          title="Nùmero de telèfono:"
          placeholder="codigo del pais"
        />

        <ChoiceField
          title="Mètodo de pago:"
          placeholder="Selecciona el mètodo de pago"
          :options="[ 'Efectivo','Tarjeta','Transferencia']"
        />

        <ChoiceField
          title="Servicio:"
          placeholder="Selecciona el servicio"
          :options="[ 'Barberia','Mascarilla','Otros']"

        />

        <div id="horaFecha">
          <ChoiceField
            class="hora"
            title="Hora:"
            placeholder="Selecciona el rango horario"
            :options="[ '8:00AM','9:00AM','10:00AM','11:00AM','12:00AM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM']"

            text="Horario sujeto a cambios debido a la disponibilidad"
          />
          <CalendarField class="fecha" title="Fecha:" />
        </div>

        <CustomButton class="getInto" text="Ingresar" />
      </form>
      <picture>
        <img
          class="imgBookings"
          src="../../assets/img/bookings/Bookings.png"
          alt="imgBookings"
        />
      </picture>
    </div>
  </div>

  <Whatsapp />
  <CustomFooter />
</template>

<style scoped>

.containerBookings {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(15, 15, 15);
  color: #ffffff;
}
.TextBookings {
  width: 920px;
  height: 20px;
  font-size: 64px;
  line-height: 67.2px;
  font-weight: 400;
  text-align: right;
}
#codigoPais {
  font-size: 4rem;
  width: 4rem;
}
.rectangle {
  margin-right: 39rem;
  width: 97rem;
}
.bookings {
  gap: 12px;
  margin: 46px 9px;
}

.container-card {
  display: flex;
  flex-direction: row-reverse;
}

#horaFecha {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
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
