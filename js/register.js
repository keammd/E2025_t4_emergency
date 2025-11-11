const form = document.querySelector("form");

// const firstNameOutput = document.querySelector("#first_name_output");
// const lastNameOutput = document.querySelector("#last_name_output");
// const emailOutput = document.querySelector("#email_output");
// const passwordOutput = document.querySelector("#password_output");
// const termsOutput = document.querySelector("#terms_output");
const output = document.querySelector("#output");

function cancelPopup(event) {
  console.log("cancelPopup");
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const area = formData.get("area");
  const datetime = formData.get("datetime");
  const street = formData.get("street");
  const exposure = formData.getAll("exposure");
  const hugLevel = formData.get("hugLevel");
  const snowLevel = formData.get("snowLevel");
  const consent = formData.get("consent");
  // 2. Vis værdierne i de rigtige output-felter
  output.innerHTML += `Du har beskrevet at du har et problem i ${area}<br>
den ${datetime}. `;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
