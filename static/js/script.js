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

confirmButton.addEventListener('click', function () {
  const nome = nomeInput.value.trim();
  const sobrenome = sobrenomeInput.value.trim();
  if (!nome || !sobrenome) {
    showMessage('Por favor, informe nome e sobrenome antes de confirmar.');
    return;
  }
  showMessage(`Obrigado, ${nome} ${sobrenome}! Sua presença foi confirmada. 🥂`);
});

declineButton.addEventListener('click', function () {
  const nome = nomeInput.value.trim();
  const sobrenome = sobrenomeInput.value.trim();
  if (!nome || !sobrenome) {
    showMessage('Por favor, informe nome e sobrenome antes de enviar a não confirmação.');
    return;
  }
  showMessage(`Obrigado pelo retorno, ${nome} ${sobrenome}. Lamentamos sua ausência.`);
});
