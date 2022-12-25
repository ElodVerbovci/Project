// Validate the login form
function validateLoginForm() {

  var form = document.getElementById("loginForm");
  

  var emailInput = form.elements["email"];
  var passwordInput = form.elements["password"];

  if (!isValidEmail(emailInput.value)) {

    showErrorMessage("Please enter a valid email address");
    return false;
  }
  
 
  if (passwordInput.value.length < 6) {

    showErrorMessage("Your password must be at least 6 characters long");
    return false;
  }
  
 
  return true;
}


function validateRegistrationForm() {
  
  var form = document.getElementById("registrationForm");
  
  
  var emailInput = form.elements["email"];
  var usernameInput = form.elements["username"];
  var passwordInput = form.elements["password"];
  

  if (!isValidEmail(emailInput.value)) {
   
    showErrorMessage("Please enter a valid email address");
    return false;
  }
  

  if (usernameInput.value.length < 6) {
  
    showErrorMessage("Your username must be at least 6 characters long");
    return false;
  } false;
  }