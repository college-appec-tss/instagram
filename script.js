
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    // Demo credentials
    if (username && password) {
     wwindow.alert("password");
      setTimeout(function() {
        window.location.href = "home.html";
      }, 1000);

    } else {
      message.textContent = "Incorrect username or password.";
      message.style.color = "red";
    }
  });
}


// LIKE POST FUNCTION
function likePost(button) {
  if (button.textContent.includes("♡")) {
    button.textContent = "♥ Liked";
    button.style.color = "red";
  } else {
    button.textContent = "♡ Like";
    button.style.color = "";
  }
}


// LOGOUT FUNCTION
function logout() {
  window.location.href = "index.html";
}
