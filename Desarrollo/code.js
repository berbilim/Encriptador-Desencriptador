/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar (){
    var texto = document.querySelector("#input-texto").value;

    let textoCifrado = "";

        for (var i = 0; i < texto.length; i++) {
         
            if (texto[i] == "e") {
                textoCifrado = textoCifrado + "enter";
            } else if (texto[i] == "i") {
                textoCifrado = textoCifrado + "imes";
            } else if (texto[i] == "a") {
                textoCifrado = textoCifrado + "ai";
            } else if (texto[i] == "o") {
                textoCifrado = textoCifrado + "ober";
            } else if (texto[i] == "u") {
                textoCifrado = textoCifrado + "ufat";
            }else {
                textoCifrado = textoCifrado + texto[i];
            }
            document.querySelector(".text-input-salida").value = textoCifrado;
            
        }    

    
    document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;


function desencriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;