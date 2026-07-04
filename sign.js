document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const usernameInput = document.getElementById('signup-username');
    const passwordInput = document.getElementById('signup-password');
    const emailInput = document.getElementById('signup-email');
    const messageDiv = document.getElementById('signup-message'); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();

    function displayMessage(text, isError = false) {
        if (messageDiv) {
            messageDiv.textContent = text;
            messageDiv.style.color = isError ? 'red' : 'green';
        }
    }

    if (username === '' || password === '' || email === '') {
        displayMessage('Kripya sabhi fields bharein.', true);
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        displayMessage('Account already exits', true);
        return; 
    }

    const newUser = {
        username: username,
        password: password, 
        email: email
    };
    users.push(newUser);

    localStorage.setItem('registeredUsers', JSON.stringify(users));

     usernameInput.value = "";
    passwordInput.value = "";
    emailInput.value = "";
    
    displayMessage('', false);
    
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 1500); 

   
});