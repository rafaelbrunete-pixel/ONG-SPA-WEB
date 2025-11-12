// js/validation.js
// Validação de formulários com mensagens de erro

function attachFormValidation() {
  const form = document.getElementById("cadastroForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Nome
    const nome = document.getElementById("nome");
    const errorNome = document.getElementById("error-nome");
    if (nome.value.trim().length < 3) {
      errorNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
      valid = false;
    } else {
      errorNome.textContent = "";
    }

    // Email
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("error-email");
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email.value)) {
      errorEmail.textContent = "Digite um e-mail válido.";
      valid = false;
    } else {
      errorEmail.textContent = "";
    }

    // Telefone
    const telefone = document.getElementById("telefone");
    const errorTelefone = document.getElementById("error-telefone");
    const telRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!telRegex.test(telefone.value)) {
      errorTelefone.textContent = "Digite um telefone válido (ex: (11) 91234-5678).";
      valid = false;
    } else {
      errorTelefone.textContent = "";
    }

    // CPF
    const cpf = document.getElementById("cpf");
    const errorCpf = document.getElementById("error-cpf");
    const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
      errorCpf.textContent = "Digite um CPF válido (ex: 123.456.789-00).";
      valid = false;
    } else {
      errorCpf.textContent = "";
    }

    // Se tudo estiver válido
    if (valid) {
      alert("Cadastro realizado com sucesso!");
      form.reset();
    }
  });
}
