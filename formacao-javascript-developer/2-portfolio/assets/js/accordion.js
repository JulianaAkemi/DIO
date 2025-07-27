document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const section = accordion.closest("section");
      const panel = accordion.nextElementSibling;
      const isOpen = accordion.classList.contains("open");

      // Fecha todos os painéis
      document
        .querySelectorAll(".accordion")
        .forEach((acc) => acc.classList.remove("open"));
      document
        .querySelectorAll(".panel")
        .forEach((pan) => pan.classList.remove("open"));
      document
        .querySelectorAll(".more-information section")
        .forEach((sec) => sec.classList.remove("open"));

      // Se não estava aberto, abre
      if (!isOpen) {
        accordion.classList.add("open");
        panel.classList.add("open");
        section.classList.add("open");
      }
    });
  });
});
