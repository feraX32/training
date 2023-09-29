const users = [{ username: "Jonas", password: "Admin123" }];

document.getElementById("button63").addEventListener("click", function () {
  const usernameInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;
  const user = users.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  if (user) {
    window.location.href = "/website/backend/second.html";
  } else {
    document.getElementById("loginStatus").textContent =
      "Anmeldung fehlgeschlagen. Überprüfen Sie Ihre Daten.";
  }
});
