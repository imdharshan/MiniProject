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
  
    // Handle registration form submission
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the values from the form fields
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.querySelector('input[name="role"]:checked').value;
  
      // Perform registration logic here (replace with your actual logic)
      // For demonstration purposes, display an alert with the entered registration details
      alert(`Registration submitted with:\nFull Name: ${fullname}\nEmail: ${email}\nPassword: ${password}\nRole: ${role}`);
  
      // Close the form
      closeForm();
    });
  });
  