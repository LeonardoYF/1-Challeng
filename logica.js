
//arreglos necesarios
var arregloDe = ["a","e","i","o","u"];
var arregloEn = ["ai","enter","imes","ober","ufat"];
//variables objetos boton que usaremos
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
var botonCopiar = document.getElementById("boton-copiar");
//variables objetos texto
var frase = "";
var fraseaux="";
var textoOriginal = document.getElementById("texto-original");
var textoEncriptado = document.getElementById("texto-encriptado");
//codigo de encriptador
function encrip(letra){
    for(var i=0 ; i< arregloDe.length+1 ; i++){
        if(arregloDe[i] == letra){
            return arregloEn[i];
        }
        if(i==5){
            return letra;
        }
    }
}   
function encriptar(){
    frase = document.getElementById("texto-original").value;

    for(var i = 0 ; i<frase.length ; i++){
        fraseaux =fraseaux+ encrip(frase.charAt(i));
    }
    textoEncriptado.value = fraseaux;
}

//codigo de desencriptador
function desencriptar(){
    frase = document.getElementById("texto-original").value;
    fraseaux = desencrip(frase);
    textoEncriptado.value = fraseaux;
}
function desencrip(frase){
    var resp = "";
    var bandera
    var i = 0 ;
    while(i<frase.length){
        bandera = false;
        for(var q = 0 ; q<5;q++){
            if(frase.charAt(i)==arregloDe[q]){
                if(frase.substr(i,arregloEn[q].length)==arregloEn[q]){
                    bandera = true;
                    resp = resp+arregloDe[q];
                    i = i + arregloEn[q].length;
                }
            }
        }
        if(bandera==false){
            resp = resp+frase.charAt(i);
            i++;
        }
    }
    return resp;
}
//codigo para copiar
function copiarP(){
    textoEncriptado.select();
    document.execCommand('copy');

}
//eventos click
//botonEncriptar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);
botonEncriptar.onclick = encriptar;
botonCopiar.addEventListener("click",copiarP);