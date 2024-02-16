
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
   const rollnoInput = document.getElementById("rollno");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");
    const sloganInput = document.getElementById("slogan");

    const fullname = fullnameInput.value.trim();
  const rollno = rollnoInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;
    const  slogan = sloganInput.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (rollno === "") {
        showError(rollnoInput, "Enter your rollno");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }
    if (slogan === "") {
        showError(sloganInput, "Write slogan");
    }
  
  const competitionData = {
  1: ["Spelling Bee", "Math Olympiad"],
  2: ["Science Fair", "Art Competition"],
  3: ["Debate Tournament", "Coding Challenge"]
 
};

function populateCompetitions() {
  const gradeSelect = document.getElementById("studentGrade");
  const competitionSelect = document.getElementById("competitionName");
  const selectedGrade = gradeSelect.value;
  competitionSelect.innerHTML = "";
  if (selectedGrade) {
    const competitions = competitionData[selectedGrade];
    competitions.forEach(competition => {
      const option = document.createElement("option");
      option.text = competition;
      option.value = competition;
      competitionSelect.appendChild(option);
    });
  } else {
    const option = document.createElement("option");
    option.text = "-- Please Select a Grade First --";
    competitionSelect.appendChild(option);
  }
}
document.getElementById("studentGrade").addEventListener("change", populateCompetitions);
populateCompetitions();

    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    form.submit();
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

form.addEventListener("submit", handleFormData);