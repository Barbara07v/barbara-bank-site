document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (email === 'barbara@example.com' && password === 'secure2025') {
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid login credentials. Please try again.';
  }
});
