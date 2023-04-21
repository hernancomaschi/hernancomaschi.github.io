let selForm, loginTitle, loginForm, loginButton, loginErrorMsg, game1Button;

const init = function () {
  selForm = document.getElementById("select-form");
  loginTitle = document.getElementById("login-header");
  loginForm = document.getElementById("login-form");
  loginButton = document.getElementById("login-form-submit");
  loginErrorMsg = document.getElementById("login-error-msg");
  // game1Button = document.getElementById("game1-submit");
  // game1Button.style.visibility = "hidden";
};

init();

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "test") {
    window.open("list-of-page.html", "_self");
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
