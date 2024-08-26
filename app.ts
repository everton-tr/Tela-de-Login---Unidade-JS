const form = document.getElementById('loginForm') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;
const passwordError = document.getElementById('passwordError') as HTMLSpanElement;

form.addEventListener('submit', (event) => {
    let valid = true;

    // Validação de e-mail
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validação de senha (mínimo 6 caracteres)
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}