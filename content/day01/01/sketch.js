function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  house();
  roundTree();
  tree();
}

function house() {
  fill(246, 215, 176);
  rect(460, 120, 80, 80);
  fill(205, 92, 92);
  triangle(460, 120, 500, 50, 540, 120);
}

function roundTree() {
  fill(17, 193, 131);
  circle(200, 200, 150);
  fill(166, 123, 91);
  rect(190, 277, 20, 120);
}

function tree() {
  fill(79, 121, 66);
  triangle(280, 350, 358, 120, 450, 350);
  fill(166, 123, 91);
  rect(350, 350, 20, 50);
}
