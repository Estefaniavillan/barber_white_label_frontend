<script setup>
const props = defineProps(["title"])

</script>
<template>
    <div class="container-date">
        <p class="text-center">{{ props.title }}</p>
        <input type="date" id="fecha" v-model="fecha">
    </div>

</template>

<style scoped>

.container-date {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;

}

#fecha {
    box-sizing: border-box;
    padding: 1rem 2rem;
    border: 1px solid #b48100;
    background: #2f3133;
    color: #ffffff;
    border-radius: 8px;
}

#fecha::placeholder {
    color: #ffffff;
    font-size: 16px;
}

.text-center {
    color: white;
    margin: 0 1rem;
    font-family: 'Maven Pro', sans-serif;
}
</style>
 
  