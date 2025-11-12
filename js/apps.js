// js/app.js
// Controla a navegação SPA e renderiza os templates

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Função para carregar o conteúdo
  function navigate(hash) {
    switch (hash) {
      case "#home":
        app.innerHTML = Templates.home;
        break;
      case "#projetos":
        app.innerHTML = Templates.projetos;
        break;
      case "#cadastro":
        app.innerHTML = Templates.cadastro;
        attachFormValidation(); // ativa validação ao carregar o formulário
        break;
      default:
        app.innerHTML = Templates.home;
    }
  }

  // Captura cliques nos links
  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const hash = link.getAttribute("href");
      window.location.hash = hash;
      navigate(hash);
    });
  });

  // Carrega conteúdo inicial
  navigate(window.location.hash || "#home");
});
