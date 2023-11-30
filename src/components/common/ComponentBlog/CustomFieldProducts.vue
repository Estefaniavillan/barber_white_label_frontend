<script setup>
const props = defineProps(["title", "tipo", "price"])
</script>

<template>
    <div class="product">
        <img class="img" src="" alt="">
        <p class="title">{{ props.title }}</p>
        <p class="type">{{ props.tipo }}</p>
        <p class="price">{{ props.price }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="340" height="2" viewBox="0 0 340 2" fill="none">
  <path d="M1 1C256.2 1 332.667 1 339 1" stroke="#B48100" stroke-linecap="round"/>
</svg>
    </div>
</template>

<style scoped>
.product {
    display: flex;
    align-items: flex-start;
    gap: 24px;
}

.img {
    width: 127.33px;
    height: 190px;
    border-radius: 12px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.title {
    width: 187px;
    height: 22px;
    overflow: hidden;
    color: var(--gray-100, #FFF);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Nunito;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.type {
    width: 136px;
    height: 22px;
    overflow: hidden;
    color: var(--gray-75, #F5F7F9);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.price {
    width: 136px;
    height: 22px;
    overflow: hidden;
    color: var(--gray-75, #F5F7F9);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>