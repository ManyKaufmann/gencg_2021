function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(1);

  for (var y = 0; y <= height; y += 50) {
    for (var x = 0; x <= width; x += 60) {
      fill(100, 10, 60);
      circle(x, y, 70);
    }
  }
}
