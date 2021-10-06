function setup() {
  createCanvas(600, 600);
  background(0);

  //button = createButton("click me");
  //button.position(width / 2, height / 2);
  //button.mousePressed(() => {
  mic = new p5.AudioIn();
  mic.start();
  //});
}

function draw() {
  //var micLevel = 0;
  var micLevel = mic.getLevel();
  console.log(micLevel);
  var sd = micLevel * 100;
  var md = micLevel * 300;
  var pd = micLevel * 500;
  fill(0, 10);

  var pos = width * 0.3;

  stroke(random(0, 229), 217, 242);
  circle(width / 2, height / 2, sd + 50);
  stroke(random(0, 225), 150, 20);
  circle(width / 2, height / 2, md + 200);
  stroke(random(50, 120), 100, 200);
  circle(width / 2, height / 2, pd + 350);
}
