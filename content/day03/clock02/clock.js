function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  const now = new Date();
  const [seconds, minutes, hours] = [
    now.getSeconds(),
    now.getMinutes(),
    now.getHours(),
  ];

  strokeWeight(2);
  noStroke(255);
  noFill();
  translate(width / 2, height / 2);
  circle(0, 0, 200);
  rotate(180);
  randomSeed(20);

  for (var x = 1; x <= hours % 12; x++) {
    let h = random(20);
    stroke(77, 161, 169);
    strokeWeight(2);
    push();
    rotate(x * 30);
    line(0, 0, 0, 20 + h);
    pop();
  }

  for (var x = 0; x <= minutes; x++) {
    let h = random(120);
    stroke(255, 166, 48, 100);
    strokeWeight(2);
    push();
    rotate(x * 30);
    ellipse(x, 50 + x, 30);
    pop();
  }

  for (var x = 0; x <= seconds; x++) {
    stroke(215, 232, 186, 200);
    strokeWeight(1);
    push();
    rotate(x * 6);
    ellipse(150, 50, 10);
    pop();
  }
}
