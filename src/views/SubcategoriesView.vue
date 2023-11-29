<template>
    <div>
      <h2>Formulario de Reservas</h2>
      <form @submit.prevent="submitReserva">
        <label for="nombre">Nombre:</label>
        <input v-model="reserva.nombre" type="text" id="nombre" required>
  
        <label for="direccion">Dirección:</label>
        <input v-model="reserva.direccion" type="text" id="direccion" required>
  
        <label for="contacto">Número de Contacto:</label>
        <input v-model="reserva.contacto" type="tel" id="contacto" required>
  
        <label for="servicio">Servicio:</label>
        <input v-model="reserva.servicio" type="text" id="servicio" required>
  
        <label for="metodoPago">Método de Pago:</label>
        <select v-model="reserva.metodoPago" id="metodoPago" required>
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta</option>
        </select>
  
        <label for="rangoHorario">Rango Horario:</label>
        <select v-model="reserva.rangoHorario" @change="actualizarHorasDisponibles" id="rangoHorario" required>
          <option value="manana">Mañana</option>
          <option value="tarde">Tarde</option>
          <option value="todoElDia">Todo el día</option>
        </select>
  
        <label for="hora">Hora:</label>
        <select v-model="reserva.hora" id="hora" required>
          <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}</option>
        </select>
  
        <button type="submit">Reservar</button>
      </form>
    </div>
  </template>
  
  <script scope>
  export default {
    data() {
      return {
        reserva: {
          nombre: '',
          direccion: '',
          contacto: '',
          servicio: '',
          metodoPago: 'efectivo',
          rangoHorario: 'manana',
          hora: '',
        },
        horasDisponibles: [],
      };
    },
    methods: {
      actualizarHorasDisponibles() {
        // Lógica para obtener las horas disponibles según el rango horario seleccionado
        // Puedes adaptar esto según tu backend o lógica específica
        this.horasDisponibles = obtenerHorasDisponibles(this.reserva.rangoHorario);
      },
      submitReserva() {
        // Lógica para enviar la reserva a través de WhatsApp
        const mensajeReserva = construirMensajeReserva(this.reserva);
        window.location.href = `https://wa.me/tunumerodewhatsapp?text=${encodeURIComponent(mensajeReserva)}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del formulario de reservas */
  </style>
  