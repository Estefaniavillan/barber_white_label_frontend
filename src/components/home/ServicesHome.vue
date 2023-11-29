<script setup>
import CardService from "../common/CardService.vue";

const firstList = ["Corte de cabello", " Ritual de barba", "Corte y barba"];
const secondList = [
    "Exfoliaciòn facial",
    " Mascarilla de puntos negros",
    "Mascarilla contorno de ojeras",
    "Mascarilla de àcido hialurònico",
    "Mascarilla de hidratacion facial",
];
const thirdList = [
    "Depilacion con cera",
    "Colorimetria",
    "pigmentacion",
    "Frestyle(Lineas)",
    "Peinados",
    "Bonos regalo",
];
</script>

<template>
    <div class="container">
        <div class="container-background"/>
    </div>

    <div class="container-services">
        <section>
            <h2>Servicios</h2>
            <p class="line"/>
        </section>
        <article class="container-card">
            <CardService
                url-icon="../assets/img/servicesAdmi/noun-barber-56898972.png"
                title="Barberìa"
                :list="firstList"
            />
            <CardService
                    url-icon="../assets/img/servicesAdmi/noun-barber-56898973.png"
                    title="Mascarillas"
                    :list="secondList"
            />
            <CardService
                url-icon="../assets/img/servicesAdmi/noun-barber-56898974.png"
                title="Otros"
                :list="thirdList"
            />
            <!--            <picture>-->
            <!--                <img-->
            <!--                        class="scissors"-->
            <!--                        src="../../assets/img/servicesAdmi/noun-barber-56898974.png"-->
            <!--                        alt="Imagen tijera"-->
            <!--                />-->
            <!--                <img-->
            <!--                        class="other"-->
            <!--                        src="../../assets/img/servicesAdmi/noun-barber-56898973.png"-->
            <!--                        alt="Imagen mascarilla"-->
            <!--                />-->
            <!--                <img-->
            <!--                        class="faceMask"-->
            <!--                        src="../../assets/img/servicesAdmi/noun-barber-56898972.png"-->
            <!--                        alt="otros"-->
            <!--                />-->
            <!--            </picture>-->
        </article>
    </div>
</template>

<style scoped>
.container {
    position: absolute;
    background-image: url("../../assets/img/servicesAdmi/barba.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
;
}

.container-background {
    background-image: linear-gradient(-90deg, #101010 0%, #101010 35%, rgba(16, 16, 16, 0.00) 100%);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.container-services {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-top: 5rem;
}

section {
    width: 100%;
}

section h2 {
    margin-left: 10rem;
    font-size: 64px;
    font-weight: 400;
}

section .line {
    background-color: #b48100;
    height: 0.2rem;
    margin-left: 10rem;
}

.container-card {
    display: flex;
    margin-top: 6rem;
}

/*section picture {*/
/*    display: flex;*/
/*    justify-content: flex-end;*/
/*}*/

/*.scissors {*/
/*    display: flex;*/
/*    position: absolute;*/
/*    margin: -32rem 9rem;*/
/*}*/

/*.faceMask {*/
/*    display: flex;*/
/*    position: absolute;*/
/*    margin: -32rem 30.5rem;*/
/*}*/

/*.other {*/
/*    display: flex;*/
/*    position: absolute;*/
/*    margin: -32rem 52.5rem;*/
/*}*/

/*.ContainerS {*/
/*    width: 1200px;*/
/*    height: 20px;*/
/*    font-size: 64px;*/
/*    line-height: 67.2px;*/
/*    font-weight: 400;*/
/*    text-align: left;*/
/*    z-index: 90;*/
/*}*/
</style>
