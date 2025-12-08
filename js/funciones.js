// Refuerzos de checklist y homogeneidad por local
funcionesPorPuesto["Puerta de ingreso de camiones - T3"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE IMPORTACION (DESPACHOS)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Confirma unidad en programacion o listado autorizado.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita tarjeta de propiedad, licencia AIII y documentos (AR/QR, guia, SCTR).</label>
      <label class="card-checklist"><input type="checkbox" /> Valida chofer en RENIEC y toma selfie de registro.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa extintor, botiquin, EPP y cabina/contenedor.</label>
      <label class="card-checklist"><input type="checkbox" /> Anota placa, contenedor y precinto en F-OPESEG-025 y avisa a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES PARA EL RETIRO DE CONTENEDORES LLENOS DE EXPORTACION (EMBARQUE)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Confirma unidad nombrada y en horario autorizado.</label>
      <label class="card-checklist"><input type="checkbox" /> Solicita booking/guia, tarjeta de propiedad y licencia vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa EPP, extintor y precintos antes de ingreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-025 y coordina con CCTV si precisa inspeccion.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON CONTENEDORES LLENOS DE DESCARGA DE IMPORTACION</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita ticket de pesaje y valida contenedor y precinto.</label>
      <label class="card-checklist"><input type="checkbox" /> Contrasta con listado de inspeccion SINI y marca seleccionados.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa cable de energia de reefers cuando aplique.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona unidad y completa al azar F-OPESEG-026.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos y comunica ingreso a CCTV.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">INGRESO DE CAMIONES CON MERCADERIA PARA SER LLENADO EN TPP</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita booking u orden/autorizacion de llenado vigente.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica direccion de almacen, placa y descripcion en guias.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa EPP del chofer y condiciones de la unidad.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-025 y toma fotos cuando aplique.</label>
      <label class="card-checklist"><input type="checkbox" /> Reporta observaciones a CCTV antes de autorizar.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso peatonal - Garita T1"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE VISITANTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Pide DNI, motivo, persona a contactar y empresa.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con facial RENIEC y selfie.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en el sistema.</label>
      <label class="card-checklist"><input type="checkbox" /> Entrega pase y papeleta F-OPESEG-023 para uso visible.</label>
      <label class="card-checklist"><input type="checkbox" /> Consulta con supervisor si no esta anunciada.</label>
      <label class="card-checklist"><input type="checkbox" /> Indica rutas permitidas y normas de permanencia.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, fotocheck, carnet de aduana y documentos del tramite.</label>
      <label class="card-checklist"><input type="checkbox" /> Valida identidad con RENIEC y captura facial.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en sistema y entrega pase autorizado.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PROVEEDORES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, fotocheck, licencia y SCTR.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica identidad con RENIEC y selfie.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en el sistema.</label>
      <label class="card-checklist"><input type="checkbox" /> Si trae material, pide guias y registra en F-OPESEG-020.</label>
      <label class="card-checklist"><input type="checkbox" /> Informa normas de EPP y zonas permitidas.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE AUTORIDADES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI y credencial institucional y registra motivo.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en sistema y coordina con CCTV.</label>
      <label class="card-checklist"><input type="checkbox" /> Reporta al supervisor incidencias o restricciones.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE PERSONAL CESADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica autorizacion de GDH.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra datos y pertenencias y revisa al salir.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONSIDERACIONES GENERALES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Prohibe ingreso con armas o bajo alcohol/drogas.</label>
      <label class="card-checklist"><input type="checkbox" /> Restringe ingreso de menores de 10 anos a zona operativa.</label>
      <label class="card-checklist"><input type="checkbox" /> Aplica P-OPESEG-015 ante eventos criticos.</label>
      <label class="card-checklist"><input type="checkbox" /> Mantiene registros completos para auditoria.</label>
    </ul>
  </div>
`;

funcionesPorPuesto["Puerta de ingreso - Puerta Ploma"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE CLIENTES</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Pide pase y verifica motivo.</label>
      <label class="card-checklist"><input type="checkbox" /> Si lleva maletin, indica dejarlo en garita o mostrar contenido.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra en F-OPESEG-020 cuando aplique.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO DE TERCEROS (SEGUROS, INSPECTORES, FUMIGADORES)</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Solicita DNI, licencia, SCTR y EPP exigido.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica en reporte de planificacion y registra ingreso.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO A ZONA OPERATIVA</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Revisa maletas o equipos con autorizacion previa.</label>
      <label class="card-checklist"><input type="checkbox" /> Controla uso de EPP y limita zonas permitidas.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra ingreso y salida en F-OPESEG-022.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona unidad (cabina, contorno, maletera).</label>
      <label class="card-checklist"><input type="checkbox" /> Indica rutas especificas para entrega o trabajos.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">ACCESO PERSONAL CESADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Revisa pertenencias para internamiento y registra.</label>
      <label class="card-checklist"><input type="checkbox" /> Al salir, coteja pertenencias y reporta novedades a CCTV.</label>
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

funcionesPorPuesto["Aforo"] = `
  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONTROL DE AFORO Y SEGURIDAD</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Controla aforo y bloquea ingresos al llegar al limite.</label>
      <label class="card-checklist"><input type="checkbox" /> Cuenta personas y vehiculos en app o planilla en tiempo real.</label>
      <label class="card-checklist"><input type="checkbox" /> Verifica EPP y motivo antes de permitir ingreso.</label>
      <label class="card-checklist"><input type="checkbox" /> Prioriza ingresos criticos o con autorizacion especial.</label>
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
      <label class="card-checklist"><input type="checkbox" /> Verifica orden/booking y zona asignada.</label>
      <label class="card-checklist"><input type="checkbox" /> Revisa senalizacion, equipos y EPP obligatorio.</label>
      <label class="card-checklist"><input type="checkbox" /> Inspecciona contenedor y registra condiciones iniciales.</label>
      <label class="card-checklist"><input type="checkbox" /> Coordina con almacen tiempos y personal.</label>
    </ul>
  </div>

  <h2 style="margin-bottom: 0.5em; color: #005fa3;">CONTROL DURANTE EL LLENADO</h2>
  <div class="checklist-tabla">
    <ul style="text-align: justify; padding-left: 1.2em;">
      <label class="card-checklist"><input type="checkbox" /> Verifica guias y documentos vs mercancia cargada.</label>
      <label class="card-checklist"><input type="checkbox" /> Supervisa peso, distribucion y sujecion de la carga.</label>
      <label class="card-checklist"><input type="checkbox" /> Registra danos/incidentes y notifica al supervisor.</label>
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
