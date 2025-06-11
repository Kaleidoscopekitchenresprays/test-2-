document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = this;
  const data = {
    name: f.name.value, email: f.email.value,
    phone: f.phone.value, message: f.message.value
  };
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method:'POST', headers:{'Accept':'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.ok ? show('Thanks, we’ll be in touch!','success') : show('Oops – try again','error'))
  .catch(() => show('Network error','error'));
});
function show(msg, cls){
  const p = document.getElementById('formResponse');
  p.textContent = msg;
  p.className = cls;
}
