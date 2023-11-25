<script setup>
const props = defineProps(["title", "placeholder"])
</script>

<template>
    <div>
        <p class="text-center">{{ props.title }}</p>
        <input type="text" :placeholder="props.placeholder"/>
    </div>
</template>

<style scoped>
  input {
    width: 330px;
    color:#ffffff;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid  #B48100;
    background: #2F3133; 
  }
  .text-center{
    margin: 5px 4px;
  }
  
</style>