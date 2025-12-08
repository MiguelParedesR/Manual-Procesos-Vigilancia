// funciones.js
// Agrega esto al inicio de funciones.js
const funcionesPorPuesto = {};
// Funciones por puesto

// TPP1

// funciones.js actualizado con checklist y modal de confirmacion

funcionesPorPuesto["Puerta de ingreso Viru"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACION (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Valida AR/QR con tarjeta de propiedad, licencia AIII, guia y SCTR.</label>
      <label class="card-checklist"><input type="checkbox" /> Si AR fisica, revisa holograma TPP, sello y firma de agencia y sello de facturacion.</label>
      <label class="card-checklist"><input type="checkbox" /> Llama a CCTV con datos de AR fisica y UT: holograma, AR, placa.</label>
      <label class="card-checklist"><input type="checkbox" /> Confirma identidad del chofer en RENIEC y toma selfie.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica vehiculo en SUNARP por placa.</label>
      <label class="card-checklist"><input type="checkbox" /> Para AR QR, escanea codigo o ingresa IDAR para validar.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa documentos fisicos y digitales.</label>
      <label class="card-checklist"><input type="checkbox" /> Controla extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE EXPORTACION (EMBARQUE)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Confirma unidad nombrada y espera confirmacion de CCTV.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad y licencia AIII vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Pide ticket de pesaje (APMT o DPW), valida contenedor y precinto y resalta SINI si corresponde.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad y licencia AIII vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica cable conectado en reefers.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERIA PARA SER LLENADO EN TPP</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita booking, guia del cliente y guia del transportista.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en guias direccion TPP, placa y descripcion de la mercaderia.</label>
      <label class="card-checklist"><input type="checkbox" /> Si no hay booking, solicita correo de autorizacion de ingreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso Oceanica"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACION (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Valida AR/QR con tarjeta de propiedad, licencia AIII, guia y SCTR.</label>
      <label class="card-checklist"><input type="checkbox" /> Si AR fisica, revisa holograma TPP, sello y firma de agencia y sello de facturacion.</label>
      <label class="card-checklist"><input type="checkbox" /> Llama a CCTV con datos de AR fisica y UT: holograma, AR, placa.</label>
      <label class="card-checklist"><input type="checkbox" /> Confirma identidad del chofer en RENIEC y toma selfie.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica vehiculo en SUNARP por placa.</label>
      <label class="card-checklist"><input type="checkbox" /> Para AR QR, escanea codigo o ingresa IDAR para validar.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa documentos fisicos y digitales.</label>
      <label class="card-checklist"><input type="checkbox" /> Controla extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE EXPORTACION (EMBARQUE)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Confirma unidad nombrada y espera confirmacion de CCTV.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad y licencia AIII vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Pide ticket de pesaje (APMT o DPW), valida contenedor y precinto y resalta SINI si corresponde.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad y licencia AIII vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica cable conectado en reefers.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERIA PARA SER LLENADO EN TPP</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita booking, guia del cliente y guia del transportista.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en guias direccion TPP, placa y descripcion de la mercaderia.</label>
      <label class="card-checklist"><input type="checkbox" /> Si no hay booking, solicita correo de autorizacion de ingreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-025.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso Peatonal - Garita"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia o pasaporte, motivo, contacto y empresa.</label>
      <label class="card-checklist"><input type="checkbox" /> Si no esta anunciada, coordina autorizacion con supervisor o asistente.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con reconocimiento facial RENIEC y captura rostro.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
      <label class="card-checklist"><input type="checkbox" /> Entrega pase y papeleta F-OPESEG-023.</label>
      <label class="card-checklist"><input type="checkbox" /> Indica vias de acceso y uso visible del pase.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Consulta motivo y verifica datos por Teams o correo.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, fotocheck, carnet de aduana, licencia y soporte del tramite.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con RENIEC y captura rostro.</label>
    </ul>
  </div>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PROVEEDORES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, fotocheck, carnet de aduana, licencia y soporte del tramite.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con RENIEC y captura rostro.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
      <label class="card-checklist"><input type="checkbox" /> Si trae material, solicita guias de remision.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE AUTORIDADES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI y fotocheck de entidad (SENASA, SUNAT, DIRANDRO, etc.) y motivo.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
      <label class="card-checklist"><input type="checkbox" /> Informa el ingreso a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PERSONAL CESADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica correo de GDH autorizando el ingreso; sin correo, no ingresa.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI y motivo de ingreso.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONSIDERACIONES GENERALES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Prohibe ingreso de armas.</label>
      <label class="card-checklist"><input type="checkbox" /> No permite ingreso bajo efectos de alcohol o drogas.</label>
      <label class="card-checklist"><input type="checkbox" /> Restringe ingreso de ninos menores de 10 anos a zona operativa.</label>
      <label class="card-checklist"><input type="checkbox" /> Aplica P-OPESEG-015 ante anomalias o eventos criticos.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso - Puerta Naranja"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">AVP PUERTA DE ACCESO ZONA OPERATIVA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Controla el acceso vehicular y peatonal a zona operativa segun procesos siguientes.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita pase de acceso.</label>
      <label class="card-checklist"><input type="checkbox" /> Si trae maletines, indica dejar en garita o mostrar interior.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-020; para zona operativa exige OS u OT.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE TERCEROS</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia, pasaporte, SCTR y EPP a aseguradoras, inspectores, fumigadores, etc.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en Teams el reporte de planificacion y registra en Sistema de Visitas.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Revisa maletines o equipos con autorizacion previa.</label>
      <label class="card-checklist"><input type="checkbox" /> Exige EPP para ingreso a zona operativa.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra maletas en F-OPESEG-020 si aplica.</label>
      <label class="card-checklist"><input type="checkbox" /> Indica que solo puede dirigirse a almacen o zona asignada.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en F-OPESEG-022.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona cabina, maletera y contorno de la unidad.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA PERSONAL CESADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica pertenencias del personal cesado para internamiento.</label>
      <label class="card-checklist"><input type="checkbox" /> Al retiro, confirma pertenencias y reporta novedades a CCTV/Supervisor.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso Vehiculos Menores"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES CON VEHICULO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Dirige a estacionar en parqueo administrativo.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos en F-OPESEG-022.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa maletines o mochilas; el visitante manipula sus pertenencias.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-020 electronico.</label>
      <label class="card-checklist"><input type="checkbox" /> Al salir, solicita papeleta firmada y registra salida en F-OPESEG-020.</label>
    </ul>
  </div>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA - VEHICULAR</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Dirige a estacionar en parqueo administrativo.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona cabina, contorno y maletera.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa maletines o mochilas; el visitante los abre.</label>
      <label class="card-checklist"><input type="checkbox" /> Si no tiene EPP, entrega implementos y los recupera al terminar.</label>
      <label class="card-checklist"><input type="checkbox" /> Al finalizar, registra hora de salida y revisa maletas si aplica.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso LCL"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERIA PARA COMO DEPOSITO SIMPLE</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Dirige a estacionar en parqueo administrativo.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita guia del cliente y guia del transportista o correo de Customer.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en guias direccion TPP, placa, descripcion y cantidad.</label>
      <label class="card-checklist"><input type="checkbox" /> Si faltan documentos, consulta a CCTV para autorizar ingreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP y realiza inspeccion vehicular en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos de vehiculo, chofer y mercaderia (bultos) en F-OPESEG-043.</label>
      <label class="card-checklist"><input type="checkbox" /> Al salir, puede completar F-OPESEG-026 aleatorio.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa unidad y registra salida en F-OPESEG-044.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["AFORO"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza las funciones asignadas al puesto de Aforo.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de salida de camiones - Balanza de Salida"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACION (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita ticket de pesaje y valida que contenedor coincida con fisico y EIR.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza salida en AR PORTAL; si hay error informa a CCTV/Supervisor.</label>
      <label class="card-checklist"><input type="checkbox" /> Hace inspeccion vehicular aleatoria y llena F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> En contenedores RH verifica cable completo.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra precinto, contenedor y hora de salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS PARA EXPORTACION (EMBARQUES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Confirma contenedor en listado y solicita guia de remision de TPP.</label>
      <label class="card-checklist"><input type="checkbox" /> Valida datos de guia con contenedor fisico.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica dispositivo de seguridad (cola de pato) asegurado.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion vehicular aleatoria en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Para RH, revisa cable y mampara (15 cm de separacion y 1.80 m de altura).</label>
      <label class="card-checklist"><input type="checkbox" /> Coordina con custodia la salida para escolta.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra contenedor, precinto, hora y guia en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion vehicular aleatoria y llena F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra precinto, contenedor y hora de salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON MERCADERIA PARA SER LLENADO EN TPP</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion vehicular aleatoria y llena F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra precinto, contenedor y hora de salida en F-OPESEG-025.</label>
    </ul>
  </div>
`;

// Modal de checklist completado
function mostrarModalChecklistCompletado() {
  const modal = document.createElement("div");
  modal.className = "modal-checklist-final fade-in";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="emoji">:)</div>
      <p class="mensaje">Pasos del proceso concluido!</p>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
  }, 1000);
}

// Revision de checklist
function revisarChecklistFinal() {
  const checkboxes = document.querySelectorAll('.card-checklist input[type="checkbox"]');
  const todosMarcados = [...checkboxes].every(chk => chk.checked);
  if (todosMarcados) {
    mostrarModalChecklistCompletado();
  }
}

// Listener global para todos los checkboxes
// Usar 'change' en lugar de 'click' para detectar correctamente cuando se marca un checkbox
document.addEventListener("change", (e) => {
  if (e.target.matches('.card-checklist input[type="checkbox"]')) {
    revisarChecklistFinal();
  }
});

funcionesPorPuesto["LLENADO"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Describir funciones y responsabilidades del puesto de Llenado.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["LCL"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Describir funciones y responsabilidades del puesto de LCL.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso peatonal - Garita T1"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia o pasaporte, motivo de visita, persona y empresa.</label>
      <label class="card-checklist"><input type="checkbox" /> Si no esta anunciada, coordina autorizacion con Supervisor o asistente.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con reconocimiento facial RENIEC y captura rostro.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
      <label class="card-checklist"><input type="checkbox" /> Entrega pase y papeleta F-OPESEG-023; indica vias de acceso y uso visible.</label>
    </ul>
  </div>

  <h3>ACCESO DE CLIENTES</h3>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita pase de acceso.</label>
      <label class="card-checklist"><input type="checkbox" /> Si lleva maletas, indica dejarlas en garita (no patio).</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-020; para zona operativa exige OS, volante, booking o resolucion de aduanas.</label>
    </ul>
  </div>

  <h3>ACCESO DE USUARIOS</h3>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia, pasaporte, SCTR y EPP.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa en Teams el reporte de planificacion; si ingresa con equipos coordina via accesostpp@tpp.com.pe o con Customer Service.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso - Puerta Ploma"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">AVP PUERTA DE ACCESO ZONA OPERATIVA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Controla acceso peatonal a zona operativa.</label>
    </ul>
  </div>

  <h3>ACCESO DE CLIENTES</h3>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita pase correspondiente.</label>
      <label class="card-checklist"><input type="checkbox" /> Si trae maletas, indica que no ingresan a patio y se dejan en garita.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-020; para zona operativa exige OS, volante, booking o resolucion de aduanas.</label>
    </ul>
  </div>

  <h3>ACCESO DE USUARIOS</h3>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia, pasaporte, SCTR y EPP.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en Teams el reporte de planificacion y registra ingreso; coordina ingreso de equipos con accesostpp@tpp.com.pe o Customer Service.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en sistema de seguridad.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de salida de camiones - T5"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Inspecciona unidad y llena F-OPESEG-026 si aplica.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Revisa unidad y registra en F-OPESEG-026 si corresponde.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025 con contenedor y precintos.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DESPACHO DE CONTENEDORES VACIOS A CLIENTES DE EXPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita EIR impreso o autorizacion del almacenero en horario extra.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona unidad y reefers (cable conectado) segun aplique.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida con contenedor, precinto y EIR.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS A LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor en listado y coincide con guia.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa reefers y EPP antes de salida.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos y precintos en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRE SEDES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor, precintos, licencia y placa con EIR emitido.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025 con destino.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["PDT - T4"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA DE LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor de descarga en la lista correspondiente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Si es reefer, confirma cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad, contenedor y precinto en F-OPESEG-025.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Ingreso/descarga) manifiesto, contenedor, placa y licencia; si falla, informa a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita Memo de Devolucion, pago ITOP, tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en Memo cliente, direccion TPP, validez, BL y contenedor; cruza con pago ITOP.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Devolucion) contenedor, BL, placa, transporte y foto del conductor.</label>
      <label class="card-checklist"><input type="checkbox" /> Si contenedor RH, reporta a CCTV para direccionamiento.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad y contenedor en F-OPESEG-025.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Aforo"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONTROL DE AFORO Y SEGURIDAD</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Controla la capacidad del area y bloquea ingresos al alcanzar el limite.</label>
      <label class="card-checklist"><input type="checkbox" /> Cuenta personas y vehiculos en tiempo real en la app o planilla.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica EPP y motivo de ingreso antes de permitir el paso.</label>
      <label class="card-checklist"><input type="checkbox" /> Prioriza ingresos criticos o con autorizaciones especiales.</label>
      <label class="card-checklist"><input type="checkbox" /> Reporta desbordes o riesgos a supervisor y CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">REGISTRO Y REPORTE</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso y salida en el sistema.</label>
      <label class="card-checklist"><input type="checkbox" /> Documenta incidencias y rechazos con evidencias.</label>
      <label class="card-checklist"><input type="checkbox" /> Mantiene visible el aforo restante para decisiones rapidas.</label>
      <label class="card-checklist"><input type="checkbox" /> Escala de inmediato anomalias al centro de control.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">RESPUESTA A INCIDENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Activa evacuacion o cierre de accesos cuando sea necesario.</label>
      <label class="card-checklist"><input type="checkbox" /> Coordina con primeros auxilios y SST en emergencias.</label>
      <label class="card-checklist"><input type="checkbox" /> Mantiene comunicacion con CCTV durante el evento.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Llenado"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">PREPARACION DE AREA DE LLENADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica orden o booking y zona asignada.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa senalizacion, equipos y EPP obligatorio.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona contenedor y registra condiciones iniciales.</label>
      <label class="card-checklist"><input type="checkbox" /> Coordina con almacen tiempos y personal.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONTROL DURANTE EL LLENADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica guias y documentos versus mercaderia cargada.</label>
      <label class="card-checklist"><input type="checkbox" /> Supervisa peso, distribucion y sujecion de la carga.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra danos o incidentes y notifica al supervisor.</label>
      <label class="card-checklist"><input type="checkbox" /> Mantiene comunicacion con CCTV ante anomalias.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CIERRE Y SALIDA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Coloca y registra precintos y toma fotos.</label>
      <label class="card-checklist"><input type="checkbox" /> Actualiza F-OPESEG-025 con datos del conductor y unidad.</label>
      <label class="card-checklist"><input type="checkbox" /> Entrega documentos de salida y libera el vehiculo.</label>
    </ul>
  </div>
`;

// ALMACENES VACIOS //

// TPP3
funcionesPorPuesto["Puerta de Ingreso"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS PARA CLIENTES DE EXPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita booking, pago ITOP, tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en booking direccion TPP y linea; cruza booking con ITOP.</label>
      <label class="card-checklist"><input type="checkbox" /> Valida booking en lista de programacion (ingreso +/- 1 hora).</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Despacho, Asignacion) booking, placa, brevete y foto del chofer; si falla, informa a CCTV.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia, unidad y booking en F-OPESEG-025.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra fecha, hora y placa en EIR y lo entrega al conductor.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS A LA LINEA - EXPORTACION (EMBARQUES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica que el contenedor este en la lista y solicita tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia y unidad en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRE SEDES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica en lista enviada y solicita tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia y unidad en F-OPESEG-025.</label>
    </ul>
  </div>
`;
funcionesPorPuesto["PDT-3"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA DE LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor de descarga en la lista correspondiente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Si es reefer, verifica cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad, contenedor y precinto en F-OPESEG-025.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Ingreso/descarga) manifiesto, contenedor, placa y licencia; si falla, informa a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita Memo de Devolucion, pago ITOP, tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en Memo cliente, direccion TPP, validez, BL y contenedor; cruza con pago ITOP.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Devolucion) contenedor, BL, placa, transporte y foto del conductor.</label>
      <label class="card-checklist"><input type="checkbox" /> Si contenedor RH, reporta a CCTV para direccionamiento.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad y contenedor en F-OPESEG-025.</label>
    </ul>
  </div>
`;
funcionesPorPuesto["Puerta de Salida"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA DE LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS PARA CLIENTES DE EXPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita EIR impreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Si horario extraordinario y sin EIR, confirma con almacenero; reefers siempre con EIR.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion aleatoria en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> En reefers verifica cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra contenedor, precinto y EIR en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS A LA LINEA - EXPORTACION (EMBARQUES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor en listado y en guia; inspecciona camion y llena F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> En reefers verifica cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra contenedor, precinto y guia en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRE SEDES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor, precintos, licencia y placa en EIR y destino.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion aleatoria en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida con contenedor y precinto en F-OPESEG-025.</label>
    </ul>
  </div>
`;
// TPP4
funcionesPorPuesto["Puerta de ingreso"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS PARA CLIENTES DE EXPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita booking, pago ITOP, tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en booking direccion TPP y linea; cruza booking con ITOP.</label>
      <label class="card-checklist"><input type="checkbox" /> Valida booking en lista de programacion (ingreso +/- 1 hora).</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Despacho, Asignacion) booking, placa, brevete y foto; si falla, informa a CCTV.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia, unidad y booking en F-OPESEG-025.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra fecha, hora y placa en EIR y lo entrega al conductor.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS A LA LINEA - EXPORTACION (EMBARQUES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica que el contenedor este en la lista y solicita tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia y unidad en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRES SEDES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica en lista enviada y solicita tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora, chofer, licencia y unidad en F-OPESEG-025.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["PDT-4"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA DE LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor de descarga en la lista correspondiente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Si es reefer, confirma cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad, contenedor y precinto en F-OPESEG-025.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Ingreso/descarga) manifiesto, contenedor, placa y licencia; si falla, informa a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita Memo de Devolucion, pago ITOP, tarjeta de propiedad y licencia AIII.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP e inspecciona camion; llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en Memo cliente, direccion TPP, validez, BL y contenedor; cruza con pago ITOP.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en TPP WEB (Op. Vacios, Devolucion) contenedor, BL, placa, transporte y foto del conductor.</label>
      <label class="card-checklist"><input type="checkbox" /> Si contenedor RH, reporta a CCTV para direccionamiento.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra hora de ingreso, chofer, licencia, unidad y contenedor en F-OPESEG-025.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de salida"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE DESCARGA DIRECTA DE LA LINEA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACIOS DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion del camion y llena al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS PARA CLIENTES DE EXPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita EIR impreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Si horario extraordinario y sin EIR, confirma con almacenero; reefers siempre con EIR.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion aleatoria en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> En reefers verifica cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra contenedor, precinto y EIR en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACIOS A LA LINEA - EXPORTACION (EMBARQUES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor en listado y en guia; inspecciona camion y llena F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> En reefers verifica cable conectado.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra contenedor, precinto y guia en F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRES SEDES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica contenedor, precintos, licencia y placa en EIR y destino.</label>
      <label class="card-checklist"><input type="checkbox" /> Realiza inspeccion aleatoria en F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra salida con contenedor y precinto en F-OPESEG-025.</label>
    </ul>
  </div>
`;
