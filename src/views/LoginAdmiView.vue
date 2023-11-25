<script>
import TextField from "../components/common/ComponentBookings/TextField.vue";
import BookNow from "../components/common/ComponentBookings/BookNow.vue";

export default {
  components: {
    TextField,
    BookNow,
  },
};
</script>

<template>
  <div class="imgLogin">
    <img src="../assets/img/Layer.png" alt="" />
  </div>

  <div class="container">
    <form class="loginForm">
      <div class="date">
        <h2>¡Bienvenido!</h2>
        <p>Para ingresar, completa los campos</p>
        <div>
          <TextField
            class="email"
            title="Correo electronico:"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <TextField
            class="password"
            title="Contraseña:"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*%$#-_()./=@&!?+]).{8,}"
          />
          <ul class="list">
            <li>Minimo 8 caracteres</li>
            <li>Minimo una mayùscula</li>
            <li>
              Minimo un caracter especial((?=.*\d)(?=.*[a-z]) (?=.*<br />
              [A-Z]) (?=.* [*%$#-_()./=@&!?+]).{8,})
            </li>
            <li>Minimo un nùmero (0-9)</li>
          </ul>
          <BookNow class="getInto" placeholder="Ingresar"></BookNow>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.container {
  background-image: url(../assets/img/login/login.png);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.imgLogin img {
  position: absolute;
  z-index: 9;
}
.imgLogin {
  display: flex;
  justify-content: flex-end;
  padding: 25px 39px;
}
.date {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;
}
.loginForm {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
h2 {
  font-size: 30px;
  font-weight: 700;
}
p {
  font-size: 16px;
  font-weight: 600;
}
.email,
.password {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  height: 80px;
}
.list {
  color: #b48100;
  font-size: 13px;
  margin: 1px 3px;
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
