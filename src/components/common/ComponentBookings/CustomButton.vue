<script setup>

const props = defineProps(["text"]);
</script>
<template>
    <div class="container-button">
        <button type="submit" class="text-center">{{ props.text }}</button>
    </div>
</template>
<style scoped>

.container-button {
    display: flex;
    margin-left: 5rem;
    margin-top: 2rem;
}

button {
    font-family: 'Maven Pro', sans-serif;
    background-color: #b48100;
    border-radius: 0.5rem;
    font-size: 20px;
    padding: 0.8rem 2.5rem;
    color: white;
    font-weight: 700;
    border: none;
}

button:hover {
    cursor: pointer;
    background-color: #9a7100;
}

/*.text-center {*/
/*    background-color: #b48100;*/
/*    color: #ffffff;*/
/*    border-radius: 12px;*/
/*    display: flex;*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*}*/
</style>
