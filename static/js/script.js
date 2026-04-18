const allowedCode = 'HT854S';
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const blockedSection = document.getElementById('blocked');
const confirmSection = document.getElementById('confirm');
const form = document.getElementById('rsvp-form');
const successMessage = document.getElementById('success-message');

function showSection(section) {
  blockedSection.classList.add('hidden');
  confirmSection.classList.add('hidden');
  section.classList.remove('hidden');
}

if (code && code.toUpperCase() === allowedCode) {
  showSection(confirmSection);
} else {
  showSection(blockedSection);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  successMessage.classList.remove('hidden');
  form.reset();
});
