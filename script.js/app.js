document.getElementById("FormularioTareas").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const NOMBRE = document.getElementById("CampoNombre").value.trim();
    const FECHA = document.getElementById("CampoFecha").value;
    const DESCRIPCION = document.getElementById("CampoDescripcion").value.trim();
    const TIPO = document.getElementById("CampoTipo").value;
    const PRIORIDAD = document.querySelector('input[name="PrioridadElegida"]:checked')?.value;
  
    if (!NOMBRE || !FECHA || !DESCRIPCION || !TIPO || !PRIORIDAD) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
  
    let NuevaTarea = document.createElement("div");
    NuevaTarea.className = "BloqueTarea";
    NuevaTarea.textContent = `Tarea: ${NOMBRE} | Fecha: ${FECHA} | Tipo: ${TIPO} | Prioridad: ${PRIORIDAD} | Descripción: ${DESCRIPCION}`;
  
    document.getElementById("CajaTareas").appendChild(NuevaTarea);
  
    this.reset();
  });
  