let seed;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(200, 300, 100);
  slider.position(10, 10);
  slider.style("width", "80px");
  seed = Math.round(random(0, 1000));
}

function draw() {
  randomSeed(seed);

  background(255);
  let val = slider.value();
  let r = random(0, 170);

  //mouth
  fill(0);
  rect(160, 230, 50, 10, 30);

  //cheeks
  fill(234, 137, 154, 95);
  circle(300, 220, 30);
  circle(100, 220, 30);

  //hair
  for (var x = 170; x < 220; x += 5) {
    noStroke();
    fill(20, 150, 220);
    rect(x, 100, 2, 30);
  }
}

function head() {
  fill(198, 134, 66);
  noStroke();
  ellipse(width / 2, height / 2, 200 + r, 100 + r);
}

function eyes() {
  fill(180, 120, 63);
  //stroke(0);
  ellipse(240, 160, r, r);
  ellipse(140, 160, 20, r);
  fill(255);
  ellipse(240, 160, r, r - 40);
  ellipse(140, 160, 20, r - 100);
  noStroke();
  fill(0);
  circle(240, 160, r - 50);
  circle(140, 160, r - 90);
}
