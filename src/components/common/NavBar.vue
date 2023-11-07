<template>
    <div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Servicios</a>
            <a href="#">Productos</a>
            <a href="#">Reservas</a>
            <a href="">Blog</a>
            
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
    color: #D75C37;
    font-weight: bold;
}
</style>
