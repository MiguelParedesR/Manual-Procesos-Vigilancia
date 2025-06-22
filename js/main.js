function irAIdentificacion(local) {
  localStorage.setItem("localSeleccionado", local);
  window.location.href = "identificacion.html";
}

function volverAlInicio() {
  window.location.href = "index.html";
}

// ✅ Validar que el formulario exista antes de agregar el listener
const formIdent = document.getElementById("formIdentificacion");
if (formIdent) {
  formIdent.addEventListener("submit", async function (e) {
    e.preventDefault();

    const empresa = document.querySelector('input[name="empresa"]:checked')?.value;
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const canvas = document.getElementById("canvas");
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "Validando...";

    if (!empresa || !nombre || !dni || canvas.style.display === "none") {
      mensaje.textContent = "Por favor complete todos los campos y tome la selfie.";
      return;
    }

    const selfieBase64 = canvas.toDataURL("image/jpeg");

    if (typeof guardarDatosSupabase !== "function") {
      mensaje.textContent = "❌ Error interno: función guardarDatosSupabase no disponible.";
      return;
    }

    try {
      const { error } = await guardarDatosSupabase({ empresa, nombre, dni, selfieBase64 });

      if (error) {
        mensaje.textContent = "Error al guardar los datos: " + error.message;
      } else {
        mensaje.textContent = "✅ Vigilante validado correctamente.";
        setTimeout(() => {
          window.location.href = "puestos.html";
        }, 1500);
      }
    } catch (err) {
      mensaje.textContent = "Error inesperado: " + err.message;
    }
  });
}
// Verifica si el canvas existe antes de agregar el listener