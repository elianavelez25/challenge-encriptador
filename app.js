function encriptar() {
  var texto = document.getElementById("textoOriginal").value;
  
  // Clave de encriptación. Puede ser cualquier cadena de texto.
  var clave = "clave_secreta";
  
  // Encriptar el texto utilizando AES
  var textoEncriptado = CryptoJS.AES.encrypt(texto, clave).toString();
  
  // Mostrar el texto encriptado
  document.getElementById("textoEncriptado").value = textoEncriptado;
}
function desencriptar() {
  var textoEncriptado = document.getElementById("textoEncriptado").value;
  
  // Clave de encriptación. Debe ser la misma que se utilizó para encriptar.
  var clave = "clave_secreta";
  
  // Desencriptar el texto utilizando AES
  var bytes = CryptoJS.AES.decrypt(textoEncriptado, clave);
  var textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
  
  // Mostrar el texto desencriptado
  document.getElementById("textoDesencriptado").value = textoDesencriptado;
}
function limpiar() {
  document.getElementById("textoOriginal").value = "";
  document.getElementById("textoEncriptado").value = "";
  document.getElementById("textoDesencriptado").value = "";
}
