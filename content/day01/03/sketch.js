var offset = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  //stroke(255);
  //strokeWeight(2);

  for (var x = 0; x <= width; x += 20) {
    for (var y = 0; y <= innerHeight; y += 60) {
      fill(random(220), 80, random(200));
      //ellipse(x - offset, y - offset, 25, 25);
      //rect(x - offset, y - offset, 100, 150);
      //triangle(30, x - offset, 360, 50, 86, 120);
      //triangle(x - offset, y - offset, -40, -60, -86, -40);
      triangle(30, 30, 400, y - offset, 86, 400);

      //circle(x-offset, y-offset, 60);
    }
  }
}
