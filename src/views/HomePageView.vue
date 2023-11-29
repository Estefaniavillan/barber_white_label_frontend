<script setup>
import NavBar from "../components/common/NavBar.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
import ServicesHome from "../components/home/ServicesHome.vue";
import BookingsHome from "../components/home/BookingsHome.vue";
import WelcomeHome from "../components/home/WelcomeHome.vue";

import {getHome} from "../controllers/HomeController.js";
import {onMounted, ref} from "vue";

const services = ref([]);
onMounted(async () => {
    const home = await getHome();
    services.value = home.services;
    console.log(home.services);
});
</script>
<template>
    <main>
        <article class="navBar">
            <NavBar/>
        </article>
        <article class="welcome">
            <WelcomeHome/>
        </article>
        <article class="service">
            <ServicesHome :services="services"/>
        </article>
        <article class="bookings">
            <BookingsHome/>
        </article>
    </main>
    <Whatsapp></Whatsapp>
</template>

<style scoped>

main {
    display: flex;
    flex-direction: column;
}

.navBar {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
}

.welcome {
    display: flex;
    flex-direction: column;
    color: white;
}
</style>
