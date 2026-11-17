
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

      window.alert("you enetred" +password);




        
      }
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
