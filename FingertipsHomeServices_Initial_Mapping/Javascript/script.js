const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitButton = document.getElementById("submitButton");

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.(com|edu)$/;

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email, please enter a valid email ";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

function validateForm() {
  const isEmailValid = validateEmail();
  submitButton.disabled = !isEmailValid;
}

submitButton.disabled = true;

emailInput.addEventListener("input", validateForm);

document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
