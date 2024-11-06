
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

     const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful!'); 
        form.reset(); 
    }
});
