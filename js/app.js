// Punto 3:
const APP_NOMBRE = "Vida Saludable";
const APP_VERSION = "1.0";
const ANIO = new Date().getFullYear();

// Punto 4: 
let contadorVisitas = localStorage.getItem("visitas");
let usuarioActivo = localStorage.getItem("nombreUsuario");
let esMovil = 0;

// Punto 5: 
function sumar(a, b) {
  // solo numeros
  return Number(a) + Number(b);
}

function multiplicar(a, b) {
  // Solo multiplica numeros
  return a * b;
}

// Punto 6: 
document.addEventListener('DOMContentLoaded', function () {
  const elementoSalida = document.getElementById("salida");

  if (!usuarioActivo) {
    usuarioActivo = prompt("¿Cuál es tu nombre?");
    localStorage.setItem("nombreUsuario", usuarioActivo);
  }
  const mensaje = `¡Hola, ${usuarioActivo}! Bienvenid@ a ${APP_NOMBRE}`;
  if (elementoSalida) elementoSalida.textContent = mensaje;
});

// Punto 7: 
document.addEventListener('DOMContentLoaded', function () {
  const btnVisitas = document.getElementById("btnVisitas"),
    clickVisitas = document.getElementById("totalVisitas");

  if (btnVisitas) {
    btnVisitas.addEventListener('click', function () {
      if (clickVisitas) {
        if (contadorVisitas) {
          contadorVisitas = Number(contadorVisitas) + 1
          localStorage.setItem("visitas", contadorVisitas);
          clickVisitas.textContent = contadorVisitas;
        }
      }
    })
  }
});

// Punto 8: 
document.addEventListener('DOMContentLoaded', function () {
  function mostrarHora() {
    const reloj = new Date();
    const hora = reloj.getHours().toString();
    const minutos = reloj.getMinutes().toString();
    const segundos = reloj.getSeconds().toString();
    const actualizarHora = document.getElementById("horaActual");

    if (actualizarHora) {
      actualizarHora.textContent = `Hora: ${hora}:${minutos}:${segundos}`;
    }
  }
  mostrarHora();
  setInterval(mostrarHora, 1000);
});

// Punto 9: 
document.addEventListener('DOMContentLoaded', function () {
  let paginaActual = location.pathname.split("/"); // Divide toda la ruta del documento
  paginaActual = paginaActual.pop(); // Almacenamos el ultimo elemento dividido (el nombre del archivo con su extension)
  paginaActual = paginaActual.split(".")[0]; // Lo dividimos en dos: 0. nombre , 1. ruta. 


  const enlaceActivo = document.querySelector(`[data-page="${paginaActual}"]`);
  if (enlaceActivo) {
    enlaceActivo.classList.add("activo");
  }
  else {
    if (paginaActual != "contactanos") enlaceActivo.classList.remove("activo");
  }
});

// Punto 10:
document.addEventListener('DOMContentLoaded', function () {
  let btnAzul = document.getElementById("btnAzul"),
    btnRojo = document.getElementById("btnRojo"),
    btnVerde = document.getElementById("btnVerde"),
    encabezado = document.getElementsByTagName("header")[0];


  if (btnAzul || btnRojo || btnVerde) {
    btnAzul.addEventListener('click', function () {
      encabezado.style.backgroundColor = "#0d47a1";
    });

    btnRojo.addEventListener('click', function () {
      encabezado.style.backgroundColor = "#b02b2b";
    });

    btnVerde.addEventListener('click', function () {
      encabezado.style.backgroundColor = "#189718";
    });

  }
});

// Punto 11:
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById("inputNota"),
    boton = document.getElementById("btnLista"),
    notas = document.getElementById("notas");


  if (boton) {
    boton.addEventListener('click', function (e) {
      e.preventDefault(); // Evita que el formulario recargue la página
      const texto = input.value;

      if (!texto) {
        alert("La nota no puede estar vacía.");
      }
      else {
        const li = document.createElement("li");
        li.textContent = `${texto}`;
        li.style.marginLeft = "20px";
        notas.appendChild(li);
      }
      input.value = "";
    });
  }
});

// Punto 12:

document.addEventListener('DOMContentLoaded', function () {
  let btnEnviar = document.getElementById("btnEnviar"),
  correoValido = false, nombreValido = false, mensajeValido = false;
  
  function error(elementoInput, elementoMensaje, mensajeTexto) {
    elementoMensaje.style.color = "#e53935";
    elementoInput.style.backgroundColor = "#ffe7e7";
    elementoInput.style.border = "2px solid #e53935";
    elementoMensaje.textContent = mensajeTexto;
  }

  function correcto(elementoInput, elementoMensaje) {
    elementoMensaje.style.color = "#ffffffff";
    elementoInput.style.backgroundColor = "#ffffffff";
    elementoInput.style.border = "2px solid #ffffffff";
    elementoMensaje.style.display = 'none'; // Ocultar mensaje
  }

  // Constanntes para traer etiquetas.
  const mensajeErrorNombre = document.getElementById("mensaje-error-nombre"),
    inputNombre = document.getElementById("nombre"),
    mensajeErrorCorreo = document.getElementById("mensaje-error-correo"),
    inputCorreo = document.getElementById("email"),
    textArea = document.getElementById("mensaje"),
    mensajeErrorMensaje = document.getElementById("mensaje-error-mensaje");


  // Constantes para validar entradas.
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

  if (btnEnviar) {
    btnEnviar.addEventListener('click', function (e) {
      e.preventDefault();
      // Validar Nombre:
      if (!inputNombre.value) {
        error(inputNombre, mensajeErrorNombre, "Este campo es obligatorio");
      }
      else if (!regexSoloLetras.test(inputNombre.value)) {
        error(inputNombre, mensajeErrorNombre, "Solo se permiten letras");
      }
      else {
        nombreValido = true;
        correcto(inputNombre, mensajeErrorNombre);
      }

      // Validar correo:
      if (!inputCorreo.value) {
        error(inputCorreo, mensajeErrorCorreo, "Este campo es obligatorio");
      }
      else if (!regexEmail.test(inputCorreo.value)) {
        error(inputCorreo, mensajeErrorCorreo, "Formato del correo incorrecto");
      }
      else {
        correoValido = true;
        correcto(inputCorreo, mensajeErrorCorreo);
      }

      // validar mensaje
      if (!textArea.value) {
        error(textArea, mensajeErrorMensaje, "El espacio no puede estar vacio");
      }
      else {
        mensajeValido = true;
        correcto(textArea, mensajeErrorMensaje);
      }

      // Punto 13:
      if (nombreValido && correoValido && mensajeValido) {
        alert("¡Correo enviado con éxito!");
        inputNombre.value = "";
        inputCorreo.value = "";
        textArea.value = "";
      } else {
        console.log("Errores encontrados, no se envió.");
      }
    })
  }
});

//Punto 14:
document.addEventListener('DOMContentLoaded', function () {
  const barra = document.getElementById("barraBusqueda"),
  listaServicios = document.getElementById("listaServicios");

  function filtrarLista(input){
    const elementos = listaServicios.getElementsByClassName("servicio");
    for(let i=0; i<elementos.length; i++){
      const texto = elementos[i].textContent.toLowerCase();
      const coincide = texto.includes(input.toLowerCase());
      elementos[i].style.display = coincide ? "block" : "none";
    }
  }

  if (barra && listaServicios) {
    barra.addEventListener('input', function () {
      const textoBusqueda = barra.value.trim();
      filtrarLista(textoBusqueda);
    })
  }

});


//Punto 15:
function evaluarNumero(n) {
  var valor = Number(n);

  if (n > 0) {
    return "Número Positivo";
  }
  else if (n < 0) {
    return "Número negativo";
  }
  else {
    return "Cero"
  }
}

console.log("Punto 15: Funcion evaluarNumer(n):")
console.log(`Soy el -5 y soy un: ${evaluarNumero(-5)}`);
console.log(`Soy el 10 y soy un: ${evaluarNumero(10)}`);
console.log(`Soy el 0 y soy un: ${evaluarNumero(0)}`);


//Punto 16:
function obtenerDia(numero) {
  var dia;
  switch (numero) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Número inválido (debe ser 1-7)";
  }
  return dia;
}

console.log("Punto 16: función obtenerDia(numero): ")
console.log(`entrada: 7, salida: ${obtenerDia(7)}`);
console.log(`entrada: 3, salida: ${obtenerDia(3)}`);
console.log(`entrada: 10, salida: ${obtenerDia(10)}`);

//Punto 17:
document.addEventListener('DOMContentLoaded', function () {
  const perfil = {
    nombre: "Equipo Vida Saludable",
    cargo: "Creadores y Entrenadores",
    bio: `Somos un equipo apasionado por promover un estilo de vida saludable a través de ejercicios, 
       nutrición y bienestar. ¡Únete a nosotros!`,
    fechaIncorporacion: "2025"
  };

  const perfilHTML = `
    <div class="perfil">
      <h2>${perfil.nombre}</h2>
      <p><strong>Cargo:</strong> ${perfil.cargo}</p>
      <p><strong>Biografía:</strong> ${perfil.bio}</p>
      <p><strong>Desde:</strong> ${perfil.fechaIncorporacion}</p>
    </div>
  `;

  const contenedorPerfil = document.getElementById("acerca");
  if (contenedorPerfil) {
    contenedorPerfil.innerHTML = perfilHTML;
  }
});

// Punto 18:
document.addEventListener('DOMContentLoaded', function () {
  const contador = document.getElementById("totalVisitas");

  if (!contadorVisitas) {
    contadorVisitas = 1;
  }
  else {
    contadorVisitas = Number(contadorVisitas) + 1;
  }
  localStorage.setItem("visitas", contadorVisitas);
  if (contador) contador.textContent = contadorVisitas;
});


//Punto 19:
class Util {
  static formatearMoneda(valor, moneda, locale){
    if(isNaN(valor)){
      return "Valor invalido";
    }

    const formatear = new Intl.NumberFormat(locale, {
      style : 'currency',
      currency : moneda,
    });

    return formatear.format(valor);
  }
}

console.log(Util.formatearMoneda(1265, "COP", "es-CO"));