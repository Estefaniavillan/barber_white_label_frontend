<template>
    <nav>
      <img src="../../../assets/img/logo.png" alt="Logo" class="logo">
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
        background: rgba(16, 16, 16, 0.50);        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  
      .logo {
        width: 50px; /* Ajusta el tamaño del logo según sea necesario */
      }
  
      ul {
        list-style: none;
        display: flex;
      }
  
      li {
        margin-right: 20px;
      }
  
      a {
        text-decoration: none;
        color: #fff;
        position: relative;
      }
  
      a:hover::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        bottom: -5px;
        left: 0;
      }
  
  </style>