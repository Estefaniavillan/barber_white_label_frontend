<script setup>
import CustomButton from "../common/ComponentBookings/CustomButton.vue";
</script>
<template>
    <div class="container">
        <div class="containerBox"/>
        <h2>
            Tradición y Tendencia <br/>
            se unen en <span class="colored-text">cada estilo</span>, <br/>
            creando tu look único
        </h2>
        <div class="first-line"></div>
        <p>
            Nuestros expertos barberos moldean tu imagen con pasión. <br/>
            ¡Reserva hoy y descubre el poder de un estilo excepcional en Barbería
            Cortés!
        </p>
        <CustomButton text="¡Reserva ahora!"></CustomButton>
    </div>
</template>

<style scoped>

.container {
    background-image: url("../../assets/img/corte.png");
    background-size: cover;
}

.containerBox {
    width: 380px;
    height: 673px;
    border-radius: 14px;
    opacity: 6%;
    background: #8a939b;
    top: 20rem;
    margin-left: 4rem;
    position: absolute;
}

h2 {
    font-size: 64px;
    font-weight: 400;
    line-height: 105%;
    margin-top: 30rem;
    margin-left: 5rem;
    margin-bottom: 0;
}

.colored-text {
    color: #b48100;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
}

.first-line {
    background-color: #b48100;
    height: 0.15rem;
    width: 24rem;
}

p {
    margin-top: 1rem;
    margin-left: 5rem;
    font-family: 'Maven Pro', sans-serif;
}
</style>