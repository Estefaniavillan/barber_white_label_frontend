<template>
    <nav>
        <div class="header_container">
            <img class="logo" src="../../../assets/img/logonav.png" alt="Logo">
            <router-link to="home">
                <button class="button_product"><strong>Productos</strong></button>
                <button class="button_service"><strong>Servicios</strong></button>
            </router-link>
        </div>
        <router-link to="home">
            <div class="exit_container">
                <img class="exit" src="../../../assets/img/Admin_product/salir.png " alt="Salir">
                <p> <a href="#">Salir</a></p>
            </div>
        </router-link>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 2rem 2rem 0;
    background: #262727;
    border-radius: 0 1rem 1rem 0;
    padding: 1.5rem;
    height: 100vh;
}

.header_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

a {
    text-decoration: none;
}

.button_product, .button_service {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    background: #101010;
    border-radius: 0.5rem;
    color: white;
    font-size: 16px;
    border: none;
    width: 100%;
    padding: 0.7rem 3rem;
}

.button_service {
    background: #262727;
}

.exit_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.exit {
    width: 1.5rem;
}

p {
    width: 50%;
}

p a {
    color: #fff;
    font-size: 16px;
}
</style>