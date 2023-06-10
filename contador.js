let contador = 0;

function incrementar() {
    if (contador < 20) {
      contador++;
      actualizarContador();
      actualizarImagen();
    }
  }


  function decrementar() {
    if (contador > 0) {
      contador--;
      actualizarContador();
      actualizarImagen();
    }
  }

function actualizarContador() {
  document.getElementById("valor-contador").innerText = contador;
}

function volverAZero() {
  contador = 0;
  actualizarContador();
  actualizarImagen();
}

function actualizarImagen() {
  let rutaImagen = "";
  if (contador >= 1 && contador <= 3) {
    rutaImagen = "messi torres.jpeg";
  } else if (contador >= 4 && contador <= 6) {
    rutaImagen = "messi destruye francia.jpeg";
  } else {
    rutaImagen = "racist argentinians.jpeg";
  }
  document.getElementById("imagen").src = rutaImagen;
}
