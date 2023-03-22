let user = "usuario";
let password = "password";

function autenticar() {
  const inputuser = prompt("Ingrese su nombre de usuario:");
  const inputpassword = prompt("Ingrese su contraseña:");

  if (inputuser === user && inputpassword === password) {
    alert("Autenticación exitosa!");
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
}

function cambiarpassword() {
  const inputpasswordActual = prompt("Ingrese su contraseña actual:");
  const inputNuevapassword = prompt("Ingrese su nueva contraseña:");

  if (inputpasswordActual === password) {
    password = inputNuevapassword;
    alert("contraseña cambiada exitosamente!");
  } else {
    alert("contraseña actual incorrecta.");
  }
}
