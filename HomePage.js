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
  });
  