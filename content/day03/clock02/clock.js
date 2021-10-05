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
  //arc(0, 0, 200, 200, 0, 360);
  rotate(180);
  randomSeed(20);
  for (var x = 1; x <= hours % 12; x++) {
    let r = random(20);
    strokeWeight(1);
    rotate(6);
    circle(x, -50, r);
  }

  for (var x = 0; x <= minutes; x++) {
    let h = random(120);
    stroke(231, 90, 90);
    strokeWeight(3);
    push();
    rotate(x * 30);
    line(0, 0, 0, 130 + h);
    pop();
  }

  for (var x = 0; x <= seconds; x++) {
    stroke(255);
    strokeWeight(1);
    stroke(255, 249, 121, 50);
    push();
    rotate(x * 6);
    line(0, 0, 0, width);
    pop();
  }
}
