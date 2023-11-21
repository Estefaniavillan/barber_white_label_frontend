<script setup>
const props = defineProps(["title", "placeholder", ""])
</script>

<template>
        <p class="text-center">{{ props.title }}</p>
        <select id="services" v-model="services">
        <option value="" selected disabled hidden>Hola</option>
        <option value=""></option>
        <option value=""></option>
        </select>
</template>

<style scoped>
#services {
  width: 100%; 
  box-sizing: border-box; 
  background-color:#8A939B ;
  border-radius: 8px  ; 
  padding: 8px;
  
}
</style>