document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbtn[data-page]").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.setAttribute("aria-current", "page");
      link.style.background = "var(--violet)";
      link.style.color = "#080813";
    }
  });
  // Los botones de navegación son enlaces reales y todas las imágenes son clicables.
  document.querySelectorAll(".photo-link").forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
