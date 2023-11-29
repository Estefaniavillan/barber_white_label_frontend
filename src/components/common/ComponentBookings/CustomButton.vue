<script setup>
const props = defineProps(["text"]);
</script>
<template>
  <button type="submit" class="text-center">{{ props.text }}</button>
</template>
<style scoped>
.text-center {
  background-color: #b48100;
  color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
