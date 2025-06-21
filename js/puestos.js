// puestos.js actualizado con diseño visual de tarjetas (puesto-card)

const puestosPorLocal = {
    TPP1: [
      "Puerta de ingreso Viru",
      "Puerta de ingreso Oceanica",
      "Puerta de ingreso Peatonal - Garita",
      "Puerta de ingreso - Puerta Naranja",
      "Puerta de ingreso Vehiculos Menores",
      "Puerta de ingreso LCL",
      "Puerta de salida de camiones - Balanza de Salida",
      "AFORO",
      "LLENADO",
      "LCL"
    ],
    TPP2: [
      "Puerta de ingreso de camiones - T3",
      "Puerta de ingreso peatonal - Garita T1",
      "Puerta de ingreso - Puerta Ploma",
      "Puerta de salida de camiones - T5",
      "PDT - T4",
      "Aforo",
      "Llenado"
    ],
    TPP3: [
      "Puerta de Ingreso",
      "PDT-3",
      "Puerta de Salida"
    ],
    TPP4: [
      "Puerta de ingreso",
      "PDT-4",
      "Puerta de salida"
    ]
  };
  
  const local = localStorage.getItem("localSeleccionado");
  const titulo = document.getElementById("tituloLocal");
  const contenedor = document.getElementById("puestosContainer");
  contenedor.classList.add("vertical-buttons", "enumerated");
  
  if (local && puestosPorLocal[local]) {
    titulo.innerText = `Puestos del local ${local}`;
    puestosPorLocal[local].forEach((puesto) => {
      const btn = document.createElement("button");
      btn.textContent = puesto;
      btn.classList.add("puesto-card"); // <- AQUI se aplica el diseño visual
      btn.onclick = () => mostrarFuncionesPuesto(puesto);
      contenedor.appendChild(btn);
    });
  } else {
    titulo.innerText = "Local no reconocido.";
  }
  
  function mostrarFuncionesPuesto(puesto) {
    localStorage.setItem("puestoSeleccionado", puesto);
    window.location.href = "puesto.html";
  }
  // Activar los listeners después de renderizar el contenido dinámico
setTimeout(() => {
  document.querySelectorAll('.card-checklist input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', revisarChecklistFinal);
  });
}, 100); // Pequeño retardo para asegurar que el contenido ya esté en el DOM
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("change", (e) => {
    if (e.target.matches('.card-checklist input[type="checkbox"]')) {
      revisarChecklistFinal();
    }
  });
});
