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
  <div>
    <p class="text-center">{{ props.title }}</p>
    <div class="input-group">
      <select id="codigoPais">
        <option value="" selected disabled hidden>
          {{ props.placeholder }}
        </option>
        <option value="+57">+57</option>
        <option value="+1">+1</option>
      </select>
      <input
        type="text"
        placeholder="0000 0000"
        id="numberContact"
        v-model="numeroContacto"
      />
    </div>
  </div>
</template>

<style scoped>

#numberContact {
  width: 100%;
}
.input-group {
  display: flex;
}
.text-center {
  margin: 5px 4px;
}

select,
input {
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #b48100;
  background: #2f3133;
  color: #ffffff;
  border-radius: 0 8px 8px 0;
}
#codigoPais {
  border-radius: 8px 0 0 8px;
  text-align: center;
}
</style>
