document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };
  // For production use, integrate with a form endpoint (EmailJS, Formspree, Netlify, etc.)
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.ok ? showMessage('Thanks! We’ll be in touch.', false) : showMessage('Oops, please try again.', true))
  .catch(() => showMessage('Network error, please try later.', true));
});

function showMessage(msg, isError) {
  const el = document.getElementById('formResponse');
  el.textContent = msg;
  el.className = isError ? 'error' : 'success';
  el.classList.remove('hidden');
}