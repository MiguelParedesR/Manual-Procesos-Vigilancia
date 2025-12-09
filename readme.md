# MANUAL DE PROCESOS - SERVICIO VIGILANCIA

Aplicación estática (HTML/CSS/JS) que guía a los vigilantes según su local y puesto y registra validaciones en Supabase.

## Estructura
```
/
├─ dist/               # Única fuente servida en GitHub Pages
│  ├─ html/            # Páginas HTML (index, puestos, puesto, identificacion)
│  ├─ assets/          # Recursos compartidos
│  ├─ css/             # Hojas de estilo compiladas
│  ├─ js/              # Scripts de funcionalidad
│  ├─ index.html       # Redirección a html/index.html
│  ├─ manifest.webmanifest
│  └─ sw.js
├─ package.json, tailwind.config.js, netlify.toml, wrangler.jsonc, CNAME (si existe)
└─ readme.md
```

No quedan copias duplicadas de HTML, CSS, JS o service worker fuera de `dist/`; GitHub Pages debe servirse siempre desde esa carpeta.

## Despliegue en GitHub Pages
1. Confirma que la carpeta `dist/` está actualizada con los cambios a publicar.
2. En la configuración de Pages selecciona la rama correspondiente y define `dist/` como la carpeta raíz de publicación.
3. Accede a `https://usuario.github.io/repositorio/` (el contenido se sirve desde `dist/`).

### Rutas relativas
- Desde `dist/index.html` las rutas usan el prefijo `./`.
- Desde cualquier archivo en `dist/html/` las rutas usan `../`.
- No se usan rutas absolutas con `/`, por lo que el sitio funciona en subcarpetas.

### Supabase
- `dist/assets/js/app.js` carga dinámicamente los scripts necesarios según la página, incluido el SDK de Supabase desde CDN para
  `identificacion.html`.
- `dist/js/supabase.js` crea el cliente con `createClient` y expone `window.guardarDatosSupabase` para los manejadores inline.

### Desarrollo local
Sirve `dist/` con cualquier servidor estático, por ejemplo:
```bash
npx serve dist
```
Luego abre `http://localhost:3000/html/index.html` o `http://localhost:3000/` para probar.
