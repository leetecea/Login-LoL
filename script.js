let btn = document.querySelector("button");
let user = document.querySelector("#user");
let pwd = document.querySelector("#pwd");

function habilitarBotao() {
  if (user.value && pwd.value.length >= 8) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#FF002E";
  } else {
    btn.setAttribute("disabled", "disabled");
    btn.style.backgroundColor = "rgba(255, 0, 46, 0.21)";
  }
}

user.addEventListener("input", habilitarBotao);
pwd.addEventListener("input", habilitarBotao);
