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
    rutaImagen = "mr-4.jpeg";
  } else if (contador >= 4 && contador <= 6) {
    rutaImagen = "mr-2.jpeg";
  } else if (contador >= 7 && contador <= 19) {
    rutaImagen = "mr-5.jpeg";
  } else {
    rutaImagen = "mr-1.jpeg";
  }
  document.getElementById("imagen").src = rutaImagen;
}
