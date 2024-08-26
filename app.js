var form = document.getElementById('loginForm');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
form.addEventListener('submit', function (event) {
    var valid = true;
    // Validação de e-mail
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        valid = false;
    }
    else {
        emailError.style.display = 'none';
    }
    // Validação de senha (mínimo 6 caracteres)
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        passwordError.style.display = 'block';
        valid = false;
    }
    else {
        passwordError.style.display = 'none';
    }
    if (!valid) {
        event.preventDefault();
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
