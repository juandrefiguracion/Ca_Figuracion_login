function validateForm() {
  // Get the input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username field is blank
  if (username == "") {
    document.getElementById("usernameError").innerHTML = "Please enter your username.";
    console.log("Login error.");
    return false;
  } else {
    document.getElementById("usernameError").innerHTML = "username";
  }

  // Check if the password field is blank
  if (password == "") {
    document.getElementById("passwordError").innerHTML = "Please enter your password.";
    console.log("Login error.");
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "password";
  }

  // Check if both fields are blank
  if (username == "" && password == "") {
    document.getElementById("usernameError").innerHTML = "Please enter your username and password.";
    document.getElementById("passwordError").innerHTML = "";
    console.log("Login error.");
    return false;
  } else {
    document.getElementById("usernameError").innerHTML = "username";
    document.getElementById("passwordError").innerHTML = "password";
  }
}