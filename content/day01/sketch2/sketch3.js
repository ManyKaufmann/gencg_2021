var offset = 0;
// Default P5 setup function
function setup() {
  createCanvas(600, 400);
  // video = createCapture(VIDEO);
  //video.hide();
}

// Default P5 draw loop function
function draw() {
  background(0);

  //stroke(255);
  //strokeWeight(2);

  for (var x = 0; x <= width; x += 20) {
    for (var y = 0; y <= innerHeight; y += 60) {
      fill(random(50), 120, random(100));
      //ellipse(x - offset, y - offset, 25, 25);
      //rect(x - offset, y - offset, 100, 150);
      //triangle(30, x-offset, 360, 50, 86, 120)
      triangle(x - offset, y - offset, -40, -60, -86, -40);
      //triangle(30, 30, 400, y-offset, 86, 400)

      //circle(x-offset, y-offset, 60);
    }
    //image(video, 0, 0, width, height);
  }
}
