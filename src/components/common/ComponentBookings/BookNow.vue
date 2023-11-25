<script setup>
const props = defineProps(["placeholder"])

</script>
<template>
        
        <button class="text-center">{{ props.placeholder }}</button>
  </template>
<style scoped>
  
  .text-center{
    background-color: #B48100;
    color: #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>