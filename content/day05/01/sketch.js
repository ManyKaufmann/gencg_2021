let seed;
var r = random(0, 170);

function setup() {
  createCanvas(400, 400);
  //slider = createSlider(200, 300, 100);
  //slider.position(10, 10);
  //slider.style("width", "80px");
  seed = Math.round(random(0, 1000));
}

function draw() {
  randomSeed(seed);
  background(200);
  //let val = slider.value();
  

  head();
  
  eyes();
  mouth();
  cheeks();
  hair();

}

function head() {
  fill(198, 134, 66, 200);
  noStroke();
  ellipse(width / 2, height / 2, random(150, 300), random(50, 400));
}

function eyes() {
  var r = random(0, 50);

  fill(255);
  ellipse(240, 160, r, r - 20);
  ellipse(140, 160, r, r - 100);
  
  fill(0);
  circle(240, 160, r - 50);
  circle(140, 160, r - 90);
}


function mouth() {
  fill(0);
  rect(160, 230, 50, random(10, 50), random(0, 50));
}

function cheeks() {
  fill(234, 137, 154, 95);
  circle(300, 220, 30);
  circle(100, 220, 30);
}

function hair(){
  for (var x = 170; x < 220; x += 5) {
    noStroke();
    fill(20, 150, 220);
    rect(x, random(100, 120), 2, random(30, 100));
  }
}