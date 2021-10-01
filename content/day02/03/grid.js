let x = 200;
let y = 200;
let eC;

function setup() {
  createCanvas(400, 400);
  eC = createGraphics(400, 400);
  eC.clear();
  //background(0);
}

function draw() {
  background(0);
  x += random(-1, 1);
  y += random(-1, 1);

  //if (mouseIsPressed) {
  //background(135, 206, 235);
  eC.fill(50, 20, 100);
  eC.noStroke(random(100), 20, 230);
  let starX = random(width);
  let starY = random(height);
  eC.rect(starX, starY, 10, 10);
  //eC.circle(mouseX, mouseY, 20);
  //}

  image(eC, 0, 0);
  fill(220, 55, 200);
  rectMode(CENTER);
  rect(x, y, 20, 10);
}

// function draw() {

//     background(0);

//     if (mouseIsPressed) {
//     background(135, 206, 235);
//     eC.fill(mouseY);
//     eC.circle(mouseX, mouseY, 20);
//     }

//     image(eC, 0, 0);
//     x += random(-3, 3);
//     y += random(-3, 3);

//     fill(255, 0, 0);
//     rectMode(CENTER);
//     rect(x, y, 20, 10);
// }
