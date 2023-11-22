<script setup>
const props = defineProps(["title", "h2"]);
</script>

<template>
  
  <p class="text-center">{{ props.title }}</p>

  
  <div class="boxContainer">
    <picture>
      <img
        class="poniter"
        src="../../../assets/img/servicesAdmi/Ellipse.png" alt="circulo amarillo"/>
    </picture>
    <div class="barberia-box">
      <div class="information">
        <h2>Barbería</h2>
        <ul>
          <li>Corte de cabello</li>
          <li>Ritual de barba</li>
          <li>Corte y barba</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>

.poniter {
  display: flex;
  position: absolute;
  margin: 3rem 8rem 3rem 12rem;
}

.barberia-box {
  width: 312px;
  height: 297px;
  background-color: rgba(138, 147, 155, .20);
  border-radius: 14px;
  margin: 7rem -2rem 3rem 6rem;
  z-index: 70px;
  
}

.barberia-box h2 {
  text-align: center;
  color: #ffffff
  ;
  
}

.information {
  width: 254px;
  height: 174px;
  left: 25px;
  gap: 24px;
  padding: 3rem 3rem;
  
}
.information h2 {
  font-weight: 400;
  font-size: 40px;
  line-height: 42px;
  text-align: center;
}
li {
  font-weight: 400;
  font-size: 16px;
  line-height: 18.8px;
}
</style>
