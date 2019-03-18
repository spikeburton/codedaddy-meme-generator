let prev, saying;

function generate() {
  const topText = document.getElementById("top-text");
  const bottomText = document.getElementById("bottom-text");

  do {
    saying = sayings[Math.floor(Math.random() * sayings.length)];
  } while (saying === prev);


  renderCanvas(saying.top, saying.bottom)
  prev = saying;
}

function renderCanvas(text1="Top Text",text2="Bottom Text") {
  const image = document.querySelector("img")
  const generator = document.getElementById("generator")

  const ctx = generator.getContext('2d')

  ctx.font = "16pt Impact"

  ctx.drawImage(image,0,0)
  ctx.fillStyle = 'white'
  
  ctx.lineWidth = 2
  ctx.strokeStyle = 'black'
  ctx.fillText(text1, 10, 25)
  ctx.strokeText(text1, 10, 25)
  

  ctx.fillText(text2, 5, 180)
  ctx.strokeText(text2, 5, 180)

}

// var canvas = document.getElementById('canvas'),
//         ctx = canvas.getContext('2d');
// canvas.width = $('img').width();
// canvas.crossOrigin = "Anonymous";
// canvas.height = $('img').height();
// ctx.drawImage($('img').get(0), 0, 0);
// ctx.font = "36pt Verdana";
// $(document).on('input','#inp',function(){
//     //redraw image
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage($('img').get(0), 0, 0);
//     //refill text
//     ctx.fillStyle = "red";
//     ctx.fillText($(this).val(),40,80);
// });
// $('button').click(function(){
//     console.log(ctx.getImageData(50, 50, 100, 100));
// });