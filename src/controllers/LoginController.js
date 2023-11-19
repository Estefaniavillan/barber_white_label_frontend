// funcion async dos parametros , correo y contraseña 
// para que el usuario pueda loguearse en la app
// crear un if para validar el correo y contraseña sea igual al mismo correo y contraseña
// correo estefa@j.com 
//contraseña estefa123.

async function loginUsuario(correo, contraseña) {
    // Supongamos que tienes un objeto de usuarios con información almacenada
    const usuarios = {
      "estefa@j.com": "estefa123",
      // Otros usuarios...
    };
  
    // Simulamos una espera de tiempo, por ejemplo, para una llamada a una base de datos
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Validamos el correo y la contraseña
    if (usuarios[correo] === contraseña) {
      return "Login exitoso";
    } else {
      throw new Error("Correo o contraseña incorrectos");
    }
  }
  
  // Ejemplo de uso
  async function iniciarSesion() {
    try {
      const resultado = await loginUsuario("estefa@j.com", "estefa123");
      console.log(resultado);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Llamamos a la función de inicio de sesión
  iniciarSesion();
  
                    



