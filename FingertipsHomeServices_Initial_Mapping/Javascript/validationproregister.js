const emailInput = document.getElementById("emailPro");
const cityInput = document.getElementById("cityPro");
const stateInput = document.getElementById("statePro");
const zipInput = document.getElementById("zipPro");
const addressLine1Input = document.getElementById("address1Pro");
const addressLine2Input = document.getElementById("address2Pro");
const addressLine1Error = document.getElementById("address1Error");
const addressLine2Error = document.getElementById("address2Error");
const dobInput = document.getElementById("dobPro");
const dobError = document.getElementById("dobError");
let isDateValid = false;
const emailError = document.getElementById("emailError");
const cityError = document.getElementById("cityError");
const stateError = document.getElementById("stateError");
const zipError = document.getElementById("zipcodeError");
const phoneInput = document.getElementById("phonePro");
const professionSelect = document.getElementById("profession");
const professionError = document.getElementById("professionError");
let isProfessionValid = false;
const phoneError = document.getElementById("phoneError");
const passwordInput = document.getElementById("passwordPro");
const passwordError = document.getElementById("passwordError");
const submitButton = document.getElementById("submitButton");
const firstNameInput = document.getElementById("firstNamePro");
const lastNameInput = document.getElementById("lastNamePro");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
let isFirstNameValid = false;
let isLastNameValid = false;
const firstNameRegex = /^[^\d\s]+$/;
const lastNameRegex = /^[^\d\s]+$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.(com|edu)$/;
const phoneRegex = /^(\d{3}-?\d{3}-?\d{4}|\d{10})$/;
const zipcodeRegex = /^\d{5}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\"|,.<>\/?]).{8,}$/;
const cityRegex = /^[^0-9]*$/;
const stateRegex = /^[^0-9]*$/;
let isCityValid = false;
let isEmailValid = false;
let isStateValid = false;
let isZipValid = false;
let isAddressLine1Valid = false;
let isAddressLine2Valid = false;
let isPhoneValid = false;
let isPasswordValid = false;
stateInput.addEventListener("input", function () {
  const state = stateInput.value.trim();

  if (state === "") {
    stateError.textContent = "State is required";
    stateError.style.display = "block";
    isStateValid = false;
    stateInput.classList.add("is-invalid");
  } else if (!stateRegex.test(state)) {
    stateError.textContent = "Invalid State format";
    stateError.style.display = "block";
    isStateValid = false;
    stateInput.classList.add("is-invalid");
  } else {
    stateError.textContent = "";
    stateError.style.display = "none";
    isStateValid = true;
    stateInput.classList.remove("is-invalid");
  }
  checkValidity();
});

zipInput.addEventListener("input", function () {
  const zip = zipInput.value.trim();

  if (zip === "") {
    zipError.textContent = "Zip code is required";
    zipError.style.display = "block";
    isZipValid = false;
    zipInput.classList.add("is-invalid");
  } else if (!zipcodeRegex.test(zip)) {
    zipError.textContent = "Invalid Zip code format";
    zipError.style.display = "block";
    isZipValid = false;
    zipInput.classList.add("is-invalid");
  } else {
    zipError.textContent = "";
    zipError.style.display = "none";
    isZipValid = true;
    zipInput.classList.remove("is-invalid");
  }
  checkValidity();
});
emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    isEmailValid = false;
    emailInput.classList.add("is-invalid");
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";
    emailError.style.display = "block";
    isEmailValid = false;
    emailInput.classList.add("is-invalid");
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
    isEmailValid = true;
    emailInput.classList.remove("is-invalid");
  }
  checkValidity();
});
cityInput.addEventListener("change", function () {
  const city = cityInput.value.trim();

  if (city === "") {
    cityError.textContent = "City is required";
    cityError.style.display = "block";
    isCityValid = false;
    cityInput.classList.add("is-invalid");
  } else if (!cityRegex.test(city)) {
    cityError.textContent = "Invalid City format";
    cityError.style.display = "block";
    isCityValid = false;
    cityInput.classList.add("is-invalid");
  } else {
    cityError.textContent = "";
    cityError.style.display = "none";
    isCityValid = true;
    cityInput.classList.remove("is-invalid");
  }
  checkValidity();
});
addressLine1Input.addEventListener("input", function () {
  const addressLine1 = addressLine1Input.value.trim();

  if (addressLine1 === "") {
    addressLine1Error.textContent = "Address Line 1 is required";
    addressLine1Error.style.display = "block";
    isAddressLine1Valid = false;
    addressLine1Input.classList.add("is-invalid");
  } else {
    addressLine1Error.textContent = "";
    addressLine1Error.style.display = "none";
    isAddressLine1Valid = true;
    addressLine1Input.classList.remove("is-invalid");
  }
  checkValidity();
});

addressLine2Input.addEventListener("input", function () {
  const addressLine2 = addressLine2Input.value.trim();

  if (addressLine2 === "") {
    addressLine2Error.textContent = "Address Line 2 is required";
    addressLine2Error.style.display = "block";
    isAddressLine2Valid = false;
    addressLine2Input.classList.add("is-invalid");
  } else {
    addressLine2Error.textContent = "";
    addressLine2Error.style.display = "none";
    isAddressLine2Valid = true;
    addressLine2Input.classList.remove("is-invalid");
  }
  checkValidity();
});
phoneInput.addEventListener("input", function () {
  console.log("phone");
  const phone = phoneInput.value.trim();
  console.log(phone);
  if (phone === "") {
    phoneError.textContent = "Phone number is required";
    phoneError.style.display = "block";
    isPhoneValid = false;
    phoneInput.classList.add("is-invalid");
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Invalid phone number format";
    phoneError.style.display = "block";
    isPhoneValid = false;
    phoneInput.classList.add("is-invalid");
  } else {
    phoneError.textContent = "";
    phoneError.style.display = "none";
    isPhoneValid = true;
    phoneInput.classList.remove("is-invalid");
  }
  checkValidity();
});
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value.trim();
  let errorMessage = "";

  if (password === "") {
    errorMessage = "Password is required";
  } else if (password.length < 8) {
    errorMessage = "Password should be at least 8 characters";
  } else if (!/(?=.*[a-z])/.test(password)) {
    errorMessage = "Password should have a small letter";
  } else if (!/(?=.*[A-Z])/.test(password)) {
    errorMessage = "Password should have a capital letter";
  } else if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>\/?])/.test(password)) {
    errorMessage = "Password should have a special character";
  }

  if (errorMessage !== "") {
    passwordError.textContent = errorMessage;
    passwordError.style.display = "block";
    isPasswordValid = false;
    passwordInput.classList.add("is-invalid");
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
    isPasswordValid = true;
    passwordInput.classList.remove("is-invalid");
  }

  checkValidity();
});
dobInput.addEventListener("input", function () {
  const dob = dobInput.value.trim();

  if (dob === "") {
    dobError.textContent = "Date of Birth is required";
    dobError.style.display = "block";
    isDateValid = false;
    dobInput.classList.add("is-invalid");
  } else {
    dobError.textContent = "";
    dobError.style.display = "none";
    isDateValid = true;
    dobInput.classList.remove("is-invalid");
  }

  checkValidity();
});
firstNameInput.addEventListener("input", function () {
  const firstName = firstNameInput.value.trim();

  if (firstName === "") {
    firstNameError.textContent = "First Name is required";
    firstNameError.style.display = "block";
    isFirstNameValid = false;
    firstNameInput.classList.add("is-invalid");
  } else if (!firstNameRegex.test(firstName)) {
    firstNameError.textContent = "First Name should not contain numbers";
    firstNameError.style.display = "block";
    isFirstNameValid = false;
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameError.textContent = "";
    firstNameError.style.display = "none";
    isFirstNameValid = true;
    firstNameInput.classList.remove("is-invalid");
  }

  checkValidity();
});

lastNameInput.addEventListener("input", function () {
  const lastName = lastNameInput.value.trim();
  console.log(lastName);
  if (lastName === "") {
    lastNameError.textContent = "Last Name is required";
    lastNameError.style.display = "block";
    isLastNameValid = false;
    lastNameInput.classList.add("is-invalid");
  } else if (!lastNameRegex.test(lastName)) {
    console.log("lastname");
    lastNameError.textContent = "Last Name should not contain numbers";
    lastNameError.style.display = "block";
    isLastNameValid = false;
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameError.textContent = "";
    lastNameError.style.display = "none";
    isLastNameValid = true;
    lastNameInput.classList.remove("is-invalid");
  }

  checkValidity();
});
professionSelect.addEventListener("input", function () {
  const selectedIndex = professionSelect.selectedIndex;

  if (selectedIndex === 0) {
    professionError.textContent = "Profession is required";
    professionError.style.display = "block";
    isProfessionValid = false;
    professionSelect.classList.add("is-invalid");
  } else {
    professionError.textContent = "";
    professionError.style.display = "none";
    isProfessionValid = true;
    professionSelect.classList.remove("is-invalid");
  }

  checkValidity();
});

function checkValidity() {
  console.log(
    "error: " +
      (isEmailValid ? "" : "Email is not valid") +
      (isCityValid ? "" : ", City is not valid") +
      (isZipValid ? "" : ", Zip code is not valid") +
      (isStateValid ? "" : ", State is not valid") +
      (isPhoneValid ? "" : ", Phone number is not valid") +
      (isAddressLine1Valid ? "" : ", Address Line 1 is not valid") +
      (isAddressLine2Valid ? "" : ", Address Line 2 is not valid") +
      (isPasswordValid ? "" : ", Password is not valid") +
      (isDateValid ? "" : ", Date of Birth is not valid") +
      (isFirstNameValid ? "" : ", First Name is not valid") +
      (isLastNameValid ? "" : ", Last Name is not valid")
  );

  if (
    isEmailValid &&
    isPhoneValid &&
    isAddressLine1Valid &&
    isAddressLine2Valid &&
    isPasswordValid &&
    isDateValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isProfessionValid
  ) {
    console.log("passed");
    submitButton.disabled = false;
  } else {
    console.log("failed");
    submitButton.disabled = true;
  }
}
