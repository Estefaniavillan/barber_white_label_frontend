 <script>
 import Whatsapp from '../components/common/Whatsapp.vue'


 export default {
  components: {
   Whatsapp,
},
};
</script>
 <template>
    
    <div class="container">
    <div class="picture" >

    <div class="textContainer">
        <h2>Tradición y Tendencia <br>
         se unen en cada estilo, creando tu look único</h2>
        <p>Nuestros expertos barberos moldean tu imagen con pasión. <br>
        ¡Reserva hoy y descubre el poder de un estilo excepcional en Barbería Cortés! </p>

        <button> <a href="Bookings.vue"></a></button>
    </div>
</div>
</div>
<div class="containerBox">
</div >
    <Whatsapp></Whatsapp>
</template>
<style>

.containerBox {
    width:369px;
   height:782px;
   top:191px;
   left:46px;
   border-radius: 14px;
   opacity:10%;
    
    background-color: #8A939B;
}
 

.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
    

}
.picture{
    position: absolute;
   
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/corte.png'); 
    z-index: -1; /* Coloca la imagen detrás de los demás elementos */
    background-size: cover; /* Ajusta el tamaño para cubrir toda la pantalla */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; /* Ajusta el color del texto para que sea legible en la imagen */
    font-size: 24px;
  }

  .textContainer{
    position: absolute;
    color: #ffffff;

  }
</style>