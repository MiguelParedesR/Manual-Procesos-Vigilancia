// puestos.js actualizado con diseno visual de tarjetas (puesto-card)

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
    "LCL",
  ],
  TPP2: [
    "Puerta de ingreso de camiones - T3",
    "Puerta de ingreso peatonal - Garita T1",
    "Puerta de ingreso - Puerta Ploma",
    "Puerta de salida de camiones - T5",
    "PDT - T4",
    "Aforo",
    "Llenado",
  ],
  TPP3: ["Puerta de Ingreso", "PDT-3", "Puerta de Salida"],
  TPP4: ["Puerta de ingreso", "PDT-4", "Puerta de salida"],
};

const local = localStorage.getItem("localSeleccionado");
const titulo = document.getElementById("tituloLocal");
const contenedor = document.getElementById("puestosContainer");
contenedor.classList.add("vertical-buttons", "enumerated");

const puestoCardClasses = [
  "puesto-card",
  "relative",
  "w-full",
  "rounded-2xl",
  "bg-white/90",
  "p-5",
  "text-left",
  "text-brand-ink",
  "font-semibold",
  "shadow-lg",
  "shadow-black/10",
  "ring-1",
  "ring-white/15",
  "backdrop-blur",
  "transition",
  "duration-200",
  "hover:-translate-y-1",
  "hover:shadow-2xl",
  "hover:ring-brand-blue/50",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-brand-blue/40",
  "focus:ring-offset-2",
  "focus:ring-offset-slate-100",
];

if (local && puestosPorLocal[local]) {
  titulo.innerText = `Puestos del local ${local}`;
  puestosPorLocal[local].forEach((puesto) => {
    const btn = document.createElement("button");
    btn.textContent = puesto;
    puestoCardClasses.forEach((cls) => btn.classList.add(cls));
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
