let selForm, loginTitle, loginForm, loginButton, loginErrorMsg;

const init = function () {
  selForm = document.getElementById("select-form");
  loginTitle = document.getElementById("login-header");
  loginForm = document.getElementById("login-form");
  loginButton = document.getElementById("login-form-submit");
  loginErrorMsg = document.getElementById("login-error-msg");
};

init();

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username.toLowerCase() === "user" && password.toLowerCase() === "test") {
    window.open("list-of-page.html", "_self");
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
