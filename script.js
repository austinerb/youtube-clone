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

// ad close
let ad = document.querySelector(".ad");
let adClose = document.querySelector(".ad-close");

adClose.addEventListener("click", function() {
  ad.style.display = "none";
});

// video row controls
let videoShowLeft = document.querySelector(".video-show-left");
let videoShowRight = document.querySelector(".video-show-right");
let videoRow1 = document.querySelector(".video-row-1");
let videoRow2 = document.querySelector(".video-row-2");

videoShowLeft.addEventListener("click", function() {
  videoShowLeft.classList.remove("show");
  videoShowRight.classList.add("show");
  videoRow1.classList.add("show");
  videoRow2.classList.remove("show");
});

videoShowRight.addEventListener("click", function() {
  videoShowLeft.classList.add("show");
  videoShowRight.classList.remove("show");
  videoRow1.classList.remove("show");
  videoRow2.classList.add("show");
});

// close YouTubeTV
youtubetvSection = document.querySelector(".youtubetv");
closeYoutubeTV = document.querySelector(".close-youtubetv");

closeYoutubeTV.addEventListener("click", function(){
  youtubetvSection.style.display = "none";
});
