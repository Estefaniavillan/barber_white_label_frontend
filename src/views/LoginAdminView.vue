<script setup>
import login from "../controllers/LoginController.js";
import TextField from "../components/common/ComponentBookings/TextField.vue";
import CustomButton from "../components/common/ComponentBookings/CustomButton.vue";

import {ref} from "vue";
import router from "../router.js";

const email = ref("");
const password = ref("");

async function handleLogin() {
    const isLogin = await login(email.value, password.value);
    if (isLogin) {
        await router.push("/admin/services");
    } else {
        alert("Este correo o la contraseña son incorrectas!");
    }
}
</script>

<template>
    <div class="imgLogin">
        <img src="../assets/img/Layer.png" alt=""/>
    </div>

    <div class="container">
        <form class="loginForm" @submit.prevent="handleLogin">
            <div class="date">
                <h2>¡Bienvenido!</h2>
                <p>Para ingresar, completa los campos.</p>
                <div>
                    <TextField
                            class="email"
                            title="Correo electronico:"
                            v-model="email"
                    />
                    <TextField class="password" title="Contraseña:" v-model="password"/>
                    <ul class="list">
                        <li>Minimo 8 caracteres</li>
                        <li>Minimo una mayùscula</li>
                        <li>
                            Minimo un caracter especial((?=.*\d)(?=.*[a-z]) (?=.*<br/>
                            [A-Z]) (?=.* [*%$#-_()./=@&!?+]).{8,})
                        </li>
                        <li>Minimo un nùmero (0-9)</li>
                    </ul>
                    <CustomButton class="getInto" text="Ingresar"/>
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
    gap: 729px;

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
    color: #ffffff;
}

p {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
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
