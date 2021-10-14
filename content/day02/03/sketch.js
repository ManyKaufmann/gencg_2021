var offset = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(1);
}

function draw() {
  background(255, 113, 181);
  noStroke();

  for (var x = 0; x <= width; x += 20) {
    for (var y = 0; y <= innerHeight; y += 60) {
      fill(random(210, 231), random(48, 161), random(139, 176));
      circle(x - offset, y - offset, 60);
    }
  }
}
