<script setup>

</script>

<template>
    <header>
        <div class="line"></div>
        <section>
            <h2>¡Bienvenido de nuevo!</h2>
            <p>Gestiona todos los productos de tu página de una manera fácil y rápida</p>
        </section>
        <button class="container_button">Añadir un producto</button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    background-color: #262727;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
}

.line {
    width: 0.5rem;
    background-color: #B48100;
    border-radius: 0.2rem;
}

section {
    margin: 0.2rem 1rem;
}

section h2 {
    color: white;
    font-weight: bold;
}

section p {
    font-size: 16px;
    color: white;
}

.container_button {
    background-color: #B48100;
    height: max-content;
    margin-left: auto;
    padding: 0.4rem 2rem;
    border-radius: 0.5rem;
    align-self: center;
    font-size: 16px;
    border: 0;
    color: white;
    font-size: 16px;
}
</style>