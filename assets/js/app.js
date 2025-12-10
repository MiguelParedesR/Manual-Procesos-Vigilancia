(function () {
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // mantener el orden de ejecución
      script.onload = resolve;
      script.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
      document.head.appendChild(script);
    });

  const pathname = window.location.pathname.replace(/\\+/g, "/");
  const cleanedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const segments = cleanedPath.split("/").filter(Boolean);
  let page = segments.pop() || "";

  if (!page || !page.includes(".")) {
    page = `${page || "index"}.html`;
  }

  const isHtmlPage = segments.includes("html");
  const prefix = isHtmlPage ? ".." : ".";

  const scriptsPorPagina = {
    "index.html": [
      `${prefix}/js/funciones.js`,
      `${prefix}/js/main.js`,
      `${prefix}/js/index.js`,
    ],
    "puestos.html": [
      `${prefix}/js/main.js`,
      `${prefix}/js/puestos.js`,
    ],
    "puesto.html": [
      `${prefix}/js/funciones.js`,
      `${prefix}/js/puesto.js`,
      `${prefix}/js/main.js`,
    ],
    "identificacion.html": [
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
      `${prefix}./js/supabase.js`,
      `${prefix}./js/main.js`,
      `${prefix}./js/camera.js`,
    ],
  };

  const lista = scriptsPorPagina[page] || [];

  lista
    .reduce((promesa, src) => promesa.then(() => loadScript(src)), Promise.resolve())
    .then(() => {
      // Asegurar que las funciones usadas por los atributos HTML estén disponibles
      if (typeof window.crackAndRedirect !== "function" && typeof crackAndRedirect === "function") {
        window.crackAndRedirect = crackAndRedirect;
      }
      if (typeof window.volverAlInicio !== "function" && typeof volverAlInicio === "function") {
        window.volverAlInicio = volverAlInicio;
      }
      if (typeof window.guardarDatosSupabase !== "function" && typeof guardarDatosSupabase === "function") {
        window.guardarDatosSupabase = guardarDatosSupabase;
      }
    })
    .catch((error) => {
      console.error("Error cargando scripts dinámicos:", error);
    });
})();
