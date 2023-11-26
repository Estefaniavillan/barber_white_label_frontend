<template>
    <div>
        <nav>
            <router-link to="/" exact-active-class="active">PAGINA PRINCIPAL</router-link>            
            <router-link to="/LoginAdmin" exact-active-class="active">LOGIN ADMIN</router-link>            
            <router-link to="/ProductsAdmin" exact-active-class="active">ADMINISTRADOR DE PRODUCTOS</router-link>
            <router-link to="/whobook" exact-active-class="active">¿ Quienes Somos ?</router-link>
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