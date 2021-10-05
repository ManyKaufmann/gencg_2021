let diameter;
let opacity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  diameter = min(width, height) * 0.8;
  opacity = 100;
}

function draw() {
  background(200, 50, 100);

  const now = new Date();
  const [seconds, minutes, hours] = [
    now.getSeconds(),
    now.getMinutes(),
    now.getHours(),
  ];

  noStroke();

  // Hours
  fill(255 * (hours / 24), 0, 0, opacity);
  circle(width / 2, height / 2, map(hours, 0, 24, 0, diameter));

  // Minutes
  fill(0, 255 * (seconds / 60), 0, opacity);
  circle(width / 2, height / 2, map(minutes, 0, 60, 0, diameter));

  // Seconds
  fill(0, 0, 255 * (seconds / 60), opacity);
  circle(width / 2, height / 2, map(seconds, 0, 60, 0, diameter));
}
