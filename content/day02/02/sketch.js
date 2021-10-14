function setup() {
  createCanvas(600, 400);
}
// Default P5 draw loop function
function draw() {
  // stroke(255);
  //strokeWeight(1);

  //col = mouseX/2;
  //col = map(mouseX, 0, 600, 0, 255);

  var xdis = width / 4;
  var ydis = height / 15;

  for (var x = 0; x <= 4; x++) {
    if (x % 2 === 0) {
      for (var y = 0; y <= 15; y++) {
        if (x % 2 === 0 && y % 2 === 0) {
          //fill(100, 100, 120);
          // circle(x * xdis, y * ydis, 200);
          fill(random(100), 120, 60);
          circle(x * xdis, y * ydis, 160);
        } else {
          fill(30, 100, 120);
          circle(x * xdis, y * ydis, 170);
        }
      }
    } else {
      for (var y = 15; y >= 0; y--) {
        if (x % 2 === 0 && y % 2 === 0) {
          //fill(100, 100, 120);
          // circle(x * xdis, y * ydis, 200);
          fill(100, 120, 60);
          circle(x * xdis, y * ydis, 160);
        } else {
          fill(30, 100, 120);
          circle(x * xdis, y * ydis, 170);
        }
      }
    }
  }
}
