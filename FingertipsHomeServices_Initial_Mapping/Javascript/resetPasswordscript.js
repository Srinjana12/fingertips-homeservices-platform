const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.querySelector('button[type="submit"]');

function validatePassword() {
  const password = passwordInput.value.trim();
  const passwordError = document.getElementById("passwordError");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password === "") {
    passwordError.innerHTML = "Password is required";
    return false;
  } else if (password.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters long";
    return false;
  } else if (!passwordRegex.test(password)) {
    passwordError.innerHTML =
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    return false;
  } else {
    passwordError.innerHTML = "";
    return true;
  }
}

function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value.trim();
  const password = passwordInput.value.trim();
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").innerHTML = "";
    return false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match";
    return false;
  } else {
    document.getElementById("confirmPasswordError").innerHTML = "";
    return true;
  }
}

function validateForm() {
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  if (isPasswordValid && isConfirmPasswordValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

submitButton.disabled = true;

passwordInput.addEventListener("input", function () {
  validatePassword();
  validateConfirmPassword();
  validateForm();
});

confirmPasswordInput.addEventListener("input", function () {
  validateConfirmPassword();
  validateForm();
});

document
  .getElementById("resetPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
