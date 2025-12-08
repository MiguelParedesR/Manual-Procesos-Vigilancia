let video = null;
let canvas = null;
let ctx = null;
let currentStream = null;

function initCameraElements() {
  video = document.getElementById("video");
  canvas = document.getElementById("canvas");
  if (canvas) {
    ctx = canvas.getContext("2d");
  }
}

async function openSelfieModal() {
  if (!video || !canvas) initCameraElements();
  const modal = document.getElementById("selfieModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  await startCamera();
}

function closeSelfieModal() {
  const modal = document.getElementById("selfieModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
  stopCamera();
}

async function startCamera() {
  if (currentStream) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    currentStream = stream;
    if (!video) initCameraElements();
    if (video) {
      video.srcObject = stream;
    }
  } catch (error) {
    console.error("No se pudo acceder a la cámara:", error);
    closeSelfieModal();
  }
}

function stopCamera() {
  if (currentStream) {
    currentStream.getTracks().forEach((t) => t.stop());
    currentStream = null;
  }
  if (video) {
    video.srcObject = null;
  }
}

function capturarFoto() {
  if (!video || !canvas || !ctx || video.readyState < 2) return;
  canvas.width = video.videoWidth || 720;
  canvas.height = video.videoHeight || 1280;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.style.display = "block";

  const preview = document.getElementById("previewPlaceholder");
  if (preview) {
    preview.textContent = "";
    preview.style.background = "#fff";
    preview.style.borderStyle = "solid";
    preview.appendChild(canvas);
  }

  const selfieBtn = document.getElementById("selfieButton");
  if (selfieBtn) {
    selfieBtn.classList.remove("from-brand-blue", "to-slate-900");
    selfieBtn.classList.add("from-green-500", "to-emerald-600");
  }

  closeSelfieModal();
}

// Inicializar referencias si el DOM ya está listo
document.addEventListener("DOMContentLoaded", initCameraElements);
