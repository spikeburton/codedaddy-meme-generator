let prev, saying;

function generate() {
  const topText = document.getElementById("top-text");
  const bottomText = document.getElementById("bottom-text");

  do {
    saying = sayings[Math.floor(Math.random() * sayings.length)];
  } while (saying === prev);

  topText.innerText = saying.top;
  bottomText.innerText = saying.bottom;
  prev = saying;
}
