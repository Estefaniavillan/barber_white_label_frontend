<template>
  <nav>
    <img src="../../../assets/img/logo.png" alt="Logo" class="logo" />
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: rgba(16, 16, 16, 0.5);
  display: flex;
  height: 137px;
  justify-content: center;
  align-items: center;
  gap: 729px;
  
}
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column; 
    gap: 10px; 
    height: auto; 
  }
}
.logo {
  width: 129px;
  height: 72px;
  
}

ul {
  list-style: none;
  display: flex;
  gap: 60px;
  align-items: flex-start;
}


a {
  text-decoration: none;
  color:#fff ;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  
}


</style>
