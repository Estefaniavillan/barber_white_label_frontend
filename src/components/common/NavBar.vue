<template>
    <div>
        <nav>
            <img src="../../assets/img/Layer_1.svg" alt="Logo" class="logo" />
            <router-link to="/" exact-active-class="active">Home</router-link>            
            <router-link to="/ServicesAdmin" exact-active-class="active">Servicios</router-link>            
            <router-link to="/ProductsAdmin" exact-active-class="active">Productos</router-link>
            <router-link to="/" exact-active-class="active">Blog</router-link>
        
        </nav>
    </div>
</template>

<style scoped>
nav {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
}

nav a {
    color: #5B656F;
    text-align: center;
    padding: 1rem 2rem;
    text-decoration: none;
}

nav a:hover {
    color: #5c37d7;
}

.active {
    color: #3737d7;
    font-weight: bold;
}
</style>


