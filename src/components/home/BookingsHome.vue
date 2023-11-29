<script setup>
import TextField from "../common/ComponentBookings/TextField.vue";
import ChoiceField from "../common/ComponentBookings/ChoiceField.vue";
import CalendarField from "../common/ComponentBookings/CalendarContainer.vue";
import NumberPhoneField from "../common/ComponentBookings/PhoneNumber.vue";
import CustomButton from "../common/ComponentBookings/CustomButton.vue";
import Whatsapp from "../common/Whatsapp.vue";
import CustomFooter from "../common/CustomFooter.vue";
import {defineProps} from "vue";

const props = defineProps({
    title: String,
    placeholder: String,
    options: Array,
});
</script>

<template>
    <div class="container">
        <header>
            <h2 class="TextBookings">¡Reserva ahora!</h2>
            <div class="line"/>
        </header>
        <div class="container-card">
            <picture>
                <img class="imgBookings"
                     src="../../assets/img/bookings/Bookings.png"
                     alt="imgBookings"
                />
            </picture>
            <form class="bookings">
                <TextField title="Nombre:" placeholder="Ingresa tu nombre completo"/>
                <TextField title="Direccion:"
                           placeholder="Ingresa la direccion en la que se realizara el servicio"/>
                <NumberPhoneField class="numberPhone"
                                  title="Nùmero de telèfono:"
                                  placeholder="codigo del pais"/>

                <ChoiceField title="Mètodo de pago:"
                             placeholder="Selecciona el mètodo de pago"
                             :options="[ 'Efectivo','Tarjeta','Transferencia']"/>

                <ChoiceField title="Servicio:"
                             placeholder="Selecciona el servicio"
                             :options="[ 'Barberia','Mascarilla','Otros']"/>

                <div id="timer">
                    <ChoiceField
                            class="hora"
                            title="Hora:"
                            placeholder="Selecciona el rango horario"
                            :options="[ '8:00AM','9:00AM','10:00AM','11:00AM','12:00AM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM']"

                            text="Horario sujeto a cambios debido a la disponibilidad"
                    />
                    <CalendarField class="fecha" title="Fecha:"/>
                </div>

                <CustomButton class="getInto" text="Ingresar"/>
            </form>
        </div>
    </div>

    <Whatsapp/>
    <CustomFooter/>
</template>

<style scoped>

.container {
    background-color: black;
    padding-top: 10rem;
}

header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 10rem;
}

header h2 {
    color: white;
    font-size: 64px;
    font-weight: 400;
    padding-right: 10rem;
}

header .line {
    width: 100%;
    height: 0.2rem;
    background-color: #b48100;
    margin-right: 10rem;
}

.container-card {
    display: flex;
    padding-right: 10rem;
}

.container-card picture {
    display: flex;
    justify-content: right;
    flex: 2;
}

.container-card .bookings {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 3;
    margin-left: 10rem;
}

#timer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
</style>
