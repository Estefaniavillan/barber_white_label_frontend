<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    title: String,
    placeholder: String,
    options: Array,
});
</script>

<template>
    <div class="container-choice">
        <p class="text-center">{{ props.title }}</p>
        <div class="input-group">
            <select id="services">
                <option value="" selected disabled hidden>
                    {{ props.placeholder }}
                </option>
                <option v-for="option in props.options" :key="option" :value="option">
                    {{ option }}
                </option>

            </select>
        </div>
    </div>
</template>

<style scoped>
.container-choice {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;

}

.text-center {
    color: white;
    margin: 0 1rem;
    font-family: 'Maven Pro', sans-serif;
}

.input-group {
    display: flex;
    margin: 0 1rem;
}

#services {
    padding: 1rem 2rem;
    box-sizing: border-box;
    color: white;
    border-radius: 8px;
    border: 1px solid #b48100;
    background: #2f3133;
    width: 100%;
    font-size: 16px;
}
</style>
