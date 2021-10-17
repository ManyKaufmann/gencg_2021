var offset = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  for (var x = 0; x <= width; x += 20) {
    for (var y = 0; y <= height; y += 60) {
      fill(random(100), 0, random(250));
      //ellipse(x - offset, y - offset, 25, 25);
      rect(x - offset, y - offset, 20, 30);
    }
  }
}
