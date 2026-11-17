
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    if (username === "demo" &&
        password === "photoshare") {
      window.location.href = "home.html";
    } else {
      document.getElementById("message").textContent =
        "Incorrect demo credentials.";
    }

    loginForm.reset();
  });
}

function likePost(button) {
  if (button.textContent.includes("♡")) {
    button.textContent = "♥ Liked";
    button.style.color = "red";
  } else {
    button.textContent = "♡ Like";
    button.style.color = "";
  }
}

function logout() {
  // This is a static demonstration, not real authentication.
}
