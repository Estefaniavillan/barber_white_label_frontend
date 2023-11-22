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
    width: 100%; 
    box-sizing: border-box; 
    background-color:#8A939B ;
    border-radius: 8px  ; 
    padding: 8px;
    
  }
  
</style>