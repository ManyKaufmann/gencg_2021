var colors = [];
var v = 1;
var h = 1;

function setup() {
  createCanvas(410, 410);
  background(0);
  rectMode(CENTER);
  frameRate(20);

  colors = [
    color(185, 19, 114), //mid violet red
    color(49, 8, 31), //dark purple
    color(255, 116, 119), //light coral
  ]
}

function draw() {
  
  push();
  var fillColor = ranColor();
  fill(fillColor);
  noStroke();
  rect(12* v, 12 * h, 25, 25);
  pop();

  push();
  var fillColor = ranColor();
  fill(fillColor);
  noStroke();
  strokeWeight(3);
  ellipse(12 * v, 12 * h, 21);
  pop();

  v = v + 2;
  if(v > 33){
  h = h + 2;
  v = 1}
}

function ranColor() {
  var randCol = floor(random(0, colors.length));
  return colors[randCol];
}
