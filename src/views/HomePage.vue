 <script>
 import Whatsapp from '../components/common/Whatsapp.vue'
 import NadvarHome from '../components/common/ComponentNavbar/NadvarHome.vue';

 export default {
  components: {
   Whatsapp,
   NadvarHome,
},
};
</script>
<template>
    <NadvarHome></NadvarHome>
    <div class="containerHome">
      <div class="picture">
        <div class="textContainer">
          <h2>Tradición y Tendencia <br> se unen en <u>cada estilo,</u> <br> creando tu look único</h2>
          <img class="vector" src="../assets/img/Vector.png" alt="vector">
          <p>Nuestros expertos barberos moldean tu imagen con pasión. <br>
            ¡Reserva hoy y descubre el poder de un estilo excepcional en Barbería Cortés! </p>
        </div>
      </div>
    </div>
    <div class="containerBox"></div>
    <Whatsapp></Whatsapp>
  </template>
  
  <style>
  .containerBox {
    width: 368px;
    height: 782px;
    flex-shrink: 0;
    border-radius: 14px;
    opacity: 0.1;
    background: var(--gray-25, #8A939B);
    margin: 141px 1029px 2011px 46px;
  }
  
  .containerHome {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #101010 0%, #101010 25.52%, rgba(16, 16, 16, 0.00));
  }
  
  .picture {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/corte.png');
    z-index: -1;
    background-size: cover;
  }
  
  .textContainer {
    flex-direction: column;
    margin: 15rem 45rem 0 0;
    display: flex;
    align-items: center;
    text-align: center
  }
  .vector{
    
    margin-right: 25rem;
  }
  .textContainer h2 {
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 105%;
  }
   .textContainer h2 p{
    
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
   }
  </style>
  