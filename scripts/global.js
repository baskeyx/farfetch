"use strict";

(function() {

  // banner 1

  const elem = document.querySelector('.banner-1');
  const flkty = new Flickity(elem, {
    // options
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false
  });

  // banner 2

  window.onload = function() {
    createScratchCard({
      "container": document.getElementById("scratchcard"),
      "background": "img/code.png",
      "foreground": "img/scratch-me.png",
      "coin": "img/coin2.png",
      "thickness": 18,
    });
  }

  // banner 3

  const slider = document.querySelector(".banner-3 ul");
  const sliders = document.querySelectorAll(".banner-3 ul li");

  slider.addEventListener("click", (e) => {
    const clicked = e.target.tagName;
    if (clicked === "DIV") {
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove("selected");
      }
      e.target.parentNode.classList.add("selected");
    };
  })
})();
