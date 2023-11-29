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
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #b48100;
  background: #2f3133;
  color: #ffffff;
  border-radius: 8px  ;
 
}
.text-center{
  margin: 5px 4px;
}
</style>
 
  