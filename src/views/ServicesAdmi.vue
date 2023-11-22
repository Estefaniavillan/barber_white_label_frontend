<script >
import ContainerField from '../components/common/ComponentServicesAdmi/ContainerField.vue'



export default {
  components: {
   ContainerField,
},
};
</script>

<template>
  
  <div class="container">
    <div class="imagen">
  </div>
</div>
  <div class="containerServices">
    <h2>Servicios</h2>
    <picture>
      <img class="rectangle" src="../assets/img/bookings/Rectangle 45.png" alt="">
    </picture>
  <div class="content-wrapper">
  <ContainerField />
  <ContainerField  />
  <ContainerField  />
  <picture>
    <img class="scissors" src="../assets/img/servicesAdmi/noun-barber-56898974.png" alt="Imagen tijera"/>
    <img class="other" src="../assets/img/servicesAdmi/noun-barber-56898973.png" alt="Imagen mascarilla"/>
    <img class="faceMask" src="../assets/img/servicesAdmi/noun-barber-56898972.png" alt="otros"/>
  </picture>
  </div>
  
 </div>




  </template>
  
  <style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
  }
  
  .imagen {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/servicesAdmi/barba.png'); 
    background-size: cover; 
    z-index: -1; /* Coloca la imagen detrás de los demás elementos */
    opacity: 60; /* Ajusta la opacidad según desees */
  }
  .rectangle{
    position: relative;

  }
  .scissors{
    display: flex;
    position: absolute;
    margin: -24rem 13.5rem;
  }
  .faceMask{
    display: flex;
    position: absolute;
    margin: -24rem 37rem;
  }
  .other{
    display: flex;
    position: absolute;
    margin: -24rem 60.5rem;
}
  
  .containerServices{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
    height: 1177px;
    
  
  }
  .content-wrapper{
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin: 4rem 4rem 4rem 4rem;
    z-index: 90;
   
     
    }
    h2 {
      width: 1200px;
      height: 20px;
      font-size: 64px;
      line-height: 67.2px;
      font-weight: 400;
      text-align:left ;
      z-index: 90;

     
    }
    
  </style>