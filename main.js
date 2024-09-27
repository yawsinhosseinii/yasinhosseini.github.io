let $ = document;
let loader = $.querySelector(".circles");
let container = $.querySelector(".container");
let texts = $.querySelector(".texts");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
    $.body.style.background =
      'url("thousand-sunny-from-one-piece.3840x2160-ezgif.com-video-to-gif-converter.gif")';
    $.body.style.backgroundSize = "cover";
    $.body.style.backgroundRepeat = "no-repeat";
    $.body.style.backgroundPosition = "center";
    texts.style.display = 'block'
  }, 2500);
});
