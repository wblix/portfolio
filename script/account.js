const buton = document.querySelector("#nightmode");
const choix = localStorage.getItem("choix");
var element = document.body;

if (choix === "1") {
  element.classList.add("dark-mode"); 
}

function myFunction() {
  element.classList.toggle("dark-mode");
  
  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("choix", "1"); 
  } else {
    localStorage.setItem("choix", "0"); 
  }
}

buton.addEventListener("click", myFunction);



const bouton = document.querySelector("#signUp");
const sign = document.querySelector(".sign");

const boutonLogin = document.querySelector("#loginBut");
const login = document.querySelector(".login");

function toggleSignUp() {
  sign.classList.toggle("account");
  if (login.classList.contains("account")) {
    login.classList.remove("account");
  }

  login.style.visibility = "hidden";
  login.style.pointerEvents = "none";

  sign.style.visibility = "visible";
  sign.style.pointerEvents = "auto";
}

function toggleLogin() {
  login.classList.toggle("account");
  if (sign.classList.contains("account")) {
    sign.classList.remove("account");
  }

  sign.style.visibility = "hidden";
  sign.style.pointerEvents = "none";

  login.style.visibility = "visible";
  login.style.pointerEvents = "auto";
}

bouton.addEventListener("click", toggleSignUp);
boutonLogin.addEventListener("click", toggleLogin);
