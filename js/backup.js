
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
  