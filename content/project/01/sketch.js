//https://www.youtube.com/watch?v=uk96O7N1Yo0
//https://www.chosic.com/download-audio/24220/

var sound;
var fft;
var particles = [];

function preload() {
  sound = loadSound("Sekuioa.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT();
}

function draw() {
  background(0);
  stroke(random(230, 255), random(0, 192), random(126, 203));
  strokeWeight(2);
  noFill(230, 0, 126);

  translate(width / 2, height / 2);

  fft.analyze();
  amp = fft.getEnergy(20, 255);

  var wave = fft.waveform();

  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    stroke(random(230, 255), random(0, 192), random(126, 203), 150);
    strokeWeight(7);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 60, 120);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    beginShape();
    stroke(random(230, 255), random(0, 192), random(126, 203), 170);
    strokeWeight(10);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 50, 100);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    beginShape();
    stroke(random(180, 200), random(150, 192), random(126, 255), 180);
    strokeWeight(8);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 50, 120);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    beginShape();
    stroke(random(230, 255), random(0, 200), random(126, 203), 120);

    strokeWeight(3);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i += 0.5) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 20, 90);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    beginShape();
    stroke(random(180, 200), random(150, 192), random(126, 255), 180);
    strokeWeight(5);
    noFill(random(180, 200), random(150, 192), random(126, 255), 180);
    for (var i = 0; i <= 180; i += 3) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 0, 90);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }

  var p = new Particle();
  particles.push(p);

  for (var i = 0; i < particles.length; i++) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 170);
      particles[i].show();
    } else {
      particles.splice(i, 3);
    }
  }
}

function mouseClicked() {
  if (sound.isPlaying()) {
    sound.pause();
    noLoop();
  } else {
    sound.play();
    loop();
  }
}
