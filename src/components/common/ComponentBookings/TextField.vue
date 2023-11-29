<script setup>
const props = defineProps(["title", "modelValue", "placeholder"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <p class="text-center">{{ props.title }}</p>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style scoped>
.text-center {
  color: white;
}
input {
  width: 330px;
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #b48100;
  background: #2f3133;
}
.text-center {
  margin: 5px 4px;
}
</style>
