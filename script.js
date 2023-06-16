const entradaTexto = document.querySelector(".entrada-texto");
const mensaje = document.querySelector("#mensaje");


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }
    }

    return stringEncriptada;

}



function btnEncriptar() {

    var textoEncriptado = encriptar(entradaTexto.value);

    mensaje.value = textoEncriptado

    if (entradaTexto.value.length == "") {

        document.getElementById('info-rectangulo-1').style.display = 'inline-block';
        document.getElementById('info-rectangulo-2').style.display = 'none';
        document.getElementById('boton-3').style.display = 'none';
        alert("No se ingreso texto a incriptar");
    }


    else {
        document.getElementById('info-rectangulo-1').style.display = 'none';
        document.getElementById('info-rectangulo-2').style.display = 'none';
        document.getElementById('muneco').style.display = 'none';
        document.getElementById('boton-3').style.display = 'inline-block';
    }


    entradaTexto.value = "";

}



function btnLimpiar() {

    mensaje.value = "";
    entradaTexto.value = "";
    document.getElementById('info-rectangulo-2').style.display = 'inline-block';
    document.getElementById('muneco').style.display = 'inline-block';
    document.getElementById('info-rectangulo-1').style.display = 'none';
    document.getElementById('boton-3').style.display = 'none';

}




function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["enter", "e" ], ["imes","i" ], ["ai", "a"], ["ober","o" ], ["ufat","u" ]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDesencriptada.includes(matrizCodigo[i][0])) {

            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }
    }

    return stringDesencriptada;

}

function btnDesencriptar() {

    var textoDesencriptado = desencriptar(entradaTexto.value);

    mensaje.value = textoDesencriptado
    if (entradaTexto.value.length == "") {

        document.getElementById('info-rectangulo-1').style.display = 'inline-block';
        document.getElementById('info-rectangulo-2').style.display = 'none';
        document.getElementById('boton-3').style.display = 'none';
        document.getElementById('info-rectangulo-1').style.display = 'inline-block';
        alert("No se ingreso texto a desencriptar");
    }


    else {
        document.getElementById('info-rectangulo-1').style.display = 'none';
        document.getElementById('info-rectangulo-2').style.display = 'none';
        document.getElementById('muneco').style.display = 'none';
        document.getElementById('boton-3').style.display = 'inline-block';
    }


    entradaTexto.value = "";
}


 function copiar() {
    var text = document.getElementById("mensaje").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}