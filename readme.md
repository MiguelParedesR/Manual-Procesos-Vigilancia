# MANUAL DE PROCESOS - SERVICIO VIGILANCIA

Aplicación estática (HTML/CSS/JS) que guía a los vigilantes según su local y puesto y registra validaciones en Supabase.

## Estructura
```
/
├─ dist/               # Carpeta lista para publicar en GitHub Pages
│  ├─ html/            # Páginas HTML (index, puestos, puesto, identificacion)
│  ├─ assets/          # Loader dinámico y recursos compartidos
│  ├─ css/             # Hojas de estilo compiladas
│  ├─ js/              # Scripts de funcionalidad
│  ├─ index.html       # Redirección a html/index.html
│  ├─ manifest.webmanifest
│  └─ sw.js
├─ css/, js/, assets/  # Fuentes originales
└─ manifest.webmanifest
```

## Despliegue en GitHub Pages
1. Asegúrate de tener el repositorio en la rama principal con la carpeta `dist/` actualizada.
2. En la configuración de Pages selecciona la rama a publicar y define la carpeta `dist/` como raíz de despliegue.
3. Publica la URL `https://usuario.github.io/repositorio/` (el contenido se sirve desde `dist/`).

### Rutas relativas
- Desde `dist/index.html` las rutas usan el prefijo `./`.
- Desde cualquier archivo en `dist/html/` las rutas usan `../`.
- No existen rutas absolutas con `/`, por lo que el sitio funciona en subcarpetas.

### Supabase
- `dist/assets/js/app.js` carga dinámicamente los scripts necesarios según la página, incluido el SDK de Supabase desde CDN para `identificacion.html`.
- `dist/js/supabase.js` crea el cliente con `createClient` y expone `window.guardarDatosSupabase` para los manejadores inline.

### Desarrollo local
Puedes servir `dist/` con cualquier servidor estático, por ejemplo:
```bash
npx serve dist
```
Luego abre `http://localhost:3000/html/index.html` o `http://localhost:3000/` para probar.
