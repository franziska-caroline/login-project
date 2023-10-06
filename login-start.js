document.addEventListener("DOMContentLoaded", function() {

  // Formular und Anmelden-Button in html
  const loginForm = document.getElementById("login-form");
  const submitButton = loginForm.querySelector(".login-form-submit");

  // Event-Listener beim klick
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Eingabefelder Benutzernamen Passwort
    const usernameField = loginForm.querySelector(".username-field");
    const passwordField = loginForm.querySelector(".password-field");

    // Was wurde eingetragen in die Felder?
    const username = usernameField.value;
    const password = passwordField.value;

    // Sind die einegetragenen Werte richtig?
    if (username === "albert@gmail.com" && password === "123") {
      window.location.href = "login-welcome.html";
    } else {
      const errorMessageContainer = document.querySelector(".login-error-message");
      errorMessageContainer.style.display = "block";
    }
  });
});
