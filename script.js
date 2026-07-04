document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const messageDiv = document.getElementById('login-message'); 

    function displayMessage(text, isError = false) {
        if (messageDiv) {
            messageDiv.textContent = text;
            messageDiv.style.color = isError ? 'red' : 'green';
        }
    }

    if (username === '' || password === '') {
        displayMessage('', true);
        alert("please! login")
        return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    if (users.length === 0) {
        displayMessage('', true);
        return;
    }

    const foundUser = users.find(user => 
        user.username === username && user.password === password,
    );

    if (foundUser) {
        // Successful login: Session/Status store karein
        sessionStorage.setItem('isLoggedIn', 'true'); 
        sessionStorage.setItem('currentUsername', foundUser.username); 
        
        displayMessage('', false);

        setTimeout(() => {
            // Redirect to protected page
            window.location.href = 'home.html'; 
        }, 1500);

    } else {
        displayMessage('', true);
    }

    username.value = "";
    password.value = "";
});