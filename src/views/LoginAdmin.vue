<script setup>
import { ref } from 'vue'
const correo = ref('')
const contrasena = ref('')

const iniciarSesion = async () => {
  try {
    await auth.signInWithEmailAndPassword(correo.value, contrasena.value)
    
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

 
  <form id="loginForm">
    <div class="text-form">
        <h2>¡Bienvenido!</h2>
        <p>Para ingresar, completa los campos </p>
    </div>
    <label for="correo">Correo:</label>
    <input type="email" v-model="correo" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <br>
    <label for="contrasena">Contraseña:</label>
    <input type="password" v-model="contrasena" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*%$#-_()./=@&!?+]).{8,}">
    <br>
    <button type="button" @click="iniciarSesion">Iniciar Sesión</button>
  </form>
</template>

<style scoped>

</style>