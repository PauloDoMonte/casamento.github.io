const allowedCode = 'HT854S';
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const blockedSection = document.getElementById('blocked');
const confirmSection = document.getElementById('confirm');
const confirmButton = document.getElementById('confirm-button');
const declineButton = document.getElementById('decline-button');
const successMessage = document.getElementById('success-message');
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');

function showSection(section) {
  blockedSection.classList.add('hidden');
  confirmSection.classList.add('hidden');
  section.classList.remove('hidden');
}

function showMessage(text) {
  successMessage.textContent = text;
  successMessage.classList.remove('hidden');
}

if (code && code.toUpperCase() === allowedCode) {
  showSection(confirmSection);
} else {
  showSection(blockedSection);
}

async function handleResponse(accept) {
  const nome = nomeInput.value.trim();
  const sobrenome = sobrenomeInput.value.trim();

  if (!nome || !sobrenome) {
    showMessage('Por favor, informe nome e sobrenome antes de enviar sua resposta.');
    return;
  }

  if (typeof saveGuestResponse !== 'function') {
    showMessage('Erro de configuração: o Supabase não está inicializado.');
    return;
  }

  confirmButton.disabled = true;
  declineButton.disabled = true;
  successMessage.classList.add('hidden');

  try {
    await saveGuestResponse({
      first_name: nome,
      last_name: sobrenome,
      accept,
    });

    const message = accept
      ? `Obrigado, ${nome} ${sobrenome}! Sua presença foi confirmada. 🥂`
      : `Obrigado pelo retorno, ${nome} ${sobrenome}. Lamentamos sua ausência.`;

    showMessage(message);
  } catch (error) {
    showMessage(`Erro ao salvar resposta: ${error.message || error}`);
  } finally {
    confirmButton.disabled = false;
    declineButton.disabled = false;
  }
}

confirmButton.addEventListener('click', function () {
  handleResponse(true);
});

declineButton.addEventListener('click', function () {
  handleResponse(false);
});
