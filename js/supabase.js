// Inicializa Supabase
const supabaseUrl = 'https://qjefbngewwthawycvutl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZWZibmdld3d0aGF3eWN2dXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMjA2MTUsImV4cCI6MjA2MTY5NjYxNX0.q4J3bF6oC7x9dhW5cwHr-qtqSSqI_8ju7fHvyfO_Sh0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Registrar al vigilante
document.getElementById('formIdentificacion').addEventListener('submit', async function (e) {
  e.preventDefault();

  const local = localStorage.getItem("localSeleccionado");
  const empresaInput = document.querySelector('input[name="empresa"]:checked');
  const nombre = document.getElementById('nombre').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const canvas = document.getElementById('canvas');
  const mensaje = document.getElementById('mensaje');

  if (!empresaInput || !nombre || !dni || canvas.style.display === 'none') {
    mensaje.innerText = "⚠️ Por favor complete todos los campos y tome una selfie.";
    return;
  }

  const empresa = empresaInput.value;
  mensaje.innerText = "⏳ Subiendo datos, por favor espere...";

  const fotoBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.7));
  const filePath = `selfies/${dni}_${Date.now()}.jpg`;

  const { data: fileData, error: fileError } = await supabase.storage
    .from('selfies')
    .upload(filePath, fotoBlob, { contentType: 'image/jpeg' });

  if (fileError) {
    console.error(fileError);
    mensaje.innerText = "❌ Error al subir la imagen.";
    return;
  }

  const { error: insertError } = await supabase.from('vigilantes').insert([
    {
      nombre,
      dni,
      empresa,
      local,
      foto_url: fileData.path,
      timestamp: new Date().toISOString()  // Puedes quitar si la base ya lo hace
    }
  ]);

  if (insertError) {
    console.error(insertError);
    mensaje.innerText = "❌ Error al registrar los datos.";
    return;
  }
  localStorage.setItem("dni", dni); // Guarda el DNI antes de redirigir
  mensaje.innerText = `✅ Bienvenido ${nombre}`;
  setTimeout(() => {
    window.location.href = "puestos.html";
  }, 2000);
  
});
