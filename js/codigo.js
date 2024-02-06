//asigancion de variables

var texto = new String();
var textoIngresado = new Array();
var numeros = new Array();
var textoCodificado = new String();
var textoDecodificado = new String();
var textoCopy = new String;

var decodificaa = new String();
var decodificae = new String();
var decodificai = new String();
var decodificao = new String();
var decodificau = new String();



function codificar() {

borrado();
achicarimagen();

  texto = document.getElementById("ingreso").value;
  
  textoIngresado = texto.split("");
  let largoCadena = texto.length;
 
  for (i = 0; i < textoIngresado.length; i++) {
    if (textoIngresado[i] === "a") {
      textoIngresado[i] = "ai";
    } else if (textoIngresado[i] === "e") {
      textoIngresado[i] = "enter";
    } else if (textoIngresado[i] === "i") {
      textoIngresado[i] = "imes";
    } else if (textoIngresado[i] === "o") {
      textoIngresado[i] = "ober";
    } else if (textoIngresado[i] === "u") {
      textoIngresado[i] = "ufat";
    }

    textoCodificado = textoIngresado.join("");
   // document.getElementById("mostrarResultado").innerHTML = textoCodificado;


    mostrarEnPantalla(textoCodificado);


    //lleno variable textoCopy con valor de salida encriptado
    textoCopy = textoCodificado;

  }
}





function decodificar(){

  borrado();
  achicarimagen();

  //asigna el texto que esta en textarea a una variable
  texto = document.getElementById("ingreso").value;
  
  
  //decodifica en la cadena de texto las pautas de encriptacion
    decodificaa = texto.replaceAll('ai','a');
    decodificao = decodificaa.replaceAll('ober','o');
    decodificae = decodificao.replaceAll('enter', 'e');
    decodificai = decodificae.replaceAll('imes', 'i');
    decodificau = decodificai.replaceAll('ufat', 'u');
   
      //Despues de pasar por todas las pautas
    textoDecodificado = decodificau;
   
    //muestra texto decodificado
    mostrarEnPantalla(textoDecodificado);



    //lleno variable textoCopy con valor de salida Desencriptado
    textoCopy = textoDecodificado;
  }



  function copiar(){

    //lleno el portapapeles con el resultado de la encriptacion desencriptacion 
    navigator.clipboard.writeText(textoCopy);
  
    //lenar el textarea con el clipboard
    document.getElementById("ingreso").value = textoCopy;
 }
  

  function borrado(){
    document.getElementById("mensaje1").innerHTML = " ";
    document.getElementById("mensaje2").innerHTML = " ";

  }

  function achicarimagen(){
   var lupaimg = document.getElementById("imagenlupa");
   lupaimg.style.width = "20%";
   lupaimg.style.heigth = "20%";
   
  }



  function mostrarEnPantalla(valorDeSalida){
    document.getElementById("mostrarResultado").innerHTML = valorDeSalida;
  }



  function borrando(){
    document.getElementById("ingreso").value = "";
    }


    
