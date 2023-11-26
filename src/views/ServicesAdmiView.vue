<script setup>
import Container from "../components/common/ComponentServicesAdmi/ContainerField.vue";
const firstList = ["Corte de cabello", " Ritual de barba", "Corte y barba"]
const secondList = ["Exfoliaciòn facial", " Mascarilla de puntos negros", "Mascarilla contorno de ojeras", "Mascarilla de àcido hialurònico", "Mascarilla de hidratacion facial"]
const thirdList = ["Depilacion con cera", "Colorimetria", "pigmentacion", "Frestyle(Lineas)", "Peinados", "Bonos regalo"]
</script>

<template>
  <div class="containerServices">
    <div class="imagen"></div>
  </div>
  <div class="containerServices">
    <h2>Servicios</h2>
    <picture>
      <img class="rectangle" src="../assets/img/bookings/Rectangle 45.png" alt="" />
    </picture>
    <div class="content-wrapper">
      <Container url-icon="../assets/img/servicesAdmi/Ellipse.png" title="Otros" :list="thirdList" />
      <Container url-icon="../assets/img/servicesAdmi/Ellipse.png" title="Mascarillas" :list="secondList" />
      <Container url-icon="../assets/img/servicesAdmi/Ellipse.png" title="Barberìa" :list="firstList" />
      <picture>
        <img class="scissors" src="../assets/img/servicesAdmi/noun-barber-56898974.png" alt="Imagen tijera" />
        <img class="other" src="../assets/img/servicesAdmi/noun-barber-56898973.png" alt="Imagen mascarilla" />
        <img class="faceMask" src="../assets/img/servicesAdmi/noun-barber-56898972.png" alt="otros" />
      </picture>
    </div>
  </div>
</template>

<style scoped>
.containerServices {
  position: absolute;
  background: linear-gradient(-90deg, #101010 0%, #101010 25.52%, rgba(16, 16, 16, 0.00) 100%);
}

.imagen {
  background-image: url("../assets/img/servicesAdmi/barba.png");
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  opacity: 60;

}

.rectangle {
  position: relative;
  margin-right: -22rem;
  width: 97rem;

}

.scissors {
  display: flex;
  position: absolute;
  margin: -32rem 9rem;
}

.faceMask {
  display: flex;
  position: absolute;
  margin: -32rem 30.5rem;
}

.other {
  display: flex;
  position: absolute;
  margin: -32rem 52.5rem;
}

.containerServices {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

}

.content-wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  margin: 4rem 4rem 4rem 4rem;
  z-index: 90;
}

h2 {
  width: 1200px;
  height: 20px;
  font-size: 64px;
  line-height: 67.2px;
  font-weight: 400;
  text-align: left;
  z-index: 90;
}
</style>
