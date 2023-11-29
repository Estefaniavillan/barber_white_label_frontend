<template>
    <nav>
        <picture>
            <img class="logo" src="../../../assets/img/logonav.png" alt="Logo">
        </picture>
        <section class="button-container">
            <router-link to="home">
                <button class="button_product"><strong>Productos</strong></button>
            </router-link>
            <router-link to="service">
                <button class="button_service"><strong>Servicios</strong></button>
            </router-link>
        </section>
        <section>
            <router-link to="home">
                <div class="exit_container">
                    <img class="exit" src="../../../assets/img/Admin_product/salir.png " alt="Salir">
                    <p><a href="#">Salir</a></p>
                </div>
            </router-link>
        </section>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #262727;
    border-radius: 0 1rem 1rem 0;
    min-height: 100vh;
}

picture {
    margin: 1.5rem 2rem;
}

.button-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    margin: 1rem 1.5rem;
}

.button-container button {
    margin: 1rem 0;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 3rem;
    background: #101010;
}

.exit_container {
    display: flex;
    justify-content: center;
    padding: 1rem;
    align-items: center;
}

.exit_container img {
    width: 1.5rem;
    height: 1.5rem;
}

a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    margin-left: 1rem;
}

/*.logo {*/
/*    display: flex;*/
/*    align-items: center;*/
/*}*/

/*a {*/
/*    text-decoration: none;*/
/*}*/

/*.button_product, .button_service {*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    margin: 1.5rem 0;*/
/*    background: #101010;*/
/*    border-radius: 0.5rem;*/
/*    color: white;*/
/*    font-size: 16px;*/
/*    border: none;*/
/*    width: 100%;*/
/*    padding: 0.7rem 3rem;*/
/*}*/

/*.button_service {*/
/*    background: #262727;*/
/*}*/

/*.exit_container {*/
/*    display: flex;*/
/*    justify-content: space-around;*/
/*    align-items: center;*/
/*}*/

/*.exit {*/
/*    width: 1.5rem;*/
/*}*/

/*p {*/
/*    width: 50%;*/
/*}*/

/*p a {*/
/*    color: #fff;*/
/*    font-size: 16px;*/
/*}*/
</style>
<script setup>
</script>