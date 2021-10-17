let seed;
var r = random(0, 170);
var colors = [];

function setup() {
  createCanvas(400, 400);

  seed = Math.round(random(0, 1000));

  colors = [
    color(210,165,109), 
    color(206,139,84),
    color(189,126,74),
    color(150,97,61),
    color(131,80,46),
  ]
}

function draw() {
  randomSeed(seed);
  background(200);  
  head();
  eyes();
  mouth();
  cheeks();
  hair();
}

function head() {
  var faceColor = ranColor();
  fill(faceColor);
  noStroke();
  ellipse(width / 2, height / 2, random(150, 300), random(50, 400));
}

function eyes() {
  var r = random(0, 50);
  fill(255);
  ellipse(240, 160, r, r - 20);
  ellipse(140, 160, r, r - 100);
  
  fill(0);
  circle(240, 160, r - 50);
  circle(140, 160, r - 90);
}


function mouth() {
  fill(0);
  rect(160, 230, 50, random(10, 50), random(0, 50));
}

function cheeks() {
  fill(234, 137, 154, 95);
  circle(300, 220, 30);
  circle(100, 220, 30);
}

function hair(){
  for (var x = 170; x < 220; x += 5) {
    noStroke();
    fill(20, 150, 220);
    rect(x, random(100, 120), 2, random(30, 100));
  }
}

function ranColor() {
  var randCol = floor(random(0, colors.length));
  return colors[randCol];
}