let x;
let y;

function setup() {
  createCanvas(800, 600);
  background(162, 0, 33);

  x = 0;
  y = height / 2;
}

function draw() {
  first();
  secondPlayer();
}

function first() {
  fill(245, 47, 87, 15);
  stroke(247, 157, 92, 30);
  circle(mouseX, mouseY, 20);
}

function secondPlayer() {
  stroke(243, 117, 43);
  strokeWeight(2);
  if (keyIsDown(RIGHT_ARROW)) {
    line(x, y, x + 4, y);
    x += 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    line(x, y, x - 4, y);
    x -= 4;
  }
  if (keyIsDown(UP_ARROW)) {
    line(x, y, x, y - 4);
    y -= 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    line(x, y, x, y + 4);
    y += 4;
  }
}
