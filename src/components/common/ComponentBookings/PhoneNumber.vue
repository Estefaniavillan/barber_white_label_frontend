<script setup>
const props = defineProps({
    title: String,
    services: String,
    placeholder: {
        type: String,
    },
});
</script>
<template>
    <div class="container-phone-number">
        <p class="text-center">{{ props.title }}</p>
        <div class="input-group">
            <select id="codigoPais">
                <option value="" selected disabled hidden>
                    {{ props.placeholder }}
                </option>
                <option value="+1">+1</option>
                <option value="+57">+57</option>
            </select>
            <input type="number"
                   placeholder="0000 0000"
                   id="numberContact"
                   v-model="numeroContacto"
            />
        </div>
    </div>
</template>

<style scoped>

.container-phone-number {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    margin-top: 1rem;
}

#numberContact {
    width: 100%;
}

.input-group {
    display: flex;
    padding: 0 1rem;
}

.text-center {
    margin: 0 1rem;
    color: white;
    font-family: 'Maven Pro', sans-serif;

}

select,
input {
    box-sizing: border-box;
    padding: 1rem 2rem;
    border: 1px solid #b48100;
    background: #2f3133;
    color: #ffffff;
    border-radius: 0 8px 8px 0;
    font-size: 16px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] { -moz-appearance:textfield; }

input::placeholder {
    color: #ffffff;
    font-size: 16px;
}

#codigoPais {
    border-radius: 8px 0 0 8px;
    text-align: center;
}
</style>
