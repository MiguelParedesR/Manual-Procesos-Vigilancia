// Cargador de scripts por página (adaptado para Cloudflare + /dist)
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

  // IMPORTANTE: rutas ABSOLUTAS desde la raíz que sirve Cloudflare (/dist → /)
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
