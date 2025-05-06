// Recupera los elementos HTML
const titulo = document.getElementById("tituloPuesto");
const descripcion = document.getElementById("descripcionPuesto");

// Aplica clase para estilo visual (opcional si ya se hace desde HTML/CSS)
titulo.classList.add("titulo-puesto"); // nuevo, si deseas destacar el título
descripcion.classList.add("descripcion-puesto"); // nuevo, para formateo visual del contenido

// Recupera el puesto desde localStorage
const puesto = localStorage.getItem("puestoSeleccionado");

// Verifica si existen funciones definidas para el puesto
if (puesto && funcionesPorPuesto[puesto]) {
  titulo.innerText = puesto;

  // Renderizar como HTML si se usan párrafos, listas, etc.
  descripcion.innerHTML = funcionesPorPuesto[puesto];
} else {
  titulo.innerText = "Puesto no identificado";
  descripcion.innerText = "No se encontraron funciones para este puesto.";
}

// Botón de retorno
function volverAPuestos() {
  window.location.href = "puestos.html";
}
