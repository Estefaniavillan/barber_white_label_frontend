<!-- <template>
    <button class="container_button" @click="isModalOpen = true">
        <img class="edit-icon" src="../../assets/img/icons/editIcon.svg" alt="icono de editar">
    </button>
    <CustomModal
            :is-modal-open="isModalOpen"
            title="Editar"
            primary-button-name="Guardar cambios"
            @on-close-modal="isModalOpen=false"
            @on-action="handleClickUpdate">
        <article class="body">
            <section>
                <p>Título de libro*</p>
                <input type="text" v-model="book.nom_lib">
                <p>Autor*</p>
                <input type="text" v-model="book.aut_lib">
                <p>Precio*</p>
                <input type="number" v-model="book.precio_lib">
                <p>Género*</p>
                <input type="text" v-model="book.gen_lib">
                <p>Cantidad disponible</p>
                <input type="number" v-model="book.stock">
                <p>Link de la portada del libro*</p>
                <input type="url" v-model="book.imagen">
            </section>
            <section class="container_preview">
                <p class="title_field">Vista previa</p>
                <img :src="book.imagen" alt="" v-if="isShowPreview()">
            </section>
        </article>
    </CustomModal>
</template>

<style scoped>

.container_button {
    border: none;
    background-color: transparent;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
}

.container_button:hover {
    background-color: white;
}

.body {
    display: flex;
    align-items: center;
}

.description {
    margin-bottom: 3rem;
}

.title_field {
    color: #8A939B;
    margin-top: 1rem;
    margin-bottom: 0;
}

input {
    background-color: #F5F7F9;
    border: none;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    width: 20rem;
}

.container_preview {
    margin-left: 2rem;
}

.container_preview img {
    width: 15rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 0.4rem;
}

</style> -->