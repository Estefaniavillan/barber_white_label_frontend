<script setup>
defineProps(['image', 'title', 'brand'])
</script>
<template>
    <div class="item">
        <img class="imagen" :src="image" alt="imagen">
        <div class="info_item">
            <h5>{{ title }}</h5>
            <h6>{{ brand }}</h6>
        </div>
    </div>
    <div class="linea"></div>
</template>



<style scoped>
.item {
    display: flex;
}

img {
    width: 8rem;
    height: 14rem;
    border-radius: 1rem;
    object-fit: cover;

}

.info_item{
    max-width: 10rem;
    margin-left: 1rem;
}

h5 {
    color: black;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

h6 {
    color: #5B656F;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.linea{
    background-color: #14271b;
    height: 0.1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
</style>