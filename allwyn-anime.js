var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
  var wordWrap = tricksWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="tricksword">$2</span>'
  );
}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
  var letterWrap = tricksLetter.item(i);
  letterWrap.innerHTML = letterWrap.textContent.replace(
    /\S/g,
    "<span class='letter' style='opacity: 0'>$&</span>"
  );
}
// Copyright end

// Slide In Animation
var slideIn = anime.timeline({
  loop: false,
  autoplay: false
});

slideIn
  .add({
    targets: ".fade-up .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 50 * (i + 1)
  })
  .add({
    targets: ".fade-up ",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Slide Up Animation
var heading2 = anime.timeline({
  loop: false,
  autoplay: false
});

heading2.add({
  targets: ".heading2 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading2hide = anime.timeline({
  loop: false,
  autoplay: false
});

heading2hide.add({
  targets: ".heading2 .letter",
  opacity: [0, 0],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading3 = anime.timeline({
  loop: false,
  autoplay: false
});

heading3.add({
  targets: ".heading3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading4 = anime.timeline({
  loop: false,
  autoplay: false
});

heading4.add({
  targets: ".heading4 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading5 = anime.timeline({
  loop: false,
  autoplay: false
});

heading5.add({
  targets: ".heading5 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading6 = anime.timeline({
  loop: false,
  autoplay: false
});

heading6.add({
  targets: ".heading6 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading7 = anime.timeline({
  loop: false,
  autoplay: false
});

heading7.add({
  targets: ".heading7 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading8 = anime.timeline({
  loop: false,
  autoplay: false
});

heading8.add({
  targets: ".heading8 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading9 = anime.timeline({
  loop: false,
  autoplay: false
});

heading9.add({
  targets: ".heading9 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var heading10 = anime.timeline({
  loop: false,
  autoplay: false
});

heading10.add({
  targets: ".heading10 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1800,
  delay: (el, i) => 50 * (i + 1)
});

// Slide Up Animation
var slideUp1 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp1.add({
  targets: ".fade-up1 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp2 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp2.add({
  targets: ".fade-up2 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp3 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp3.add({
  targets: ".fade-up3 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp4 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp4.add({
  targets: ".fade-up4 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp5 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp5.add({
  targets: ".fade-up5 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp6 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp6.add({
  targets: ".fade-up6 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp7 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp7.add({
  targets: ".fade-up7 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp8 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp8.add({
  targets: ".fade-up8 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

var slideUp9 = anime.timeline({
  loop: false,
  autoplay: false
});

slideUp9.add({
  targets: ".fade-up9 .letter",
  translateY: ["1.1em", 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 5 * (i + 1)
});

// Play your animation with these
//fadeUp.play();
//slideUp.play();
//slideIn.play();
//rotateIn.play();
//popIn.play();

// Wait before playing animation
setTimeout(() => {
  // Put the play below this line
}, 800);

// Play animaton when something is clicked
$(".your-button-class").click(function () {
  // Put the play below this line
});

// Play animaton when hovered in
$(".your-button-class").mouseenter(function () {
  // Put the play below this line
});

// Play animation when scrolled into view
$("#scroll-in").on("inview", function (event, isInView) {
  if (isInView) {
    //slideUp2.play();
  }
});

// Play animation when scrolled into view
$(".ambition-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    $(".heading-70 text-color-white.heading2.tricks").show();
    heading2.play();
    setTimeout(function () {
      slideUp2.play();
    }, 1000);
  } else {
    $(".heading-70 text-color-white.heading2.tricks").hide();
  }
});

// Play animation when scrolled into view
$(".bigger-text-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    heading3.play();
    setTimeout(function () {
      slideUp3.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".about-text-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    heading4.play();
    setTimeout(function () {
      slideUp4.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".trusted-text").on("inview", function (event, isInView) {
  if (isInView) {
    heading5.play();
    setTimeout(function () {
      slideUp5.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".our-plans").on("inview", function (event, isInView) {
  if (isInView) {
    heading6.play();
    setTimeout(function () {
      slideUp6.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".outcome-text").on("inview", function (event, isInView) {
  if (isInView) {
    heading7.play();
    setTimeout(function () {
      slideUp7.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".good-causes").on("inview", function (event, isInView) {
  if (isInView) {
    heading8.play();
    setTimeout(function () {
      slideUp8.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".safer-play").on("inview", function (event, isInView) {
  if (isInView) {
    heading9.play();
    setTimeout(function () {
      slideUp9.play();
    }, 1000);
  }
});

// Play animation when scrolled into view
$(".news-title").on("inview", function (event, isInView) {
  if (isInView) {
    heading10.play();
  }
});
