// funciones.js
// Agrega esto al inicio de funciones.js
const funcionesPorPuesto = {};
// Funciones por puesto

// TPP1

// funciones.js actualizado con checklist y modal de confirmación

funcionesPorPuesto["Puerta de ingreso Viru"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACIÓN (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
    <label class="card-checklist"><input type="checkbox" /> Valida AR QR: AR, tarjeta de propiedad, licencia de conducir vigente (Categoría AIII), Guía de Remisión, SCTR.</label>
    <label class="card-checklist"><input type="checkbox" /> De ser AR Física, valida: El Stickers (holograma de TPP), sello y firma del agente de aduanas que coincida con el nombre de la Agencia de Aduanas en la Autorización, Sello de facturación TPP.</label>
    <label class="card-checklist"><input type="checkbox" /> AVP deberá llamar vía telefónica a Operador de CCTV dando datos de AR Fisica y UT: N° de Holograma, N° de AR, Placa UT.</label>
    <label class="card-checklist"><input type="checkbox" /> Valida identidad del chofer con RENIEC y captura selfie para validación facial.</label>
    <label class="card-checklist"><input type="checkbox" /> Valida vehículo en SUNARP con número de placa</label>
    <label class="card-checklist"><input type="checkbox" /> Para el AR QR: escanea código QR o ingresa IDAR manual para validar datos del retiro.</label>
    <label class="card-checklist"><input type="checkbox" /> Valida documentos físicos y digitales.</label>
    <label class="card-checklist"><input type="checkbox" /> Revisa: extintor, botiquín, EPP del chofer e inspecciona camión, llenando aleatoriamente F-OPESEG-026.</label>
    <label class="card-checklist"><input type="checkbox" /> Registra datos solicitados en formato F-OPESEG-025.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE EXPORTACION (EMBARQUE)</h2>
  <div class="checklist-tabla">
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox" /> Valida si se encuentra en lista (nombrada), espera confirmacion de CCTV.</label>
  <label class="card-checklist"><input type="checkbox" /> Solicita documentos: tarjeta de propiedad, licencia de conducir vigente (Categoría AIII).</label>
  <label class="card-checklist"><input type="checkbox" /> Revisa: extintor, botiquín, EPP del chofer e inspecciona camión, llenando aleatoriamente F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox" /> Registra datos solicitados en formato F-OPESEG-025.</label>
  </ul>
  </div>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <div class="checklist-tabla">
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox" /> Solicita ticket de pesaje (APMT o DPW), verifica N° de contenedor y precinto, corrobora listado otorgado y si esta seleccionado para inspección SINI resaltándolo.</label>
  <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad y licencia de conducir vigente (Categoría AIII).</label>
  <label class="card-checklist"><input type="checkbox" /> Revisa: extintor, botiquín, EPP del chofer e inspecciona camión, llenando aleatoriamente F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox" /> Verifica cable conectado al contenedor (Reefers).</label>
  <label class="card-checklist"><input type="checkbox" /> Registra datos solicitados en formato F-OPESEG-025.</label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERÍA PARA SER LLENADO EN TPP </h2>
  <div class="checklist-tabla">
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox" /> Solicita Booking, Guía de Remisión del Cliente y Guía de Remisión del Transportista (impreso o digital).</label>
  <label class="card-checklist"><input type="checkbox" /> Verifica en guías: Dirección del almacén (TPP), placa del vehículo y descripción de la mercadería.</label>
  <label class="card-checklist"><input type="checkbox" /> Si no cuenta con Booking, solicita correo que autoriza el ingreso.</label>
  <label class="card-checklist"><input type="checkbox" /> Revisa: extintor, botiquín, EPP del chofer e inspecciona camión, llenando aleatoriamente F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox" /> Registra datos solicitados en formato F-OPESEG-025.</label>
  </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso Oceanica"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACIÓN (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <label class="card-checklist"><input type="checkbox" /> AVP solicita los siguientes documentos: Autorización de Retiro con fecha actualizada, tarjeta de propiedad, licencia de conducir vigente (Categoría AIII), Guía de Remisión.</label>
  </div>
`;

// Modal de checklist completado
function mostrarModalChecklistCompletado() {
  const modal = document.createElement("div");
  modal.className = "modal-checklist-final fade-in";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="emoji">😊</div>
      <p class="mensaje">¡Pasos del proceso concluido!</p>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
  }, 1000);
}

// Revisión de checklist
function revisarChecklistFinal() {
  const checkboxes = document.querySelectorAll('.card-checklist input[type="checkbox"]');
  const todosMarcados = [...checkboxes].every(chk => chk.checked);
  if (todosMarcados) {
    mostrarModalChecklistCompletado();
  }
}

// Listener global para todos los checkboxes
// ✅ Usar 'change' en lugar de 'click' para detectar correctamente cuando se marca un checkbox
document.addEventListener("change", (e) => {
  if (e.target.matches('.card-checklist input[type="checkbox"]')) {
    revisarChecklistFinal();
  }
});



funcionesPorPuesto["Puerta de ingreso Peatonal - Garita"] = `
  <!-- Puesto: Puerta de ingreso Peatonal - Garita -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES</h2>
  <div class="checklist-tabla">
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox" /> Solicita: DNI, Licencia de Conducir o Pasaporte, motivo de la visita, nombre de la persona a visitar y nombre de la empresa a la que pertenece.</label>
  <label class="card-checklist"><input type="checkbox" /> Si recibe visita no anunciada, comunica con Supervisor de seguridad y/o asistente de seguridad para autorización.</label>
  <label class="card-checklist"><input type="checkbox" /> Verifica identidad del visitante con Reconocimiento facial de la Reniec, ingresando N° de DNI y captura del rostro.</label>
  <label class="card-checklist"><input type="checkbox" /> Realiza registro en sistema de seguridad de ingreso y salida.</label>
  <label class="card-checklist"><input type="checkbox" /> Entrega pase correspondiente al visitante y papeleta de ingreso (F-OPESEG-023).</label>
  <label class="card-checklist"><input type="checkbox" /> Indica vías de acceso y que debe portar el pase en lugar visible.</label>
  </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <div class="checklist-tabla">
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP consulta el motivo del ingreso, verificando la información compartida vía teams el Reporte de planificación o través de un correo electrónico (solicita autorización a asistente de seguridad, supervisor de seguridad o CCTV), nombre de la empresa a la que pertenece, solicitando los siguientes documentos: Documento Nacional de Identidad - DNI, fotochecks de la entidad a la que pertenece, Carnet de Aduana (vigente), Licencia de Conducir y/o documentos que sustente el trámite en ventanilla. </li>
    <li>AVP a través del aplicativo de Reconocimiento facial de la Reniec debe verificar la identidad del Cliente, ingresando el N° de su DNI y haciendo una captura del rostro del conductor, esperando la validación del rostro y los datos, de ser correcto otorgará el acceso, realiza el registro en sistema de seguridad ingreso y posterior salida, caso contrario, denegará el acceso y reportara al centro de control, quienes verificaran los datos correspondientes. </li>
  </ul>

   <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PROVEEDORES</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Cuando el personal de la empresa proveedora se presente por la puerta peatonal, el personal de vigilancia verifica el correo y solicita los siguientes documentos: Documentos Nacional de Identidad – DNI (En el caso de extranjeros solicitan pasaporte o carné de extranjería), consultando el motivo y el nombre de la empresa a la que pertenece.  </li>
  <li>AVP a través del aplicativo de Reconocimiento facial de la RENIEC debe verificar la identidad del chofer, ingresando el N° de su DNI y haciendo una captura del rostro del conductor esperando la validación del rostro y los datos, de ser correcto otorgará el acceso caso contrario, denegará el acceso y reportara al centro de control, quienes verificaran los datos correspondientes. </li>
  <li>AVP realiza el registro en sistema de seguridad.</li>
  <li>Si va a realizar la entrega de algún material o producto AVP solicita las guías de remisión.</li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE AUTORIDADES</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Ingreso de autoridades tales como SENASA, SUNAT, FISCALIA, DIRANDRO, MTC, MINTRA, BOE entre otros; AVP solicita Documento Nacional de Identidad - DNI y fotocheck de la entidad a la que pertenece y consulta el motivo del ingreso.</li>
  <li>AVP realiza el registro del personal en sistema de seguridad y posterior salida.</li>
  <li>AVP comunica al Operador de CCTV el ingreso de las autoridades</li>
  </ul>

   <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PERSONAL CESADO</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP verifica si hay correo de comunicación del área de Gestión de Desarrollo Humano de un personal cesado de TPP solicitando su acceso, de no haber correo, no permitirá el acceso, comunicará a CCTV. </li>
  <li>AVP solicita a personal cesado lo siguiente: DNI (Documento Nacional de Identidad) y preguntar el motivo por el cual solicitar el ingreso, comunica a CCTV el ingreso. </li>
  </ul>

  <div style="margin-top: 1.5em; padding: 1em; background-color:rgba(226, 203, 203, 0.65); border-left: 4px solid #0077cc;">
    <strong>CONSIDERACIONES GENERALES:</strong> 
    <ol style="text-align: justify; padding-left: 1.2em;">
      <li>Está prohibido el ingreso de armas a las instalaciones de TPP.</li>
      <li>El personal de vigilancia por ningún motivo debe permitir el ingreso de una persona que presente signos de haber ingerido licor y/o estupefacientes.</li>
      <li>Se encuentra prohibido el ingreso a niños menores de 10 años de edad a la zona operativa.</li>
      <li>El personal de vigilancia responsable de los accesos de ingreso y salida del terminal al detectar alguna anomalía debe proceder de acuerdo con el P-OPESEG-015 Procedimientos para identificar y responder ante eventos críticos.</li>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso - Puerta Naranja"] = `
  <!-- Puesto: Puerta de ingreso - Puerta Naranja -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">AVP PUERTA DE ACCESO ZONA OPERATIVA</h2>
  <p style="text-align: justify;">

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP solicita pase correspondiente para su acceso. </li>
    <li>En caso el cliente porte maletines, mochilas u otros se le indica con cortesía que no está permitido el ingreso con maletas u mochilas a patio y estos deben de dejarse en garita. </li>
    <li>AVP del acceso peatonal registra los datos del cliente en el formato F-OPESEG-020 Registro de Control de Ingreso y Salida de Visitas. (Si el Cliente requiere el ingreso a zona operativa debe contar con una orden de servicio, un volante de despacho, booking y/o resolución de aduanas la cual puede tramitar al momento de su atención en ventanilla o previamente a través del correo electrónico en coordinación con el operador de facturación o con importaciones).   </p></li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE TERCEROS</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <p>SEGUROS, IMPORTADORES, EXPORTADORES, ESTIBA, INSPECTORES, FUMIGADORES Y MAQUINARIA PESADA.<p>
    <li>AVP responsable del acceso peatonal solicita a los usuarios los siguientes documentos: Documento Nacional de Identidad – DNI, Licencia de Conducir y Pasaporte, SCTR y EPP.  /li>
    <li>ARevisa vía teams el Reporte de planificación, donde indique el nombre y apellido, número de DNI, cargo de la persona, razón social de los usuarios y labor a realizar. De estar conforme registrara el ingreso y entregara el pase de visita correspondiente a cada persona. (de requerir ingreso de suministros, equipos, cámaras fotográficas y/o herramientas para el desarrollo de sus labores, debe indicar enviar información a casilla accesostpp@tpp.com.pe un día antes de su ingreso y/ o coordinar Customer Service de servicio al cliente quien realizara el registro de información y actualizara vía teams el Reporte de planificación). </li>
    <li>AVP realiza el registro en sistema de seguridad ingreso y posterior salida.</li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>En caso el proveedor porte maletines, mochilas u otros se le indica con cortesía que muestre el interior. Las pertenencias serán removidas por su propio dueño. </li>
  <li>El proveedor que ingrese a la zona operativa debe portar indumentaria y/o equipo de protección personal (botas de seguridad, casco, chaleco reflectivo). </li>
  <li>Al concluir los trabajos el proveedor procede a retirarse; AVP realiza la revisión de maletas si las hubiera y anota su hora de salida en el formato electrónico F-OPESEG-020 Registro de Control de Ingreso y Salida de Visitas. </li>
  <li>AVP debe indicar al proveedor que solo puede dirigirse al almacén o a la zona que corresponda dejar los materiales.</li>
  <li>El personal de seguridad registra el ingreso y salida del proveedor en el formato F-OPESEG-022 Registro de Control de Ingreso y Salida de Vehículos. </li>
  <li>El personal de vigilancia realiza la inspección de la unidad, verificando la parte de la cabina, la maletera (si lo tuviera) y el contorno de la unidad.</li>
  </ul>

    <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA PERSONAL CESADO</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP verifica que las pertenencias del personal cesado para su internamiento.</li>
    <li>AVP a la Saida de personal, detectar alguna pertenencia no registrada debe comunicar inmediatamente a CCTV/Supervisor de Seguridad no permitiendo la salida del personal. </li>
  </ul>

`;

funcionesPorPuesto["Puerta de ingreso Vehiculos Menores"] = `
  <!-- Puesto: Puerta de ingreso peatonal - Garita T1 -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES CON VEHICULO</h2>
  <p style="text-align: justify;">
  </p>
   <h3>AVP PUERTA DE ACCESO VEHICULAR: </h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>En caso la visita ingrese con vehículo, la unidad se estaciona en el parqueo administrativo. AVP registra los datos del visitante en el formato F-OPESEG-022 Registro de control de Ingreso y Salida de vehículos, realiza la revisión de la unidad (cabina, contorno y maletera).</li>
    <li>En caso el visitante porte maletines, mochilas u otros se le indica con cortesía que muestre el interior. Las pertenencias deben ser removidas por su propio dueño.</li>
    <li>AVP registra los datos del visitante en el formato electrónico F-OPESEG -020 Registro de Control de Ingreso y Salida de Visitas. </li>
    <li>La visita procede a retirarse por el acceso peatonal y/o vehicular según sea el caso; AVP realiza la revisión correspondiente, solicita la papeleta de ingreso debidamente firmada y sellada por la persona visitada y registra la hora de salida en el formato electrónico F-OPESEG-020 Registro de Control de Ingreso y Salida de Visitas. </li>
  </ul>

    <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE A ZONA OPERATIVA - VEHICULAR</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Autoridades ingresan con vehículo, se estacionan en el parqueo administrativo señalizado para visitas. AVP realiza la revisión respectiva de la unidad (cabina, contorno y maletera). </li>
  <li>En caso las autoridades porten maletines, mochilas u otros se les indica con cortesía que muestre el interior. Las pertenencias son removidas por su propio dueño.</li>
  <li>AVP verifica que porten con indumentaria y/o equipo de protección personal (casco y chaleco reflectivo), de no contar con EPP el área de seguridad proporciona los implementos necesarios, los cuales deben ser devueltos al término de la diligencia.</li>
  <li>Al concluir, las autoridades proceden a retirarse por el acceso peatonal y/o vehicular según sea el caso; el personal de seguridad realiza la revisión de maletas si las hubiera y registra la hora de salida.</li>
  </ul>
`;

funcionesPorPuesto["Puerta de ingreso LCL"] = `
  <!-- Puesto: Puerta de ingreso LCL -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERÍA PARA COMO DEPOSITO SIMPLE</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <h3>INGRESO</h3>
  <li>AVP solicita al transportista los siguientes documentos:  Guía de Remisión del Cliente y Guía de Remisión del Transportista y/o correo de customer. </li>
  <li>AVP verifica en la guía de remisión del cliente y del transportista los siguientes datos: Dirección del almacén (TPP), placa del vehículo, la descripción y cantidad de la mercadería o número de contenedor. </li>
  <li>AVP En el caso el transportista no cuente con estos documentos el personal de vigilancia, solicita confirmación del Operador de CCTV, para proceder con el ingreso. </li>
  <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026. </li>
  <li>AVP registra los datos del vehículo, chofer y la descripción de la mercadería indicando el N.º de bultos en el formato F-OPESEG-043 Tránsito de Mercadería Carga Suelta. </li>
  <h3>SALIDA</h3>
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. </li>
  <li>AVP revisa la unidad y registra la hora de salida del en el formato F-OPESEG-044 Tránsito de Mercadería Carga Suelta. </li>
</ul>
`;

funcionesPorPuesto["Puerta de salida de camiones - Balanza de Salida"] = `
  <!-- Puesto: Puerta de salida de camiones - Balanza de Salida -->
<h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACIÓN(DESPACHOS) </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP solicita al transportista el ticket de pesaje de balanza verificando que el N.º de contenedor concuerde con el físico, asimismo el EIR manual donde verifica el número de precinto y el número de contenedor, llenado por el almacenero de Llenos.</li>
  <li>AVP realiza el registro de salida AR PORTAL, si la aplicación arrojara que datos son incorrectos u otro mensaje de error no permitirá la salida de la unidad informando de inmediato a Supervisor de Seguridad y/o a Operador de CCTV. </li>
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. </li>
  <li>AVP Adicionalmente en el caso de Reefers verifican el cable conectado al contenedor. </li>
  <li>AVP registra el número de precinto, el número de contenedor y la hora de salida del transportista en el formato F-OPSEG-025 Tránsito de contenedores.</li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS PARA EXPORTACIÓN(Embarques)</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP a la salida del camión verificará que el contenedor se encuentre en el listado entregado   resaltándolo, deberá solicitar la Guía de remisión de TPP la cual debe ser física o virtual, de lo contario no dará salida a unidad, debe verificar los datos del contenedor y precinto, contrastándolos con el físico. </li>
  <li>AVP El personal de vigilancia realizará la verificación de dispositivo de seguridad cola de pato en “U” o invertida que se encuentre correctamente asegurada y con pernos completos, de no ser así no permitirá la salida de la unidad comunicando a Supervisor de Seguridad y/o operador de CCTV. </li>
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. </li>
  <li>AVP Adicionalmente en el caso de Reefers verifican el cable conectado al contenedor y Mampara de unidad, la cual debe ser pegada a contenedor a unos 15 cm y la mampara debe tener altura de 1.80mt.  </li>
  <li>AVP no debe permitir la salida de ninguna carga sin la Orden de salida correspondiente visada por el área de documentación. </li>
  <li>AVP comunican al chofer de custodia la salida de los contenedores para la escolta correspondiente. </li>
  <li>AVP registra, el N° de contenedor, precinto, la hora de la salida del transportista y N° de guía en el formato F-OPESEG-25 Tránsito de contenedores. </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. </li>
  <li>AVP registra la salida del transportista en el formato F-OPESEG-025 Tránsito de Contenedores. </li>
</ul>

<h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON MERCADERÍA PARA SER LLENADO EN TPP </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026.</li>
  <li>AVP revisa y registra la hora de salida en el formato F-OPESEG-025 Tránsito de Contenedores. </li>
`;
funcionesPorPuesto["AFORO"] = `
  <!-- Puesto: Aforo -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>

  <h3>1. Objetivo del Puesto</h3>
  <p style="text-align: justify;">
    Describir las funciones y responsabilidades asignadas al vigilante que realiza las tareas en el puesto de <strong>Aforo</strong>.
  </p>
  <!-- Más detalles según el puesto -->
`;

funcionesPorPuesto["LLENADO"] = `
  <!-- Puesto: Llenado -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>

  <h3>1. Objetivo del Puesto</h3>
  <p style="text-align: justify;">
    Describir las funciones y responsabilidades asignadas al vigilante que realiza las tareas en el puesto de <strong>Llenado</strong>.
  </p>
  <!-- Más detalles según el puesto -->
`;

funcionesPorPuesto["LCL"] = `
  <!-- Puesto: LCL -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>

  <h3>1. Objetivo del Puesto</h3>
  <p style="text-align: justify;">
    Describir las funciones y responsabilidades asignadas al vigilante que realiza las tareas en el puesto de <strong>LCL</strong>.
  </p>
  <!-- Más detalles según el puesto -->
`;


// TPP2
funcionesPorPuesto["Puerta de ingreso de camiones - T3"] = `
  <!-- Puesto: Puerta de ingreso de camiones - T3 -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <!-- Similar estructura que los anteriores -->
`;
funcionesPorPuesto["Puerta de ingreso peatonal - Garita T1"] = `
  <!-- Puesto: Puerta de ingreso peatonal - Garita T1 -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES</h2>
  <p style="text-align: justify;">
  </p>
   <h3>AVP GARITA PEATONAL</h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP acceso peatonal solicita DNI, Licencia de Conducir o Pasaporte, consultando el motivo de la visita, el nombre de la persona a visitar y el nombre de la empresa a la que pertenece.</li>
    <li>Si AVP, recibe una visita no anunciada se comunica con el Supervisor de seguridad y/o el asistente de seguridad y estos a su vez solicitan confirmación con el área visitada para la autorización correspondiente, El área visitada regulariza con el envío de un correo. </li>
    <li>AVP a través del aplicativo de Reconocimiento facial de la Reniec debe verificar la identidad del visitante, ingresando el N° de su DNI y haciendo una captura del rostro, esperando la validación del rostro y los datos, de ser correcto otorgará el acceso, realiza el registro en sistema de seguridad ingreso y posterior salida, caso contrario, denegará el acceso y reportara al centro de control, quienes verificaran los datos correspondientes. </li>
    <li>AVP realiza el registro en sistema de seguridad acceso.</li>
    <li>AVP responsable del acceso peatonal entrega el pase correspondiente al visitante y la papeleta de ingreso de acuerdo con el formato electrónico F-OPESEG-023 Papeleta de Ingreso, indicándole las vías de acceso y que debe portar el pase en lugar visible. (El visitante no puede salir a la parte externa del Terminal de Almacenamiento con el pase de visita, deberá devolverlo y solicitar nuevamente el pase si desea reingresar a las instalaciones de TPP). </li>
  </ul>
`;
funcionesPorPuesto["Puerta de ingreso - Puerta Ploma"] = `
  <!-- Puesto: Puerta de ingreso - Puerta Ploma -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">AVP PUERTA DE ACCESO ZONA OPERATIVA</h2>
  <p style="text-align: justify;">

<h3>ACCESO DE CLIENTES</h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP solicita pase correspondiente para su acceso. </li>
    <li>En caso el cliente porte maletines, mochilas u otros se le indica con cortesía que no está permitido el ingreso con maletas u mochilas a patio y estos deben de dejarse en garita. </li>
    <li>AVP del acceso peatonal registra los datos del cliente en el formato F-OPESEG-020 Registro de Control de Ingreso y Salida de Visitas. (Si el Cliente requiere el ingreso a zona operativa debe contar con una orden de servicio, un volante de despacho, booking y/o resolución de aduanas la cual puede tramitar al momento de su atención en ventanilla o previamente a través del correo electrónico en coordinación con el operador de facturación o con importaciones).   </p></li>
  </ul>
     <h3>ACCESO DE USUARIOS</h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <p>SEGUROS, IMPORTADORES, EXPORTADORES, ESTIBA, INSPECTORES, FUMIGADORES Y MAQUINARIA PESADA.<p>
    <li>AVP responsable del acceso peatonal solicita a los usuarios los siguientes documentos: Documento Nacional de Identidad – DNI, Licencia de Conducir y Pasaporte, SCTR y EPP.  /li>
    <li>ARevisa vía teams el Reporte de planificación, donde indique el nombre y apellido, número de DNI, cargo de la persona, razón social de los usuarios y labor a realizar. De estar conforme registrara el ingreso y entregara el pase de visita correspondiente a cada persona. (de requerir ingreso de suministros, equipos, cámaras fotográficas y/o herramientas para el desarrollo de sus labores, debe indicar enviar información a casilla accesostpp@tpp.com.pe un día antes de su ingreso y/ o coordinar Customer Service de servicio al cliente quien realizara el registro de información y actualizara vía teams el Reporte de planificación). </li>
    <li>AVP realiza el registro en sistema de seguridad ingreso y posterior salida.</li>
  </ul>
`;
funcionesPorPuesto["Puerta de salida de camiones - T5"] = `
  <!-- Puesto: Puerta de salida de camiones - T5 -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <!-- Similar estructura que los anteriores -->
`;
funcionesPorPuesto["PDT - T4"] = `
  <!-- Puesto: Puerta de ingreso -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACÍOS DE DESCARGA DIRECTA DE LA LÍNEA 
 </h2>
  <p style="text-align: justify;">
  </p>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso con un contenedor de descarga el AVP verifica que se encuentren en la lista proporcionada de descarga.  </li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>De ser caso de contenedor Reefers verifican el cable conectado al contenedor </li>
    <li>AVP registra la hora de ingreso, nombre del chofer, licencia, los datos de la unidad y el N° de contenedor y N° de precinto en el formato F-OPESEG-025 Tránsito de contenedores. </li>
    <li>AVP realiza el registro en aplicación TPP WEB; opción, Op. Vacíos, Ingreso de contenedores, Opción descarga, donde ingresara número de manifiesto y numero de contenedor, placa y licencia de conductor, luego lo registra con click en grabar, de arrojar error informara a CCTV.  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCIÓN DE CONTENEDORES VACÍOS DE CLIENTES. 
 </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso el contenedor de devolución, AVP solicita los siguientes documentos: Memo de Devolución (emitido por Greenandes, Amerandes, Yang Ming, Cosco o China Shipping, Eveergreen, SpaceWase, Emkay, One, OOCL), confirmación de Pago ITOP, Tarjeta de propiedad y licencia de conducir vigente (Categoría AIII). 
</li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>AVP verifica en el Memo de devolución el cual puede ser impresa o virtual, emitido por la agencia marítima, los siguientes datos: El nombre del Cliente, Dirección del almacén (TPP), fecha de validez vigente BL y N.º de contenedor, verifica en confirmación de pago ITOP el cual puede ser impresa o virtual que el número de BL coincida con el del Memo de devolución. (Si el documento es físico, personal de vigilancia verifica y retorna documento al conductor, no se queda con ningún documento). 
</li>
    <li>AVP realiza el registro en aplicación TPP WEB; Opción Op. Vacios, Opción devolución, donde ingresara el número de contenedor aparecerá el número de BL en pantalla, AVP verificara que sea el mismo que figura en Memo de devolución, placa, transportes, nombre de conductor, deberá adjuntar foto de conductor, a continuación, dará click en grabar. 
</li>
    <li>Adicionalmente si se trata de un contenedor RH debe de ser reportado a CCTV para recibir instruccion de direccionamiento al almacen correcto. 
</li>
<li>AVP registra la hora de ingreso, nombre chofer, licencia, los datos de la unidad y el contenedor en el formato F-OPESEG-25 Tránsito de contenedores.</li>
  </ul>
`;
funcionesPorPuesto["Aforo"] = `
  <!-- Puesto: Aforo -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <!-- Similar estructura que los anteriores -->
`;
funcionesPorPuesto["Llenado"] = `
  <!-- Puesto: Llenado -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <!-- Similar estructura que los anteriores -->
`;



//ALMACENES VACIOS//

// TPP3
funcionesPorPuesto["Puerta de Ingreso"] = `
  <!-- Puesto: Puerta de ingreso -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS PARA CLIENTES DE EXPORTACION </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP solicita los siguientes documentos: Booking, confirmación de pago ITOP, tarjeta de propiedad y licencia de conducir vigentes (Categoría AIII). 
  </li>
  <li>AVP verifica en el Booking  los siguientes datos: Dirección del almacén (TPP) y la Línea a la que pertenece, en confirmación de pago ITOP impresa verificara que el número de Booking sea el mismo, estos documentos pueden ser impresos o virtual. (Si el documento es físico personal de vigilancia verifica y retorna documento a conductor, no se queda con ningún documento). 
  </li>
  <li>AVP Verifica número de Booking en lista de programación otorgada a fin de ver fecha y horario de atención, (Ingreso puede ser una hora antes y hora después). 
  </li>
  <li>AVP realiza en registro en la aplicación, TPP WEB, opción Op. Vacíos, Despacho de contenedor, Asignación, registrar, ingresara los siguientes datos, numero de booking, placa, brevete, foto de chofer, luego dará click en grabar, de tener mensaje de error informara a CCTV.   
  </li>
  <li>AVP realiza aleatoriamente la Inspección del camión y llenará el formato F-OPESEG-026. 
  </li>
  <li>AVP registra la hora de ingreso, nombre del chofer, licencia, los datos de la unidad y N° de booking en el formato F-OPESEG-025 Tránsito de contenedores. 
  </li>
  <li>AVP registra la fecha, hora y placa en EIR (Equipment Interchange Receipt), luego realiza entrega de este a conductor.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS A LA LÍNEA – EXPORTACIÓN(Embarques).</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Cuando el transportista se presente en la puerta de acceso, AVP verifica que se encuentren en la lista otorgada y solicita los siguientes documentos: Tarjeta de propiedad y licencia de conducir vigentes (Categoría AIII).</li>
  <li>AVP revisa antes del ingreso: extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026.</li>
  <li>El personal de vigilancia registra la hora de ingreso, nombre chofer, licencia y los datos de la unidad en el formato F-OPESEG-025 Tránsito de contenedores.</li>
  </ul>
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRE SEDES </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Cuando el transportista se presente en la puerta de acceso, AVP verifica que se encuentren en la lista enviada (Operador de CCTV o Asistente de Seguridad realiza entrega de relación de unidades) y solicita los siguientes documentos: tarjeta de propiedad, licencia de conducir vigente (Categoría AIII).</li>
  <li>AVP revisa antes del ingreso: extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026.</li>
  <li>AVP registra la hora de ingreso, nombre chofer, licencia y los datos de la unidad en el formato F-OPESEG-025 Tránsito de contenedores.</li>
  </ul>
  `;
funcionesPorPuesto["PDT-3"] = `
  <!-- Puesto: Puerta de ingreso -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACÍOS DE DESCARGA DIRECTA DE LA LÍNEA 
 </h2>
  <p style="text-align: justify;">
  </p>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso con un contenedor de descarga el AVP verifica que se encuentren en la lista proporcionada de descarga.  </li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>De ser caso de contenedor Reefers verifican el cable conectado al contenedor </li>
    <li>AVP registra la hora de ingreso, nombre del chofer, licencia, los datos de la unidad y el N° de contenedor y N° de precinto en el formato F-OPESEG-025 Tránsito de contenedores. </li>
    <li>AVP realiza el registro en aplicación TPP WEB; opción, Op. Vacíos, Ingreso de contenedores, Opción descarga, donde ingresara número de manifiesto y numero de contenedor, placa y licencia de conductor, luego lo registra con click en grabar, de arrojar error informara a CCTV.  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCIÓN DE CONTENEDORES VACÍOS DE CLIENTES. 
 </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso el contenedor de devolución, AVP solicita los siguientes documentos: Memo de Devolución (emitido por Greenandes, Amerandes, Yang Ming, Cosco o China Shipping, Eveergreen, SpaceWase, Emkay, One, OOCL), confirmación de Pago ITOP, Tarjeta de propiedad y licencia de conducir vigente (Categoría AIII). 
</li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>AVP verifica en el Memo de devolución el cual puede ser impresa o virtual, emitido por la agencia marítima, los siguientes datos: El nombre del Cliente, Dirección del almacén (TPP), fecha de validez vigente BL y N.º de contenedor, verifica en confirmación de pago ITOP el cual puede ser impresa o virtual que el número de BL coincida con el del Memo de devolución. (Si el documento es físico, personal de vigilancia verifica y retorna documento al conductor, no se queda con ningún documento). 
</li>
    <li>AVP realiza el registro en aplicación TPP WEB; Opción Op. Vacios, Opción devolución, donde ingresara el número de contenedor aparecerá el número de BL en pantalla, AVP verificara que sea el mismo que figura en Memo de devolución, placa, transportes, nombre de conductor, deberá adjuntar foto de conductor, a continuación, dará click en grabar. 
</li>
    <li>Adicionalmente si se trata de un contenedor RH debe de ser reportado a CCTV para recibir instruccion de direccionamiento al almacen correcto. 
</li>
<li>AVP registra la hora de ingreso, nombre chofer, licencia, los datos de la unidad y el contenedor en el formato F-OPESEG-25 Tránsito de contenedores.</li>
  </ul>

`;
funcionesPorPuesto["Puerta de Salida"] = `
  <!-- Puesto: Puerta de salida -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACÍOS DE DESCARGA DIRECTA DE LA LÍNEA 
 </h2>
  <p style="text-align: justify;">
  </p>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPSEG-026. </li>
    <li>AVP registra la salida del transportista en el formato F-OPESEG-025. Tránsito de contenedores     </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCIÓN DE CONTENEDORES VACÍOS DE CLIENTES
 </h2>
  
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. Inspección de camiones. 
</li>
  <li>AVP registra la salida del transportista en el formato F-OPESEG-025 Tránsito de contenedores. 
</li>
</ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS PARA CLIENTES DE EXPORTACION</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP solicita al transportista el siguiente documento: EIR (Equipment Interchange Receipt), el cual debe ser impreso por la Garita de vacíos. 
  </li>
  <li>En caso de horario extraordinario (17:00 horas) y el transportista no cuente con EIR, el almacenero de turno (Vacíos) será el responsable de la autorización de salida. Para los Reefers, siempre se retirará el contenedor con EIR.
  </li>
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026.
  </li>
  <li>AVP Adicionalmente en el caso de Reefers  verifican el cable conectado al contenedor.
  </li>
  <li>AVP registra la salida del transportista, el N° de contenedor, N° de precinto y N° EIR en el formato F-OPESEG-025 Tránsito de contenedores.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS A LA LÍNEA – EXPORTACIÓN(Embarques)</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP, verifica que el N° del contenedor se encuentre en el listado recibido, asimismo que los datos estén en la guía, antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026.
  </li>
  <li>AVP Adicionalmente en el caso de Reefers verifican el cable conectado al contenedor.
  </li>
  <li>AVP registra la salida del transportista, el N° de contenedor, N° precinto y N° de guía en el formato F-OPESEG-025 Tránsito de contenedores.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRE SEDES</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP verifica que el N° del contenedor, precintos, licencia, placa se encuentre en el EIR emitido por personal de vacíos, precintos y especifique local a trasladar contenedor, antes de la salida realizará la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. 
  </li>
  <li>AVP registrara la salida del transportista, el N° de contenedor, N° precinto y N° de guía en el formato F-OPESEG-025 Transito de Contenedores.
  </li>
  </ul>
  
`;

// TPP4
funcionesPorPuesto["Puerta de ingreso"] = `
  <!-- Puesto: Puerta de ingreso -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS PARA CLIENTES DE EXPORTACION </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP solicita los siguientes documentos: Booking, confirmación de pago ITOP, tarjeta de propiedad y licencia de conducir vigentes (Categoría AIII). 
  </li>
  <li>AVP verifica en el Booking  los siguientes datos: Dirección del almacén (TPP) y la Línea a la que pertenece, en confirmación de pago ITOP impresa verificara que el número de Booking sea el mismo, estos documentos pueden ser impresos o virtual. (Si el documento es físico personal de vigilancia verifica y retorna documento a conductor, no se queda con ningún documento). 
  </li>
  <li>AVP Verifica número de Booking en lista de programación otorgada a fin de ver fecha y horario de atención, (Ingreso puede ser una hora antes y hora después). 
  </li>
  <li>AVP realiza en registro en la aplicación, TPP WEB, opción Op. Vacíos, Despacho de contenedor, Asignación, registrar, ingresara los siguientes datos, numero de booking, placa, brevete, foto de chofer, luego dará click en grabar, de tener mensaje de error informara a CCTV.   
  </li>
  <li>AVP realiza aleatoriamente la Inspección del camión y llenará el formato F-OPESEG-026. 
  </li>
  <li>AVP registra la hora de ingreso, nombre del chofer, licencia, los datos de la unidad y N° de booking en el formato F-OPESEG-025 Tránsito de contenedores. 
  </li>
  <li>AVP registra la fecha, hora y placa en EIR (Equipment Interchange Receipt), luego realiza entrega de este a conductor.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS A LA LÍNEA – EXPORTACIÓN(Embarques).</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Cuando el transportista se presente en la puerta de acceso, AVP verifica que se encuentren en la lista otorgada y solicita los siguientes documentos: Tarjeta de propiedad y licencia de conducir vigentes (Categoría AIII).</li>
  <li>AVP revisa antes del ingreso: extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026.</li>
  <li>El personal de vigilancia registra la hora de ingreso, nombre chofer, licencia y los datos de la unidad en el formato F-OPESEG-025 Tránsito de contenedores.</li>
  </ul>
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRES SEDES </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>Cuando el transportista se presente en la puerta de acceso, AVP verifica que se encuentren en la lista enviada (Operador de CCTV o Asistente de Seguridad realiza entrega de relación de unidades) y solicita los siguientes documentos: tarjeta de propiedad, licencia de conducir vigente (Categoría AIII).</li>
  <li>AVP revisa antes del ingreso: extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026.</li>
  <li>AVP registra la hora de ingreso, nombre chofer, licencia y los datos de la unidad en el formato F-OPESEG-025 Tránsito de contenedores.</li>
  </ul>
  `;
funcionesPorPuesto["PDT-4"] = `
  <!-- Puesto: Puerta de ingreso -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACÍOS DE DESCARGA DIRECTA DE LA LÍNEA 
 </h2>
  <p style="text-align: justify;">
  </p>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso con un contenedor de descarga el AVP verifica que se encuentren en la lista proporcionada de descarga.  </li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>De ser caso de contenedor Reefers verifican el cable conectado al contenedor </li>
    <li>AVP registra la hora de ingreso, nombre del chofer, licencia, los datos de la unidad y el N° de contenedor y N° de precinto en el formato F-OPESEG-025 Tránsito de contenedores. </li>
    <li>AVP realiza el registro en aplicación TPP WEB; opción, Op. Vacíos, Ingreso de contenedores, Opción descarga, donde ingresara número de manifiesto y numero de contenedor, placa y licencia de conductor, luego lo registra con click en grabar, de arrojar error informara a CCTV.  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA DEVOLUCIÓN DE CONTENEDORES VACÍOS DE CLIENTES. 
 </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>Cuando el transportista se presente en la puerta de acceso el contenedor de devolución, AVP solicita los siguientes documentos: Memo de Devolución (emitido por Greenandes, Amerandes, Yang Ming, Cosco o China Shipping, Eveergreen, SpaceWase, Emkay, One, OOCL), confirmación de Pago ITOP, Tarjeta de propiedad y licencia de conducir vigente (Categoría AIII). 
</li>
    <li>AVP revisa antes del ingreso: Extintor de seguridad, botiquín de primeros auxilios, equipos de protección del chofer (chaleco reflectivo, zapatos de seguridad y casco) y realiza la Inspección del camión y aleatoriamente llenará el F-OPESEG-026 Inspección de camiones. </li>
    <li>AVP verifica en el Memo de devolución el cual puede ser impresa o virtual, emitido por la agencia marítima, los siguientes datos: El nombre del Cliente, Dirección del almacén (TPP), fecha de validez vigente BL y N.º de contenedor, verifica en confirmación de pago ITOP el cual puede ser impresa o virtual que el número de BL coincida con el del Memo de devolución. (Si el documento es físico, personal de vigilancia verifica y retorna documento al conductor, no se queda con ningún documento). 
</li>
    <li>AVP realiza el registro en aplicación TPP WEB; Opción Op. Vacios, Opción devolución, donde ingresara el número de contenedor aparecerá el número de BL en pantalla, AVP verificara que sea el mismo que figura en Memo de devolución, placa, transportes, nombre de conductor, deberá adjuntar foto de conductor, a continuación, dará click en grabar. 
</li>
    <li>Adicionalmente si se trata de un contenedor RH debe de ser reportado a CCTV para recibir instruccion de direccionamiento al almacen correcto. 
</li>
<li>AVP registra la hora de ingreso, nombre chofer, licencia, los datos de la unidad y el contenedor en el formato F-OPESEG-25 Tránsito de contenedores.</li>
  </ul>

`;
funcionesPorPuesto["Puerta de salida"] = `
  <!-- Puesto: Puerta de salida -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCION DE CONTENEDORES VACÍOS DE DESCARGA DIRECTA DE LA LÍNEA 
 </h2>
  <p style="text-align: justify;">
  </p>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPSEG-026. </li>
    <li>AVP registra la salida del transportista en el formato F-OPESEG-025. Tránsito de contenedores     </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA DEVOLUCIÓN DE CONTENEDORES VACÍOS DE CLIENTES
 </h2>
  
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. Inspección de camiones. 
</li>
  <li>AVP registra la salida del transportista en el formato F-OPESEG-025 Tránsito de contenedores. 
</li>
</ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS PARA CLIENTES DE EXPORTACION</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP solicita al transportista el siguiente documento: EIR (Equipment Interchange Receipt), el cual debe ser impreso por la Garita de vacíos. 
  </li>
  <li>En caso de horario extraordinario (17:00 horas) y el transportista no cuente con EIR, el almacenero de turno (Vacíos) será el responsable de la autorización de salida. Para los Reefers, siempre se retirará el contenedor con EIR.
  </li>
  <li>AVP realiza antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026.
  </li>
  <li>AVP Adicionalmente en el caso de Reefers  verifican el cable conectado al contenedor.
  </li>
  <li>AVP registra la salida del transportista, el N° de contenedor, N° de precinto y N° EIR en el formato F-OPESEG-025 Tránsito de contenedores.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL DESPACHO DE CONTENEDORES VACÍOS A LA LÍNEA – EXPORTACIÓN(Embarques)</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP, verifica que el N° del contenedor se encuentre en el listado recibido, asimismo que los datos estén en la guía, antes de la salida la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026.
  </li>
  <li>AVP Adicionalmente en el caso de Reefers verifican el cable conectado al contenedor.
  </li>
  <li>AVP registra la salida del transportista, el N° de contenedor, N° precinto y N° de guía en el formato F-OPESEG-025 Tránsito de contenedores.
  </li>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA TRASLADO DE CONTENEDORES VACIOS ENTRES SEDES</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <li>AVP verifica que el N° del contenedor, precintos, licencia, placa se encuentre en el EIR emitido por personal de vacíos, precintos y especifique local a trasladar contenedor, antes de la salida realizará la Inspección del camión y aleatoriamente llenará el formato F-OPESEG-026. 
  </li>
  <li>AVP registrara la salida del transportista, el N° de contenedor, N° precinto y N° de guía en el formato F-OPESEG-025 Transito de Contenedores.
  </li>
  </ul>
  
`;

