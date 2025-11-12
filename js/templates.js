// js/templates.js
// Templates dinâmicos da SPA

const Templates = {
  home: `
    <section class="hero">
      <h1>Bem-vindo à ONG Comunidade Solidária</h1>
      <p>Transformando vidas através de projetos sociais.</p>
      <div class="card">
        <h2>Nossa Missão</h2>
        <p>Promover inclusão social e oportunidades para todos.</p>
      </div>
    </section>
  `,

  projetos: `
    <section>
      <h1>Projetos Sociais</h1>
      <div class="card">
        <h2>Alfabetização de Adultos</h2>
        <p>Oferecemos aulas gratuitas para adultos que não tiveram acesso à educação.</p>
      </div>
      <div class="card">
        <h2>Saúde Preventiva</h2>
        <p>Campanhas de conscientização e exames gratuitos para a comunidade.</p>
      </div>
      <div class="card">
        <h2>Geração de Renda</h2>
        <p>Oficinas e treinamentos para capacitar pessoas em situação de vulnerabilidade.</p>
      </div>
    </section>
  `,

  cadastro: `
    <section>
      <h1>Cadastro de Voluntários</h1>
      <form id="cadastroForm">
        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required>
        <div class="error" id="error-nome"></div>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        <div class="error" id="error-email"></div>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required>
        <div class="error" id="error-telefone"></div>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required>
        <div class="error" id="error-cpf"></div>

        <button type="submit" class="btn">Enviar</button>
      </form>
    </section>
  `
};
