<script setup>
import Admin_page from './components/Admin_page.vue';
import LoginAdmi from './components/Login_admi.vue';
import Reservas from './components/Reservas.vue';
import WhatsappB from './components/common/whatsappB.vue';
import FooterB from './components/common/FooterB.vue';
import CareAndWelfare from './components/Creacion_Servicios.vue';
import CustomFieldProducts from './components/common/ComponentBlog/CustomFieldProducts.vue';

</script>

<template>
  <Admin_page />,
  <LoginAdmi msg="Login" />,
  <Reservas />,
  <WhatsappB />,
  <CareAndWelfare />,
  <CustomFieldProducts />,
  <FooterB />,
</template>

<style scoped>
</style>


<style>
#app{
  background-color: rgb(15, 15, 15);
  color: #ffffff;
}
</style>
