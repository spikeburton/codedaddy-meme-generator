function generate() {
  let topText = document.getElementById("top-text");
  let bottomText = document.getElementById("bottom-text");
  let saying = sayings[Math.floor(Math.random() * sayings.length)];

  topText.innerText = saying.top;
  bottomText.innerText = saying.bottom;
}
