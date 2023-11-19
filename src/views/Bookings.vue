<script>
    import AddressName from '../components/common/ComponentBookings/AddressName.vue';
    import Number from '../components/common/ComponentBookings/Number.vue';
    import ServiceMethodTime from '../components/common/ComponentBookings/ServiceMethodTime.vue';
    import Calendar from '../components/common/ComponentBookings/Calendar.vue';
    import BookNow from '../components/common/ComponentBookings/BookNow.vue'
    import Whatsapp from '../components/common/Whatsapp.vue'
    import FooterB from '../components/common/FooterB.vue';

    export default {
      components: {
        AddressName,
        Number,
        ServiceMethodTime,
        Calendar,
        BookNow,
        Whatsapp,
        FooterB,
      },
    };
    </script>
    

<template>
  <div class="container">
    <h2>¡Reserva ahora!</h2>
    <picture>
      <img src="../assets/img/bookings/Rectangle 45.png" alt="">
    </picture>
    <div class="content-wrapper">
      <form class="bookings">
        <AddressName></AddressName>
        <Number></Number>
        <ServiceMethodTime></ServiceMethodTime>
        <Calendar></Calendar>
        
        <BookNow></BookNow>
      </form>
      <picture>
        <img src="../assets/img/bookings/Bookings.png" alt="">
      </picture>
      
    </div>
    
     </div>
     <br>
     <br>
     
     <Whatsapp></Whatsapp>
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


 
.bookings{
  width: 619px;
  display: flex;
  flex-direction: column;
}
.content-wrapper {
  display: flex;
  flex-direction: row-reverse;
}






</style>
  