var colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  colors = [
    color(185, 19, 114), //mid violet red
    color(49, 8, 31), //dark purple
    color(255, 116, 119), //light coral
  ]
}

function draw() {
  background(255);

  let gridSize = floor(map(0, 50, width, 15, 50));

  video.loadPixels();
  for (var y = 0; y < video.height; y += gridSize) {
    for(var x = 0; x < video.width; x += gridSize) {
      var index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0, 255, gridSize, 2);

      var fillColor = ranColor();
      //fill(fillColor);
      stroke(0);
      strokeWeight(3);
      circle(x, y, dia);
      //ellipse(x, y, 30, dia);
      
    }
  }

  function ranColor() {
    var randCol = floor(random(0, colors.length));
    return colors[randCol];
  }
}
