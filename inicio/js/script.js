// Menú adaptable para celulares
const botonMenu = document.getElementById("menuMovil");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
  const estaAbierto = menu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", estaAbierto);
  botonMenu.setAttribute("aria-label", estaAbierto ? "Cerrar menú" : "Abrir menú");
  botonMenu.textContent = estaAbierto ? "✕" : "☰";
});

// Cerrar el menú después de seleccionar una sección
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
    botonMenu.textContent = "☰";
  });
});

// Aviso sencillo si una imagen externa no carga
document.querySelectorAll("img").forEach((imagen) => {
  imagen.addEventListener("error", () => {
    imagen.style.backgroundColor = "#e8e8e8";
    imagen.alt = imagen.alt + " (imagen no disponible)";
  });
});
