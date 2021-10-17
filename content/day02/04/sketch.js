var x = 0;
var y = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(10);
  background(0);
}

function draw() {
  // stroke(255);
  strokeWeight(2);
  //fill(24, 60, 132);
  fill(0);
  rect(x + 20, y + 20, 50, 50);

  if (random(1) > 0.5) {
    stroke(random(253), 25, 166);
    //fill(random(253), 25, 166);
    rect(x + 20, y + 20, 20, 30);
    stroke(70);
    //fill(197, 203, 246);
    //ellipse(x + 16, y + 20, 25, 25);
    fill(255);
    rect(x + 16, y + 20, 8, 8);
  } else {
    noStroke();
    //fill(23, 158, 166);
    //rect(x, y + 5, x + 35, y);
    stroke(random(100), 238, 159);
    // fill(random(100), 238, 159);
    rect(x + 20, y + 20, 25, 25);
    //fill(255);
    rect(x + 20, y + 20, 8, 8);
  }

  x += 35;
  if (x >= width) {
    x = 0;
    y += 35;
  }

  // if (y >= height) {
  //background(0);
  //x = 0;
  // y = 0;
  //}
}
