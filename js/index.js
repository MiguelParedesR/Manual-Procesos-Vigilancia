function crackAndRedirect(element, local) {
  element.classList.add("crack-effect");
  setTimeout(() => {
    localStorage.setItem("localSeleccionado", local);
    window.location.href = "identificacion.html";
  }, 600);
}

window.crackAndRedirect = crackAndRedirect;
