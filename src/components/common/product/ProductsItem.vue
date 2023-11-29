<script setup>
//Son propiedades para el componente
const props = defineProps(['id', 'image', 'title', 'brand', 'price'])
console.log(props);
</script>

<template>
  <div class="producto">
    <img class="imagen" :src="image" alt="Nombre del Producto">
    <div class="detalle_producto">
      <!--Las dobles llaves nos sirven para utilizar las propiedades del componentes-->
      <h5 class="titulo">{{ title }}</h5>

      <h5 class="nombre">{{ brand }}</h5>
      <h5 class="precio">${{ price }}</h5>
    </div>
  </div>
</template>
  
<style scoped>
.producto {

  background-color: black;
  display: flex;
  flex-direction: column;
  background-color: #F5F7F9;
  border-radius: 1rem;
  overflow: hidden;
  width: 15rem;

}


.imagen {
  height: 25rem;
  object-fit: cover;
}


.detalle_producto {
  padding: 0.5rem 1rem;
  stroke-width: 1.5px;
  stroke: var(--gray-75, #1a1b1b);
}

.detalle_producto .titulo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.detalle_producto .nombre {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #5B656F;
}

.detalle_producto .precio {

  color: #79AC8B;
  text-align: end;
}
</style>