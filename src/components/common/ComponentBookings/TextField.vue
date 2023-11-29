<script setup>
const props = defineProps(["title", "modelValue", "placeholder"]);
defineEmits(["update:modelValue"]);
</script>

<template>
    <div>
        <p class="text-center">{{ props.title }}</p>
        <input type="text"
               :value="modelValue"
               @input="$emit('update:modelValue', $event.target.value)"
               :placeholder="props.placeholder"
        />
    </div>
</template>

<style scoped>

div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
}

.text-center {
    padding: 0 1rem;
    color: white;
    font-family: 'Maven Pro', sans-serif;
}

input {
    color: #ffffff;
    padding: 1rem 2rem;
    margin: 0 1rem;
    border-radius: 8px;
    border: 1px solid #b48100;
    background: #2f3133;
    font-size: 16px;
}

input::placeholder {
    color: #ffffff;
    font-size: 16px;
}

.text-center {
    margin: 5px 4px;
}
</style>
