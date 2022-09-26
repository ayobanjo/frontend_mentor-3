const btn = document.querySelector("button");

function Validate() {
  const emailField = document.getElementById("email");
  let valid = true;

  if (!emailField.value) {
    const errorMessage = document.getElementById("email_error");
    errorMessage.classList.add("visible");
    emailField.classList.add("invalid");
    errorMessage.setAttribute("aria-hidden", false);
    errorMessage.setAttribute("aria-invalid", true);
  }
  return valid;
}

btn.addEventListener("click", Validate);
