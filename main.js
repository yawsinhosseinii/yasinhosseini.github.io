let $ = document;
let loader = $.querySelector(".circles");
let container = $.querySelector(".container");
let video = $.querySelector(".video");
let texts = $.querySelector('.texts')

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
    $.body.style.background = "white";
    container.style.display = "block";
    texts.style.display = 'block'
  }, 3000);
});
