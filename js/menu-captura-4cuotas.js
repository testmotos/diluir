// --- MENÚ HAMBURGUESA ---
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) { 
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  }
});

// --- BOTONES Y CAPTURA ---
const capturaBtn = document.getElementById("captura-btn");
const btnPrimaMin = document.getElementById("myBtnPriminima"); 
const btnNuevaCot = document.querySelector(".btnNvaCot");
const inputPrimaMin = document.getElementById("numero2");

// Inicialmente deshabilitamos la opción de captura
capturaBtn.style.pointerEvents = "none";   
capturaBtn.style.opacity = "0.5";          

function habilitarCaptura() {
  capturaBtn.style.pointerEvents = "auto";
  capturaBtn.style.opacity = "1";
}

// Habilitar captura al hacer clic en el botón o presionar Enter
btnPrimaMin.addEventListener("click", habilitarCaptura);

inputPrimaMin.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    habilitarCaptura();
    btnPrimaMin.click();
  }
});

// Deshabilitar captura al crear nueva cotización
btnNuevaCot.addEventListener("click", () => {
  capturaBtn.style.pointerEvents = "none";
  capturaBtn.style.opacity = "0.5";
});

// --- CAPTURA DE PANTALLA ---
capturaBtn.addEventListener("click", () => {
  const divsParaCaptura = [
    document.getElementById("lblcalprima1"),
    document.querySelector(".titulo-pago"),
    document.querySelector(".tabla-container1")
  ];

  const tempDiv = document.createElement("div");
  tempDiv.style.position = "fixed";
  tempDiv.style.top = "0";
  tempDiv.style.left = "0";
  tempDiv.style.background = "#fff";
  tempDiv.style.padding = "15px";
  tempDiv.style.width = "360px";  // ancho de escritorio
  tempDiv.style.borderRadius = "15px";
  tempDiv.style.display = "block";
  tempDiv.style.transformOrigin = "top left";
  tempDiv.style.zIndex = "9999";

  divsParaCaptura.forEach(d => {
    const clone = d.cloneNode(true);
    clone.style.display = "block";
    tempDiv.appendChild(clone);
  });

  document.body.appendChild(tempDiv);

  html2canvas(tempDiv, { scale: 2 }).then(canvas => {
    const link = document.createElement("a");
    link.download = "cotizacion.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    document.body.removeChild(tempDiv);
  });

  // En móvil, cerrar sidebar al capturar
  if(window.innerWidth <= 480) {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("open");
  }
});