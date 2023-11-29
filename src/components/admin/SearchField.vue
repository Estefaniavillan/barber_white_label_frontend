<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
    <div class="field">
        <picture>
            <img src="../../assets/img/Admin_product/edit.svg" alt="search"/>
        </picture>
        <input type="text"
               :value="modelValue"
               @input="$emit('update:modelValue', $event.target.value)"
               placeholder="Buscar"/>
    </div>
</template>

<style scoped>
.field {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background-color: #2F3133;
    border-radius: 0.5rem;
}

.field img {
    width: 1rem;
    height: 1rem;
}

.field input {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    width: 100%;
    outline: none;
}
</style>