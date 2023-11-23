<!-- <template>
    <button class="container_button" @click="isModalOpen = true">
        Añadir libro
    </button>
    <CustomModal
            :is-modal-open="isModalOpen"
            title="Añadir un producto"
            primary-button-name="Añadir"
            @on-close-modal="()=>isModalOpen=false"
            @on-action="handleClickCreate"
    >
        <article class="body">
            <section>
                <p class="description">Para añadir, completa los espacios vacíos</p>
                <p class="title_field">Título de libro*</p>
                <input type="text" v-model="book.nom_lib">
                <p class="title_field">Autor*</p>
                <input type="text" v-model="book.aut_lib">
                <p class="title_field">Precio*</p>
                <input type="number" v-model="book.precio_lib">
                <p class="title_field">Género*</p>
                <input type="text" v-model="book.gen_lib">
                <p class="title_field">Cantidad disponible</p>
                <input type="number" v-model="book.stock">
                <p class="title_field">Link de la portada del libro*</p>
                <input type="url" v-model="book.imagen">
                <pre>{{book.imagen}}</pre>
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
    background-color: #D75C37;
    height: max-content;
    margin-left: auto;
    padding: 0.4rem 2rem;
    border-radius: 0.5rem;
    align-self: center;
    border: 0;
    color: white;
    font-size: 16px;
}

.container_button:hover {
    background-color: #BF3D16;
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