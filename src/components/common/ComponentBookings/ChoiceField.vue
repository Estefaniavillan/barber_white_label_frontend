<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  placeholder: String,
  options: Array,
});
</script>

<template>
  <div>
    <p class="text-center">{{ props.title }}</p>
    <div class="input-group">
      <select id="services">
        <option value="" selected disabled hidden>
          {{ props.placeholder }}
        </option>
        <option v-for="option in props.options" :key="option" :value="option">
          {{ option }}
        </option>
        
      </select>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  margin: 5px 4px;
}
.input-group {
  display: flex;
}
#services {
  width: 100%;
  box-sizing: border-box;
  color: white;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #b48100;
  background: #2f3133;
}
</style>
