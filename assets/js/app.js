// ---- Función global para los botones del índice ----
function crackAndRedirect(button, local) {
  try {
    // Pequeño efecto visual opcional
    if (button) {
      button.disabled = true;
      button.classList.add("scale-95", "opacity-80");
    }

    // Siempre vamos a /html/puestos.html con el local como query
    const url = `/html/puestos.html?local=${encodeURIComponent(local)}`;

    // Pequeño delay para que se note la animación
    setTimeout(() => {
      window.location.href = url;
    }, 180);
  } catch (e) {
    console.error("Error en crackAndRedirect:", e);
    // Fallback duro
    window.location.href = `/html/puestos.html?local=${encodeURIComponent(local)}`;
  }
}

// Exponerla explícitamente en window para que el onclick la vea
window.crackAndRedirect = crackAndRedirect;

// ---- Cargador de scripts por página (adaptado a /dist en Cloudflare) ----
(function () {
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // mantener orden
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });

  // Normalizar la ruta actual
  let path = window.location.pathname.toLowerCase();

  // Quitar "/" final si no es la raíz
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Obtener el último segmento
  let page = path.split("/").pop() || "";

  // Si no hay extensión, asumir ".html"
  if (!page || !page.includes(".")) {
    if (!page) {
      // raíz "/"
      page = "index.html";
    } else {
      // por ejemplo "/html/identificacion" -> "identificacion.html"
      page = page + ".html";
    }
  }

  console.log("[app.js] path:", path, "→ page detectada:", page);

  // Rutas ABSOLUTAS porque en Cloudflare Pages /dist se sirve como raíz "/"
  const scriptsPorPagina = {
    "index.html": [
      "/js/funciones.js",
      "/js/main.js",
      "/js/index.js",
    ],
    "puestos.html": [
      "/js/main.js",
      "/js/puestos.js",
    ],
    "puesto.html": [
      "/js/funciones.js",
      "/js/puesto.js",
      "/js/main.js",
    ],
    "identificacion.html": [
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
      "/js/supabase.js",
      "/js/main.js",
      "/js/camera.js",
    ],
  };

  const lista = scriptsPorPagina[page] || [];
  lista.reduce((p, src) => p.then(() => loadScript(src)), Promise.resolve());
})();
