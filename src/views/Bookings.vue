<script>
    import AddressName from '../components/common/ComponentBookings/AddressName.vue';
    import Number from '../components/common/ComponentBookings/Number.vue';
    import ServiceMethodTime from '../components/common/ComponentBookings/ServiceMethodTime.vue';
    import Calendar from '../components/common/ComponentBookings/Calendar.vue';
    import FooterB from '../components/common/FooterB.vue';

    
    export default {
      components: {
        AddressName,
        Number,
        ServiceMethodTime,
        Calendar,
        FooterB,
      },
    };
    </script>
    

<template>
  <div class="container">
    <h2>¡Reserva ahora!</h2>
    <hr>
    <div class="content-wrapper">
      <form class="form">
        <AddressName></AddressName>
        <Number></Number>
        <ServiceMethodTime></ServiceMethodTime>
        <Calendar></Calendar>
       <br>
        <button type="submit">¡Reservar ahora!</button>
      </form>
      <picture>
        <img src="../assets/img/bookings/Bookings.png" alt="">
      </picture>
      
    </div>
    
     </div>
     <FooterB></FooterB>
    </template>
    
    
 
  

  

  
<style scoped>

.container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  
}
h2{
  width: 804px;
  height: 67px;
  font-size: 64px;
  line-height: 67.2px;
  font-weight: 400;
  text-align: right;
}

hr{
  background-color: #B48100;
  width: 1222px;
  height: 2px;
 }
 form{
  
  width: 665px;
  height: 643px;

 }

.content-wrapper {
  display: flex;
  flex-direction: row-reverse;
}
button{
  background-color: #B48100;
  color:#ffffff;
  width: 665px;
  height: 48px;
  border-radius:12px;
  padding: 12px 48px 12px 48px;
  gap:10px;

}






</style>
  