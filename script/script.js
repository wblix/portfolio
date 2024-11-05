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





//---------------

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //--------------------------------
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

//------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector(".about");
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.5 
  });

  observer.observe(box);
});
