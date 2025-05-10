
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


//FUNCIONES

/*EJEMPLO:

funcionesPorPuesto["Nombre del Puesto"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>

  <h3>1. Objetivo del Puesto</h3>
  <p style="text-align: justify;">
    Describir las funciones y responsabilidades asignadas al vigilante que cumple tareas en el puesto de <strong>Nombre del Puesto</strong>, asegurando el cumplimiento de los protocolos establecidos por la empresa de seguridad.
  </p>

  <h3>2. Funciones Generales</h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Controlar el acceso y salida de personas y vehículos.</li>
    <li>Registrar novedades relevantes en el parte diario.</li>
    <li>Reportar incidencias al supervisor o coordinador de turno.</li>
    <li>Verificar documentación del personal externo.</li>
  </ul>

  <h3>3. Procedimientos Específicos</h3>
  <p style="text-align: justify;">
    El vigilante deberá realizar las siguientes acciones durante su turno:
  </p>
  <ol style="text-align: justify; padding-left: 1.2em;">
    <li>Identificar a cada visitante antes del ingreso.</li>
    <li>Registrar el ingreso en la bitácora digital o física.</li>
    <li>Informar de inmediato cualquier situación irregular.</li>
    <li>Supervisar el perímetro visible del puesto periódicamente.</li>
  </ol>

  <h3>4. Recomendaciones</h3>
  <p style="text-align: justify;">
    Mantener una actitud cordial pero firme en todo momento. No permitir el ingreso sin autorización formal. Conservar la uniformidad completa y portar el carné vigente de la empresa.
  </p>

  <div style="margin-top: 1.5em; padding: 1em; background-color: #f9f9f9; border-left: 4px solid #0077cc;">
    <strong>Nota:</strong> En caso de emergencias (robo, incendio, accidentes), comunicar por radio y activar el protocolo de seguridad inmediatamente.
  </div>
`;*/

