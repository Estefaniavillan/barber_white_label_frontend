// funcion async dos parametros , correo y contraseña 
// para que el usuario pueda loguearse en la app
// crear un if para validar el correo y contraseña sea igual al mismo correo y contraseña
// correo estefa@j.com 
//contraseña estefa123.


  
  async function iniciarSesion() {
    try {
      const resultado = await loginUsuario("estefa@j.com", "estefa123");
      console.log(resultado);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  iniciarSesion();