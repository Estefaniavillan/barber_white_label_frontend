<template>
    <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
        <!-- your form inputs goes here-->
        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button type="submit">Login</button>
    </form>
</template>

<script>
    import { ref } from 'vue';
    // Import the method.
    import { useLoading } from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    // Init plugin

    export default {
      setup() {
        const fullPage = ref(true);
        let formContainer = ref(null);

        const submit = () => {
          let loader = useLoading();
          loader.show({
            // Optional parameters
            container: this.fullPage ? null : formContainer.value,
            canCancel: true,
            onCancel: onCancel,
          });
                // simulate AJAX
          setTimeout(() => {
            loader.hide()
          },5000)                 
        };

        const onCancel =() => {
          console.log('User cancelled the loader.')
        };   
        return {
          fullPage,
          formContainer,
          submit
        }
      },
    }
</script>