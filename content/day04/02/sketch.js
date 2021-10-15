function setup() {
  createCanvas(600, 600);
  background(0);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var micLevel = 0;
  var micLevel = mic.getLevel();
  console.log(micLevel);
  var sd = micLevel * 100;
  var md = micLevel * 300;
  var pd = micLevel * 500;
  fill(0, 10);

  var pos = width * 0.3;

  stroke(random(0, 229), 217, 242, 200);
  strokeWeight(5);
  circle(width / 2, height / 2, sd + 50);
  stroke(random(0, 225), 150, 20, 150);
  circle(width / 2, height / 2, md + 200);
  stroke(random(50, 120), 100, 200, 50);
  circle(width / 2, height / 2, pd + 350);
}
