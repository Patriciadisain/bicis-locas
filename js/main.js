function validateForm(){
	/* Escribe tú código aquí */
// variables para campos a verificar
var valorNombre = document.getElementById('name').value;
var valorApellido = document.getElementById('lastname').value;
var valorMail = document.getElementById('input-email').value;
var valorPass = document.getElementById('input-password').value;
var selecBici = document.querySelector('select').selectedIndex;
// verificar si está completo el campo
	if ( valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)) {
		alert('El campo Nombre es obligatorio');
		return false;
	}
	else if (/^[a-zA-Z]*$/.test(valorNombre) == false){
		alert('Nombre no válido, ingresar sólo letras.')
		return true;
	}
	else if (valorNombre.charAt(0).toUpperCase() !== valorNombre.charAt(0)){
		alert('Nombre no válido, primera letra mayúscula')
		return false;
	}
// verificar apellido ingresado
	if ( valorApellido == null || valorApellido.length == 0 || /^\s+$/.test(valorApellido)) {
		alert('El campo Apellido es obligatorio');
		return false;
	}
	else if (/^[a-zA-Z]*$/.test(valorApellido) == false){
		alert('Apellido no válido, ingresar sólo letras.')
		return true;
	}
	else if (valorApellido.charAt(0).toUpperCase() !== valorApellido.charAt(0)){
		alert('Apellido no válido, primera letra mayúscula')
		return false;
	}
// verificacion de correo
	if (valorNombre == null || valorNombre.length == 0){
		alert("El campo Correo es obligatorio");
	}
	else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valorMail) != true){
  		alert("La dirección de email es incorrecta.");
   		return false;
  	} 
 // verifficación de contraseña
 	if (valorPass.length == 0 ){
  		alert("El campo Correo es obligatorio");
  		return false;
	}
	else if (valorPass.length < 6){
		alert("Tu contraseña debe ser mayor a 6 caracteres");
		return false;
	}
	else if(valorPass == 123456 || valorPass == 098754){
		alert("Tu contraseña es débil");
		return false;
	}
// verificar seleccionar un tipo de bicicleta
	if( selecBici == null || selecBici == 0 ){
	alert("Por favor escoge tu tipo de bici")
  	return false;
}
// cierre de la función
}
