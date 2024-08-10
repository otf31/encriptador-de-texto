let texto = "";
let resultado = "";

document.getElementsByClassName("con-mensaje__container")[0].style.display =
  "none";

function validarTexto(texto) {
  texto = texto.trim();

  if (texto === "") {
    alert("Por favor, ingrese un texto");
    return false;
  }
  // minúsulas y sin acento, se aceptan espacios

  if (!/^[a-z\s]*$/.test(texto)) {
    alert("Solo se aceptan letras minúsculas y sin acento");
    return false;
  }

  return true;
}

function encriptar() {
  texto = document.getElementById("texto");

  const textoValor = texto.innerText;

  if (validarTexto(textoValor)) {
    let textoEncriptado = "";

    for (let i = 0; i < textoValor.length; i++) {
      switch (textoValor[i]) {
        case "e":
          textoEncriptado += "enter";
          break;
        case "i":
          textoEncriptado += "imes";
          break;
        case "a":
          textoEncriptado += "ai";
          break;
        case "o":
          textoEncriptado += "ober";
          break;
        case "u":
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += textoValor[i];
          break;
      }
    }

    document.getElementById("resultado").textContent = textoEncriptado;

    document.getElementsByClassName("con-mensaje__container")[0].style.display =
      "flex";
    document.getElementsByClassName("sin-mensaje__container")[0].style.display =
      "none";
  }
}

function desencriptar() {
  texto = document.getElementById("texto");

  const textoValor = texto.innerText;

  if (validarTexto(textoValor)) {
    let textDesencriptado = "";

    for (let i = 0; i < textoValor.length; i++) {
      switch (textoValor[i]) {
        case "enter":
          textDesencriptado += "e";
          break;
        case "imes":
          textDesencriptado += "i";
          break;
        case "ai":
          textDesencriptado += "a";
          break;
        case "ober":
          textDesencriptado += "o";
          break;
        case "ufat":
          textDesencriptado += "u";
          break;
        default:
          textDesencriptado += textoValor[i];
          break;
      }
    }

    document.getElementById("resultado").textContent = textDesencriptado;

    document.getElementsByClassName("con-mensaje__container")[0].style.display =
      "flex";
    document.getElementsByClassName("sin-mensaje__container")[0].style.display =
      "none";
  }
}

function copiar() {
  resultado = document.getElementById("resultado");

  if (resultado.textContent === "") {
    alert("No hay texto para copiar");
    return;
  }

  navigator.clipboard.writeText(resultado.textContent);
  alert("Texto copiado");
}
