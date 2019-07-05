// menu toggle

let menuBtns = document.querySelectorAll(".menu-btn");
let menuDark = document.querySelector(".menu-dark");
let menu = document.querySelector(".menu");

menuBtns.forEach(function(btn) {
  btn.addEventListener("click", toggleMenu);
});
menuDark.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("menu-open");
}

// menu subscriptions toggle
let subsBtn = document.querySelector(".subs-more-btn");
let subsMore = document.querySelector(".menu-subscriptions-more");
let subsOpen = false;

subsBtn.addEventListener("click", function() {
  if (!subsOpen) {
    subsOpen = true;

    subsBtn.querySelector("i").classList.add("fa-chevron-up");
    subsBtn.querySelector("i").classList.remove("fa-chevron-down");

    subsBtn.querySelector(".label").innerHTML = "Show less";

    subsMore.classList.add("menu-subscriptions-more-visible");
  } else {
    subsOpen = false;

    subsBtn.querySelector("i").classList.remove("fa-chevron-up");
    subsBtn.querySelector("i").classList.add("fa-chevron-down");

    subsBtn.querySelector(".label").innerHTML = "Show 10 more";

    subsMore.classList.remove("menu-subscriptions-more-visible");
  }
});
