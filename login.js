document.addEventListener('DOMContentLoaded', function() {
    // Function to show the login form
    function showLoginForm() {
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('register-form').style.display = 'none';
    }
  
    // Function to show the register form
    function showRegisterForm() {
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('register-form').style.display = 'block';
      document.getElementById('login-form').style.display = 'none';
    }
  
    // Function to close the forms
    function closeForm() {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('register-form').style.display = 'none';
    }
  
    // Attach click event listeners to login and register buttons
    document.getElementById('login-button').addEventListener('click', showLoginForm);
    document.getElementById('register-button').addEventListener('click', showRegisterForm);
  
    // Attach click event listener to close button in the forms
    document.querySelector('.close-btn').addEventListener('click', closeForm);
  
    // Handle login form submission
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the values from the form fields
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform authentication logic here (replace with your actual logic)
      // For demonstration purposes, display an alert with the entered credentials
      alert(`Login submitted with:\nUsername: ${username}\nPassword: ${password}`);
  
      // Close the form
      closeForm();
    });
  
    // Handle registration form submission
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the values from the form fields
      // Perform registration logic here (replace with your actual logic)
  
      // For demonstration purposes, display an alert with the entered registration details
      alert('Registration submitted (not implemented in this example)');
  
      // Close the form
      closeForm();
    });
  });
  