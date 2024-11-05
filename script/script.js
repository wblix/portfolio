const bouton = document.querySelector("#nightmode")

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

bouton.addEventListener("click", myFunction)





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
