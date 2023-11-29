<script setup>
const props = defineProps({
    urlIcon: String,
    title: String,
    list: Array,
});
</script>

<template>
    <div class="container-card">
        <header>
            <div class="circle">
                <picture>
                    <img :src="props.urlIcon" alt="circulo amarillo"/>
                </picture>
            </div>
        </header>
        <div class="body-card">
            <h2>{{ props.title }}</h2>
            <ul class="items">
                <li v-for="item in props.list">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.container-card {
    display: flex;
    flex-direction: column;
    background-color: rgba(138, 147, 155, 0.25);
    margin: 1rem 1rem;
    padding: 1rem 2rem;
    width: 14rem;
    border-radius: 1rem;
    position: relative;
}

header {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -4rem;
    left: 0;
    right: 0;
    bottom: 0;
}

header .circle {
    display: flex;
    height: 8rem;
    width: 8rem;
    justify-content: center;
    align-items: center;
    background-color: #b48100;
    border-radius: 4rem;
}

.body-card {
    margin-top: 4rem;
}

.body-card h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 40px;
    font-weight: 400;
}

/*.circle {*/
/*    display: flex;*/
/*    height: 8rem;*/
/*    width: 8rem;*/
/*    margin-top: 4rem;*/
/*    background-color: #b48100;*/
/*    position: absolute;*/
/*    top: 0;*/
/*}*/

/*.barberia-box {*/
/*    width: 311px;*/
/*    height: 306px;*/
/*    background-color: rgba(138, 147, 155, 0.2);*/
/*    border-radius: 9px;*/
/*    margin: 9rem 20px;*/

/*}*/

/*.information {*/
/*    width: 254px;*/
/*    height: 174px;*/
/*    padding: 3rem 3rem;*/
/*}*/

/*.information h2 {*/
/*    font-weight: 400;*/
/*    font-size: 40px;*/
/*    line-height: 42px;*/
/*    text-align: center;*/
/*}*/
</style>
