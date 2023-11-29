<script setup>
import Navbar from "../components/common/NavBar.vue";
import CustomFooter from "../components/common/CustomFooter.vue";
import Whatsapp from "../components/common/Whatsapp.vue";
</script>
<template>
  <Navbar id="header" />

  <div class="containerBlog">
    <h2>Cuidado y bienestar</h2>
    <h3>
      CÒMO EL ESTRES AFECTA LA VELOCIDAD DEL <br />
      CRECIMIENTO DEL CABELLO.
    </h3>

    <p>
      Generalmente, el cabello crece entre 1 cm y 1,5 cm por mes; sin embargo,
      hay una variedad de factores  que<br> pueden afectar al crecimiento del
      cabello. Al conocer estos condicionantes, podemos tener mayor control<br> para
      maximizar la rapidez con la que crece el cabello. ¿Quieres saber cuáles
      son? ¡Vamos a ello!
    </p>

    <div class="picture">
      <img class="imageOne" src="../assets/img/Blog/mit.jpg" alt="imgBlog" />
      <img class="imageTwo" src="../assets/img/Blog/Group.png" alt="group">
    </div>

    <h3 class="causes">Las 7 causas principales que influyen en el <br> crecimiento capilar.</h3>

    <ol>
      <li>
        <strong>Los genes.</strong> Los factores genéticos son responsables del
        color del cabello, de la densidad, la textura y el crecimiento del
        cabello. En personas genéticamente propensas a la caída del cabello, la
        dihidrotestosterona inicia la miniaturización de los folículos pilosos.
        Con el tiempo, el cabello se vuelve más delgado y el volumen general de
        los mechones disminuye. Eventualmente, el folículo piloso puede dejar de
        producir cabello por completo.
      </li>
      <br>
      <li>
        <strong>El clima.</strong> Se dice que el cabello crece más rápido en
        climas cálidos. Por otro lado, el sol puede dañar el cuero cabelludo y
        el cabello. En este sentido, se recomienda proteger el cabello de los
        rayos UVA con una gorra o un protector solar, sobre todo, en los meses
        de verano. El frío también puede afectar el crecimiento del cabello. El
        aire frío puede hacer que el cabello se seque, se vuelva frágil y más
        quebradizo.
      </li>
      <br>
      <li>
        <strong>Las hormonas. </strong>Ciertas hormonas pueden afectar el
        crecimiento del cabello; sobre todo, la tiroidea y el estrógeno. Tanto
        el hipotiroidismo como el hipertiroidismo pueden conducir a la pérdida
        de cabello. El estrógeno aumenta el número de folículos en el ciclo de
        crecimiento del cabello, como suele ocurrir con el embarazo; pero
        después del parto el nivel de esta hormona desciende y el cabello
        comienza a caerse.
      </li>
      <br>
      <li>
        <strong>Estado del cabello y del cuero cabelludo.</strong> Hay una serie
        de factores que pueden contribuir a un crecimiento más lento del
        cabello. Estos son la tiña, la foliculitis o la inflamación de los
        folículos pilosos, la psoriasis y la dermatitis seborreica. El cabello
        seco es propenso a la rotura y la caída del cabello.
      </li>
      <br>
      <li>
        <strong>Descanso y ejercicio. </strong>Tener un descanso adecuado es
        importante para el cuerpo y, en consecuencia, para nuestro cabello. La
        falta de sueño puede afectar negativamente a varios procesos corporales,
        como puede ser el crecimiento del cabello. En este sentido, es muy
        importante poder dormir al menos 7 horas al día. Respecto al ejercicio,
        su práctica aumenta el flujo de sangre al cuero cabelludo, lo que
        procura una mejor oxigenación y distribución de nutrientes.
      </li>
      <br>
      <li>
        <strong>Problemas de salud.</strong> Varias condiciones médicas como
        problemas de tiroides, infecciones del cuero cabelludo, lupus, liquen
        plano y alopecia areatea pueden afectar negativamente el estado general
        del cabello.
      </li>
    </ol>
  </div>
  
  <Whatsapp></Whatsapp>
  <CustomFooter  />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #101010; 
}
#header {
  background-color: #101010; 
}
.containerBlog {
  padding: 77px 0px 109px 114px;
}

h2 {
  color: #F5F7F9;
  font-size: 30px;
  font-weight: 500;
}

h3 {
  margin: 0 24px 54px 0;
  color: #FFF;
  font-size: 30px;
  font-weight: 700;
}

p {
  font-size: 16px;
  font-weight: 400;
  color: #F5F7F9;
  margin-bottom: 48px;
  
}

@media screen and (max-width: 768px) {
  p {
    font-size: 14px; 
    margin-bottom: 24px; 
  }
}
.imageOne {
  width: 20rem;
  height: 20rem;
}

.imageTwo {
  width: 20rem;
  height: 20rem;
  margin-left: 53px;
}

.causes {
  margin-top: 48px;
  color: #F5F7F9;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
}

ol {
  color: #F5F7F9;
  font-size: 16px;
  width: 45rem;
}

</style>
