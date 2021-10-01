function setup() {
  createCanvas(600, 400);
}

// Default P5 draw loop function
function draw() {
  background(0);

  stroke(255);
  strokeWeight(1);

  for (var y = 0; y <= height; y += 50) {
    for (var x = 0; x <= innerWidth; x += 60) {
      //fill(random(100), 10, random(160));
      fill(100, 10, 60);
      circle(x, y, 70);
    }
  }
}
