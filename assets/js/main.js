// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// scrop to top
const toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// typed
const crossId = document.getElementById("cross");
const openId = document.getElementById("open");
const mMenu = document.getElementById("mmenu");
openId.addEventListener("click", () => {
  crossId.style.display = "block";
  openId.style.display = "none";
  mMenu.style.display = "block";
  mMenu.style.right = "0px";
});
crossId.addEventListener("click", () => {
  crossId.style.display = "none";
  mMenu.style.display = "none";
  openId.style.display = "block";
  mMenu.style.right = "-200px";

});
var effect = new Typed(".typed", {
  strings: ["Nicolas", " a Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
});

$(document).keydown(function(e){ 
  if(e.which === 123){ 

     return false; 

  } 
}); 