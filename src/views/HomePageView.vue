<script setup>
import NavBar from "../components/common/NavBar.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
import BookNow from "../components/common/ComponentBookings/CustomButton.vue";
import ServicesAdminView from "../components/home/ServicesHome.vue";
import BookingsView from "../components/home/BookingsHome.vue";
</script>
<template>
    <NavBar/>
    <div class="container">
        <div class="containerHome">
            <div class="textContainer">
                <h2>
                    Tradición y Tendencia <br/>
                    se unen en <span class="colored-text"><u>cada estilo,</u> </span
                ><br/>
                    creando tu look único
                </h2>
                <img class="vector" src="../assets/img/Vector.png" alt="vector"/>
                <p>
                    Nuestros expertos barberos moldean tu imagen con pasión. <br/>
                    ¡Reserva hoy y descubre el poder de un estilo excepcional en Barbería
                    Cortés!
                </p>

                <BookNow class="bookNow" placeholder="¡Reserva ahora!"></BookNow>
                <ServicesAdminView/>
                <BookingsView/>
            </div>
        </div>
    </div>
    <div class="containerBox"></div>

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

.containerHome {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            90deg,
            #101010 0%,
            #101010 25.52%,
            rgba(16, 16, 16, 0) 100%
    );
}

.containerBox {
    width: 380px;
    height: 673px;
    border-radius: 14px;
    opacity: 10%;
    background: #8a939b;
    margin: 54px 1025px 179px 46px;
}

.img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: -1;
}

.textContainer {
    flex-direction: column;
    margin: 329px -207px;
    display: flex;
    align-items: center;
    position: absolute;
}

p {
    color: white;
}

.colored-text {
    color: #b48100;
}

.vector {
    height: 3px;
    margin: -45px 590px 0px 0px;
}

.textContainer h2 {
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
    color: white;
}

.bookNow {
    display: flex;
    padding: 12px 48px;
    gap: 10px;
    margin-right: 15rem;
}
</style>
