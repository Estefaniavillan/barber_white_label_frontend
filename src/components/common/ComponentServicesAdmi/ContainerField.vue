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
    margin: 4rem 119px;
}

.barberia-box {
  width: 311px;
  height: 306px;
  background-color: rgba(138, 147, 155, 0.2);
  border-radius: 9px;
  margin: 9rem 20px;

}

.information {
  width: 254px;
  height: 174px;
  padding: 3rem 3rem;
}

.information h2 {
  font-weight: 400;
  font-size: 40px;
  line-height: 42px;
  text-align: center;
}
</style>
