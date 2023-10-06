document.addEventListener("DOMContentLoaded", function() {
// Abmelde Button in html
const logoutButton = document.getElementById("logout-button");
  
// Event-Listener beim klicken
    logoutButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "login-start.html";
    });
  });