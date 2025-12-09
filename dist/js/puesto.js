// Recupera los elementos HTML
const titulo = document.getElementById("tituloPuesto");
const descripcion = document.getElementById("descripcionPuesto");
// Catálogo de funciones con fallback defensivo
const catalogoPuestos = window.funcionesPorPuesto || {};

// Aplica clases base
titulo.classList.add("titulo-puesto");
descripcion.classList.add("descripcion-puesto");

// Recupera el puesto desde localStorage
const puesto = localStorage.getItem("puestoSeleccionado");
const matchedKey = findPuestoKey(puesto, catalogoPuestos);

// Renderiza contenido y arma acordeones
if (matchedKey) {
  titulo.innerText = matchedKey;
  descripcion.innerHTML = catalogoPuestos[matchedKey];
  buildAccordions();
} else {
  titulo.innerText = "Puesto no identificado";
  descripcion.innerText = "No se encontraron funciones para este puesto.";
}

// Boton de retorno
function volverAPuestos() {
  window.location.href = "puestos.html";
}

// Arma acordeones por cada titulo H2 del contenido
function buildAccordions() {
  const headings = Array.from(descripcion.querySelectorAll("h2"));
  if (!headings.length) return;

  const sections = headings.map((h2) => {
    const nodes = [];
    let next = h2.nextSibling;
    while (next && !(next.nodeType === 1 && next.tagName === "H2")) {
      const toMove = next;
      next = next.nextSibling;
      nodes.push(toMove);
    }
    return { title: h2.textContent.trim(), nodes };
  });

  descripcion.innerHTML = "";

  sections.forEach((section, idx) => {
    const card = document.createElement("div");
    card.className = "accordion";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "accordion__header";
    header.setAttribute("aria-expanded", "false");
    header.innerHTML = `
      <span class="accordion__title">${section.title}</span>
      <span class="accordion__icon" aria-hidden="true">&#8964;</span>
    `;

    const body = document.createElement("div");
    body.className = "accordion__body";
    section.nodes.forEach((node) => body.appendChild(node));
    enhanceChecklist(body);

    header.addEventListener("click", () => toggleAccordion(body, header));

    card.appendChild(header);
    card.appendChild(body);
    descripcion.appendChild(card);
  });
}

function toggleAccordion(body, header) {
  const isOpen = header.getAttribute("aria-expanded") === "true";
  header.setAttribute("aria-expanded", String(!isOpen));
  body.classList.toggle("open", !isOpen);
}

// Busca el puesto en el catálogo, normalizando mayúsculas/acentos
function findPuestoKey(nombre, catalogo) {
  if (!nombre) return null;
  const normalize = (txt) =>
    txt
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const target = normalize(nombre);
  const keys = Object.keys(catalogo);

  // Coincidencia exacta normalizada
  const exact = keys.find((k) => normalize(k) === target);
  if (exact) return exact;

  // Coincidencia por contiene (por si hay variantes)
  const partial = keys.find((k) => normalize(k).includes(target) || target.includes(normalize(k)));
  return partial || null;
}

// Normaliza las tablas de checklist para mejor lectura
function enhanceChecklist(root) {
  // Desarma contenedores pesados y deja solo la lista de items
  const tablas = Array.from(root.querySelectorAll(".checklist-tabla"));
  tablas.forEach((tabla) => {
    const items = Array.from(tabla.querySelectorAll("label.card-checklist"));
    if (!items.length) return;

    const stack = document.createElement("div");
    stack.className = "checklist-stack";
    items.forEach((item) => stack.appendChild(item));

    tabla.replaceWith(stack);
  });

  // Convierte listas simples en checklists si no tienen estilo
  const listas = Array.from(root.querySelectorAll("ul, ol")).filter(
    (ul) => !ul.closest(".checklist-stack")
  );
  listas.forEach((ul) => {
    const lis = Array.from(ul.querySelectorAll("li"));
    if (!lis.length) return;

    const stack = document.createElement("div");
    stack.className = "checklist-stack";

    lis.forEach((li) => {
      const label = document.createElement("label");
      label.className = "card-checklist";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = false;
      label.appendChild(checkbox);

      const span = document.createElement("span");
      span.innerHTML = li.innerHTML;
      label.appendChild(span);
      stack.appendChild(label);
    });

    ul.replaceWith(stack);
  });
}

// Delegacion de eventos para los checkboxes del checklist
document.addEventListener("change", (e) => {
  if (e.target.matches('.card-checklist input[type="checkbox"]')) {
    revisarChecklistFinal(e.target);
  }
});
