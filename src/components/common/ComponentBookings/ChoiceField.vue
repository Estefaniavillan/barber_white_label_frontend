<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  placeholder:String,
  text:String,
  
});
</script>

<template>
  <div>
    <p class="text-center">{{ props.title }}</p>
    <select id="services" v-model="props.services">
      <option :value="null" disabled hidden>{{ props.placeholder }}</option>
      <p>
        {{ props.text}}
      </p>
    </select>
  </div>
 
</template>

<style scoped>
.text-center {
  margin: 5px 4px;
}
#services {
  width: 100%;
  box-sizing: border-box;
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #b48100;
  background: #2f3133;
}
</style>
