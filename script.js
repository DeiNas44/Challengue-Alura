function encriptar(){
	var  frase = document.getElementById("textoEncriptado").value.toLowerCase();	
	var  textoEncriptado = frase.replace(/e/img, "enter");
	var  textoEncriptado = textoEncriptado.replace(/i/img, "imes");
	var  textoEncriptado = textoEncriptado.replace(/a/img, "ai");
	var  textoEncriptado = textoEncriptado.replace(/o/img, "ober");
	var  textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

	document.getElementById("textoEspecial").innerHTML = textoEncriptado;
}
function desencriptador(){
	var  frase = document.getElementById("textoEncriptado").value.toLowerCase();	
	var  textoEncriptado = frase.replace(/enter/img, "e");
	var  textoEncriptado = textoEncriptado.replace(/imes/img, "i");
	var  textoEncriptado = textoEncriptado.replace(/ai/img, "a");
	var  textoEncriptado = textoEncriptado.replace(/ober/img, "o");
	var  textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

	document.getElementById("textoEspecial").innerHTML = textoEncriptado;
}
function copiar() {
	var texto = document.querySelector("#textoEspecial");
	texto.select();
	document.execCommand("copy");
}




//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"