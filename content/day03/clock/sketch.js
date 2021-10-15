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

  // strokeWeight(2);
  // noStroke(255);
  // noFill();
  translate(width / 2, height / 2);
  // circle(0, 0, 200);
  rotate(180);



  for (var x = 1; x <= hours % 12; x++) {
    let h = random(5, 15);
    stroke(216, 247, 147, 200);
    strokeWeight(3);
    push();
    rotate(x * 30);
    line(0, 0, 0, 70 + h);
    pop();
  }

  randomSeed(2);
  for (var x = 0; x <= minutes; x++) {
      let r = random(10, 40);
      stroke(250, 170, 54, 80);
      strokeWeight(2);
      push();
      rotate(x * 6);
      line(0, 0, 0, 130 + r);
      pop();
  
  }

  for (var x = 0; x <= seconds; x++) {
      strokeWeight(1);
      stroke(117, 176, 156, 150);
      push();
      rotate(x * 6);
      line(0, 0, 0, width);
      pop();
}
  }
