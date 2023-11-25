<script setup>
const props = defineProps({
  urlIcon: String,
  title: String,
  list: Array,
});
</script>

<template>
  <div>
    <picture>
      <img
        class="poniter"
        src="../../../assets/img/servicesAdmi/Ellipse.png"
        alt="circulo amarillo"
      />
    </picture>
    <div class="barberia-box">
      <div class="information">
        <h2>{{ props.title }}</h2>
        <li v-for="item in props.list">
          {{ item }}
        </li>
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
  background-color: rgba(138, 147, 155, 0.2);
  border-radius: 14px;
  margin: 7rem -2rem 3rem 6rem;
  z-index: 70px;
}
.information {
  width: 254px;
  height: 174px;
  left: 25px;
  padding: 3rem 3rem;
}
.information h2 {
  font-weight: 400;
  font-size: 40px;
  line-height: 42px;
  text-align: center;
}
</style>
