// Inicializa Supabase
const supabaseUrl = 'https://qjefbngewwthawycvutl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZWZibmdld3d0aGF3eWN2dXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMjA2MTUsImV4cCI6MjA2MTY5NjYxNX0.q4J3bF6oC7x9dhW5cwHr-qtqSSqI_8ju7fHvyfO_Sh0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Función reutilizable para guardar vigilante y selfie en Supabase
async function guardarDatosSupabase({ empresa, nombre, dni, selfieBase64 }) {
  const local = localStorage.getItem("localSeleccionado");

  // Convertir base64 a Blob
  const blob = await (await fetch(selfieBase64)).blob();
  const filePath = `selfies/${dni}_${Date.now()}.jpg`;

  const { data: fileData, error: fileError } = await supabase.storage
    .from("selfies")
    .upload(filePath, blob, { contentType: "image/jpeg" });

  if (fileError) {
    throw new Error("❌ Error al subir la selfie: " + fileError.message);
  }

  const { error: insertError } = await supabase.from("vigilantes").insert([
    {
      nombre,
      dni,
      empresa,
      local,
      foto_url: fileData.path,
      timestamp: new Date().toISOString()
    }
  ]);

  if (insertError) {
    throw new Error("❌ Error a guardar los datos: " + insertError.message);
  }

  localStorage.setItem("dni", dni);
  return { success: true };
}
