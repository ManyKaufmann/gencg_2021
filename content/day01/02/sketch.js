var size = 300;
var sides = 40;
var colors = [];

function setup() {
  createCanvas(400, 400);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  colors = [
    color(185, 19, 114), //mid violet red
    color(49, 8, 31), //dark purple
    color(255, 116, 119), //light coral
  ]
}

function draw() {
  background(219, 223, 172);
  hexagonShape();
}

function hexagonShape() {
    var numShapes = sides;
    var strokeCol = ranColor();
    var stepsOut = 5;
    var numSteps = rando() ? stepsOut : floor(stepsOut * 1.25);
    var angle = 360 / numShapes;
    var centerOffset = (size / 2) * 0.15;
    var singelStep = ((size / 2) - centerOffset) / numSteps

      push();
      noFill();
      stroke(strokeCol);
      strokeWeight(2);
      translate(width/2, height/2);
      rotate(angle / 2);
      for (var i = 1; i < numSteps + 1; i++) {
        hexagon(0, 0, centerOffset + (i * singelStep));
        //rotate(10);
      } pop();
  }

function hexagon(posX, posY, r) {
    var rotAngel = 360 / 6;
    beginShape()
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOnCircle(posX, posY,r, i * rotAngel)
      vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE);
}
  
function pointOnCircle(posX, posY, r, angle) {
  var x = posX + r * cos(angle);
  var y = posY + r * sin(angle);
  return createVector(x, y);
}


function ranColor() {
  var randCol = floor(random(0, colors.length));
  return colors[randCol];
}

function rando() {
  var rando = random(1);
  if (rando < 0.5) {
    return true;
  } else {
  return false;
  }
}



