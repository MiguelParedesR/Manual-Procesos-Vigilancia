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
  <ul style="text-align: justify; padding-left: 1.2em;">
    <div class="checklist-tabla">
    <label class="card-checklist"><input type="checkbox" />Consulta motivo de ingreso, verifica la informacion compartida via teams o a traves de un correo electronico</label>
    <label class="card-checklist"><input type="checkbox" />Solicita los siguientes documentos: Documento Nacional de Identidad - DNI, fotochecks de la entidad a la que pertenece, Carnet de Aduana (vigente), Licencia de Conducir y/o documentos que sustente el trámite en ventanilla.</label>
    <label class="card-checklist"><input type="checkbox" />Verifica identidad del cliente con Reconocimiento facial de la Reniec, ingresando N° de DNI y captura del rostro.</label>
  </ul>
  

   <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PROVEEDORES</h2>
   <ul style="text-align: justify; padding-left: 1.2em;">
   <div class="checklist-tabla">
    <label class="card-checklist"><input type="checkbox" />Solicita los siguientes documentos: Documento Nacional de Identidad - DNI, fotochecks de la entidad a la que pertenece, Carnet de Aduana (vigente), Licencia de Conducir y/o documentos que sustente el trámite en ventanilla.</label>
    <label class="card-checklist"><input type="checkbox" />Verifica identidad del proveedor con Reconocimiento facial de la Reniec, ingresando N° de DNI y captura del rostro.</label>
    <label class="card-checklist"><input type="checkbox" />Realiza el registro en sistema de seguridad</label>
    <label class="card-checklist"><input type="checkbox" />Realiza el registro en sistema de seguridad</label> 
    <label class="card-checklist"><input type="checkbox" />Solicita Guias de Remision, si cuenta con material o producto a dejar.</label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE AUTORIDADES</h2>
   <ul style="text-align: justify; padding-left: 1.2em;">
   <div class="checklist-tabla">  
  <label class="card-checklist"><input type="checkbox" />Para autoridades tales como SENASA, SUNAT, FISCALIA, DIRANDRO, MTC, MINTRA, BOE entre otros; solicita DNI, fotocheck de entidad a la que pertence y consulta motivo de ingreso</label>
  <label class="card-checklist"><input type="checkbox" />Realiza el registro del personal en sistema de seguridad y posterior salida</label>
  <label class="card-checklist"><input type="checkbox" />Comunica al Operador de CCTV el ingreso de las autoridades</label>
  </ul>

   <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PERSONAL CESADO</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
     <div class="checklist-tabla">  
  <label class="card-checklist"><input type="checkbox" />Verifica si hay correo por parte de GDH, solicitando el acceso del personal CESADO, de no haberlo, no ingresa.</label>
    <label class="card-checklist"><input type="checkbox" />Solicita los siguientes documentos: DNI y consulta el motivo de su ingreso.</label>
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
  <div class="checklist-tabla">
  <label class="card-checklist"><input type="checkbox"/>Solicita pase correspondiente para su acceso.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso porte maletines u otros se le indica con cortesia que no esta permitido el ingreso a patio con maletines u otros, y que deben de dejarlos en la garita</label>
  <label class="card-checklist"><input type="checkbox"/>Registra los datos del cliente en el formato F-0PESEG-020 - Registro de Control de Ingreso y Salida de Visitas, si ingresa a Zona Operativa, debe de contar con su (OS,OT)</label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE TERCEROS</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <p>SEGUROS, IMPORTADORES, EXPORTADORES, ESTIBA, INSPECTORES, FUMIGADORES Y MAQUINARIA PESADA.<p>
  <div class="checklist-tabla">
    <label class="card-checklist"><input type="checkbox"/>Solicita a los usuarios los siguiente documentos: DNI, Licencia de Conducir, Pasaporte, SCTR y EPP.</label>
    <label class="card-checklist"><input type="checkbox"/>Revisa via TEAMS el reporte de planificacion, de estar conforme se registrara el ingreso en el Sistema de Visitas y se entregara un pase.</label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <div class="checklist-tabla">
  <label class="card-checklist"><input type="checkbox"/>En caso el proveedor porte maletines u otros, se le indicara con cortesia que muestre el interior.</label>
  <label class="card-checklist"><input type="checkbox"/>El proveedor que ingrese a zona operativa debe portar equipo EPP</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza la revision de maletas si las hubiera, y procede a registrar en el formato F-0PESEG-020.</label>
  <label class="card-checklist"><input type="checkbox"/>Debe indicar al proveedor que solo puede dirigirse al almacen o a la zona que corresponda dejar los materiales.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra el ingreso y salida del proveedor en el formato F-0PESEG-022.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza la inspeccion de la unidad, verificando la cabina, maletera y el contorno de la unidad.</label>
  </ul>

    <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA PERSONAL CESADO</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <div class="checklist-tabla">
  <label class="card-checklist"><input type="checkbox"/>Verifica que las pertenencias del personal CESADO para su internamiento.</label>
  <label class="card-checklist"><input type="checkbox"/>Verificar a la salida del personal CESADO, de encontrar alguna pertenencia no registrada debe de comunicar a CCTV/Supervisor de Seguridad.</label>
  </ul>
`;
funcionesPorPuesto["Puerta de ingreso Vehiculos Menores"] = `
  <!-- Puesto: Puerta de ingreso peatonal - Garita T1 -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES CON VEHICULO</h2>
  </p>
   <h3>AVP PUERTA DE ACCESO VEHICULAR: </h3>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox"/>En caso ingrese con vehiculo, debe de estacionarse en el parqueo administrativo.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra los datos del visitante en el formato F-OPESEG-022.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso el visitante porte maletines, mochilas u otros se le indica con cortesía que muestre el interior. Las pertenencias deben ser removidas por su propio dueño.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra los datos del visitante en el formato electrónico F-OPESEG-020 Registro de Control de Ingreso y Salida de Visitas.</label>
  <label class="card-checklist"><input type="checkbox"/>Al retirarse, se solicita la papeleta de ingreso debidamente firmada, sellada por la persona visitada y registra la salida en el formato electronico F-OPESEG-020.</label>
  </ul>
  
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE A ZONA OPERATIVA - VEHICULAR</h2>
  <style="text-align: justify; padding-left: 1.2em;">
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox"/>En caso ingrese con vehiculo, debe de estacionarse en el parqueo administrativo.</label>
  <label class="card-checklist"><input type="checkbox"/>El personal de vigilancia realiza la revisión de la unidad (cabina, contorno y maletera).</label>
  <label class="card-checklist"><input type="checkbox"/>En caso el visitante porte maletines, mochilas u otros se le indica con cortesía que muestre el interior. Las pertenencias deben ser removidas por su propio dueño.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso el visitante no cuente con EPP, se le proporcionará los implementos necesarios, los cuales deben ser devueltos al término de la diligencia.</label>
  <label class="card-checklist"><input type="checkbox"/>Al concluir, las autoridades proceden a retirarse por el acceso peatonal y/o vehicular según sea el caso; el personal de seguridad realiza la revisión de maletas si las hubiera y registra la hora de salida.</label>
  </ul>

`;
funcionesPorPuesto["Puerta de ingreso LCL"] = `
  <!-- Puesto: Puerta de ingreso LCL -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERÍA PARA COMO DEPOSITO SIMPLE</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <h3>INGRESO</h3>
  <label class="card-checklist"><input type="checkbox"/>En caso ingrese con vehiculo, debe de estacionarse en el parqueo administrativo.</label>
  <label class="card-checklist"><input type="checkbox"/>Solicita al transportista: Guia de Remision del Cliente y Guia de Remision del Transportista, o correo de Customer.</label>
  <label class="card-checklist"><input type="checkbox"/>Verifica en ambas guias: Direccion de Almacen (TPP), placa del vehiculo, descripcion y cantidad de mercaderia.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso no se cuente con estos documentos, consulta a CCTV de turno para su ingreso.</label>
  <label class="card-checklist"><input type="checkbox"/>Verifica que cuenta con: Extintor de seguridad, botiquin, EPP y realiza Inspeccion Vehicular en formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra datos del vehiculo, chofer y descripcion de la mercaderia indicando N° bultos en el formato F-OPESEG-043.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza salida de Inspeccion del camion y aleatoriamente llenara el formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>Revisa la unidad y registra la hora de salida en formato F-OPESEG-044</label>
</ul>
`;
funcionesPorPuesto["AFORO"] = `
  <!-- Puesto: Aforo -->
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">Manual de Funciones</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <h3>1. Objetivo del Puesto</h3>
  <label class="card-checklist"><input type="checkbox"/>Realiza .</label>
  <p style="text-align: justify;">
    Describir las funciones y responsabilidades asignadas al vigilante que realiza las tareas en el puesto de <strong>Aforo</strong>.
  </p>
  <!-- Más detalles según el puesto -->
`;


funcionesPorPuesto["Puerta de salida de camiones - Balanza de Salida"] = `
  <!-- Puesto: Puerta de salida de camiones - Balanza de Salida -->
<h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACIÓN(DESPACHOS) </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox"/>Solicita al conductor; ticket de pesaje, verificando que el N° de contenedor concuerde con el fisico, lo misma verificacion se hara con el EIR.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza salida AR PORTAL, si la APP arrojara mensaje de error o datos no sean los mismos que en fisico, se informara a Operador de CCTV/Supervisor de Seguridad.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza antes de la salida, la Inspeccion Vehicular de manera aleatoria llenara el formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso de contenedores tipo RH, verificara que este salga con su cable completo.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra el numero de precinto, contenedor y la hora de salida en formato F-OPESEG-025.</label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS PARA EXPORTACIÓN(Embarques)</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox"/>Verificara que el contenedor se encuentre en el listado entregado, debera solicitar la Guia de Remision de TPP (Fisica o Virtual).</label>
  <label class="card-checklist"><input type="checkbox"/>Validara los datos en Guia, con los datos en Fisico.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza verificacion de dispositivo de seguridad; cola de pato en "U" o invertida, correctamente asegurada.</label>
  <label class="card-checklist"><input type="checkbox"/>Realiza antes de la salida, la Inspeccion Vehicular de manera aleatoria llenara el formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>En caso de contenedores tipo RH, debera de verificar el cable, mampara de seguridad, la cual debe tener 15cm de distancia y 1.80 mts de altura.</label>
  <label class="card-checklist"><input type="checkbox"/>Comunica al conductor de custodia la salida de los contenedores para la escolta correspondiente.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra el N° de contenedor, precinto, hora de salida, N° de Guia en el formato F-OPESEG-25.</label>
  <label class="card-checklist"><input type="checkbox"/> </label>
  </ul>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
  <label class="card-checklist"><input type="checkbox"/>Realiza antes de la salida, la Inspeccion Vehicular de manera aleatoria llenara el formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra el numero de precinto, contenedor y la hora de salida en formato F-OPESEG-025.</label>

<h2 style="margin-bottom: 0.5em; color: #005fa3;">SALIDA DE CAMIONES CON MERCADERÍA PARA SER LLENADO EN TPP </h2>
  <ul style="text-align: justify; padding-left: 1.2em;">
    <label class="card-checklist"><input type="checkbox"/>Realiza antes de la salida, la Inspeccion Vehicular de manera aleatoria llenara el formato F-OPESEG-026.</label>
  <label class="card-checklist"><input type="checkbox"/>Registra el numero de precinto, contenedor y la hora de salida en formato F-OPESEG-025.</label>s
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
    const label = e.target.closest(".card-checklist");
    if (label) {
      label.classList.toggle("checked", e.target.checked);
      if (e.target.checked) {
        label.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    revisarChecklistFinal();
  }
});





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


