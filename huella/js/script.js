document.addEventListener("DOMContentLoaded", () => {
  // Pequeña interacción para los enlaces del menú: resalta el botón seleccionado.
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbtn[data-page]").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.setAttribute("aria-current", "page");
      link.style.background = "var(--purple)";
      link.style.color = "#170f24";
    }
  });
  // Los enlaces de imagen se abren en otra pestaña y llevan a información relacionada.
  document.querySelectorAll(".photo-link").forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
