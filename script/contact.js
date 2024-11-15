const bouton = document.querySelector("#nightmode");
const choix = localStorage.getItem("choix");
var element = document.body;

// Vérifier la préférence au chargement de la page
if (choix === "1") {
  element.classList.add("dark-mode"); // Appliquer le mode sombre si le choix est 1
}

function myFunction() {
  element.classList.toggle("dark-mode");
  
  // Enregistrer la préférence
  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("choix", "1"); // Sombre
  } else {
    localStorage.setItem("choix", "0"); // Clair
  }
}

// Ajouter l'événement au bouton
bouton.addEventListener("click", myFunction);

const nav = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scroll");
    console.log("scroll");
    
  } else {
    nav.classList.remove("scroll");
    console.log("pas scroll")
  }
});


// ---------

const fleche = document.querySelector(".arrow")

function scrollenbas(){
  window.scrollTo(0, document.body.scrollHeight);
}

fleche.addEventListener("click", scrollenbas);

//---------------------------
