<script setup>
import NavBar from "../components/common/NavBar.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
import CustomButton from "../components/common/ComponentBookings/CustomButton.vue";
</script>
<template>
    <div class="container">
        <div class="container-background"/>
        <div class="containerBox"/>
    </div>
    <NavBar/>
    <article class="welcome">
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
    </article>
    <article class="service">

    </article>
    <article class="bookings">

    </article>
  <!--    <div class="container">-->
  <!--        <div class="containerHome">-->
  <!--            <div class="textContainer">-->
  <!--                <ServicesAdminView/>-->
  <!--                <BookingsView/>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </div>-->

    <Whatsapp></Whatsapp>
</template>

<style>
.container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/img/corte.png");
    background-size: cover;
    z-index: -1;
}

.container-background {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #101010 0%, #101010 25.52%, rgba(16, 16, 16, 0.00) 100%);
    position: absolute;
}

.welcome {
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 10rem;
}

.welcome h2 {
    font-size: 64px;
    font-weight: 400;
    line-height: 105%;
    margin-top: 10rem;
    margin-left: 5rem;
    margin-bottom: 0;
}

.welcome .colored-text {
    color: #b48100;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
}

.welcome .first-line {
    background-color: #b48100;
    height: 0.15rem;
    width: 24rem;
}

.welcome p {
    margin-top: 1rem;
    margin-left: 5rem;
    font-family: 'Maven Pro', sans-serif;
}

.containerBox {
    width: 380px;
    height: 673px;
    border-radius: 14px;
    opacity: 6%;
    background: #8a939b;
    margin: 12rem 1025px 179px 46px;
}
</style>
