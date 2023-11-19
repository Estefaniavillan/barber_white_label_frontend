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
    
</style>