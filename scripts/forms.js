// Register link to Login link
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
// Login to Register Sections
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

// Triggers from login form to register form, hide and show
registerLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

// Triggers register form to login, hide and show
loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});