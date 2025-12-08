// Cargador de scripts por pagina para GitHub Pages
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

  const page = (window.location.pathname.split("/").pop() || "").toLowerCase();

  const scriptsPorPagina = {
    "index.html": ["../js/main.js", "../js/index.js"],
    "puestos.html": ["../js/main.js", "../js/puestos.js"],
    "puesto.html": ["../js/funciones.js", "../js/puesto.js", "../js/main.js"],
    "identificacion.html": [
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
      "../js/supabase.js",
      "../js/main.js",
      "../js/camera.js",
    ],
  };

  const lista = scriptsPorPagina[page] || [];
  lista.reduce((p, src) => p.then(() => loadScript(src)), Promise.resolve());
})();
