// const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const error = document.getElementsByClassName(".error_msg");
function Validate() {
  //   const elem = input.getAttribute("required");

  const errorMsg = document.createElement("span");
  errorMsg.textContent = "Please provide valid email";
  form.appendChild(errorMsg);
}

btn.addEventListener("click", Validate);
