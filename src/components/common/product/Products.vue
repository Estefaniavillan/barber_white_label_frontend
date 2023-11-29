<script setup>
import ProductsItem from './ProductsItem.vue';

const props = defineProps(['products'])
</script>
<template>
    <section>
        <div class="products">
            <ProductsItem v-for="product in props.products" :image="product.image" :title="product.title"
                :brand="product.brand" :price="product.price" :key="product.id" />
        </div>
    </section>
</template>
<style scoped>
section {
    margin: auto 2rem;
}

h4 {
    color: #2C353E;
    width: 155px;
    height: 41px;
    left: 96px;
    top: 610px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
}

.products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>