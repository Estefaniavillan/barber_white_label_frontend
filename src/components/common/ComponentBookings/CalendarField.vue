<script setup>
const props = defineProps(["title"])

</script>
<template>
   
    <div>
        <p class="text-center">{{ props.title }}</p>
      <input type="date" id="fecha" v-model="fecha">
    </div>



  </template>
  
  <style scoped>
#fecha{
  background-color:#8A939B;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
 
}
</style>
 
  