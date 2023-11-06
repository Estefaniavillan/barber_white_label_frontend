<template>
  <h2>Login</h2>
    
  <form id="loginForm">          
        <div class="text-form">
          <h2>¡Bienvenido!</h2>
          <p>Para ingresar, completa los campos </p>
      </div>

          <label for="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
              <br>
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*%$#-_()./=@&!?+]).{8,}">
              <br>
          <button type="button" id="loginButton">Iniciar Sesión</button>
      </form>
</template>


