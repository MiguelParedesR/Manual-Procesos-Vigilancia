// Recupera los elementos HTML
const titulo = document.getElementById("tituloPuesto");
const descripcion = document.getElementById("descripcionPuesto");

// Aplica clases base
titulo.classList.add("titulo-puesto");
descripcion.classList.add("descripcion-puesto");

// Recupera el puesto desde localStorage
const puesto = localStorage.getItem("puestoSeleccionado");

// Renderiza contenido y arma acordeones
if (puesto && funcionesPorPuesto[puesto]) {
  titulo.innerText = puesto;
  descripcion.innerHTML = funcionesPorPuesto[puesto];
  buildAccordions();
} else {
  titulo.innerText = "Puesto no identificado";
  descripcion.innerText = "No se encontraron funciones para este puesto.";
}

// Botón de retorno
function volverAPuestos() {
  window.location.href = "puestos.html";
}

// Arma acordeones por cada título H2 del contenido
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
    header.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
    header.innerHTML = `
      <span class="accordion__title">${section.title}</span>
      <span class="accordion__icon" aria-hidden="true">⌄</span>
    `;

    const body = document.createElement("div");
    body.className = "accordion__body";
    if (idx !== 0) body.style.maxHeight = "0px";
    section.nodes.forEach((node) => body.appendChild(node));

    header.addEventListener("click", () => toggleAccordion(body, header));

    card.appendChild(header);
    card.appendChild(body);
    descripcion.appendChild(card);

    if (idx === 0) {
      body.style.maxHeight = `${body.scrollHeight}px`;
      header.setAttribute("aria-expanded", "true");
    }
  });
}

function toggleAccordion(body, header) {
  const isOpen = header.getAttribute("aria-expanded") === "true";
  header.setAttribute("aria-expanded", String(!isOpen));
  body.style.maxHeight = isOpen ? "0px" : `${body.scrollHeight}px`;
}

// Delegación de eventos para los checkboxes del checklist
document.addEventListener("change", (e) => {
  if (e.target.matches('.card-checklist input[type="checkbox"]')) {
    revisarChecklistFinal();
  }
});
