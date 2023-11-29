<template>
    <nav>
        <img src="../../assets/img/logo.png" alt="Logo" class="logo"/>
        <article>
            <router-link to="/" exact-active-class="active">Home</router-link>
            <router-link to="/services" exact-active-class="active">Servicios</router-link>
            <router-link to="/products" exact-active-class="active">Productos</router-link>
            <router-link to="/blog" exact-active-class="active">Blog</router-link>
        </article>
    </nav>
</template>

<style scoped>
nav {
    background: rgba(16, 16, 16, 0.5);
    display: flex;
    min-height: 7rem;
    justify-content: space-between;
    align-items: center;
}

nav article {
    display: flex;
    gap: 7rem;
    align-items: center;
    margin-right: 60px;
}

@media screen and (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 10px;
        height: auto;
    }
}

.logo {
    width: 129px;
    height: 72px;

}

ul {
    list-style: none;
    display: flex;
    gap: 60px;
    align-items: flex-start;
}


a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 900;

}


</style>
<script setup>
</script>