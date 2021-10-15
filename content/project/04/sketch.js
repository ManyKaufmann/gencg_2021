//https://www.youtube.com/watch?v=uk96O7N1Yo0
//https://www.chosic.com/download-audio/24220/

var sound;
var fft;
var particles = [];

function preload() {
  sound = loadSound("epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT();
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  fft.analyze();
  amp = fft.getEnergy(20, 255);

  var wave = fft.waveform();

  for (var t = -1; t <= 1; t += 0.4) {
    // beginShape();
    // stroke(random(44, 50), random(62, 70), random(80, 100), 255);
    // strokeWeight(10);
    // noFill(230, 0, 126);
    // for (var i = 0; i <= 180; i++) {
    //   var index = floor(map(i, 0, 180, 0, wave.length - 1));
    //   var r = map(wave[index], -1, 1, 60, 120);
    //   var x = r * sin(i) * t;
    //   var y = r * cos(i);
    //   vertex(x, y);
    // }
    // endShape();

    beginShape();
    //stroke(random(44, 253), random(62, 116), random(80, 108), 255);
    // stroke(random(44), random(62), random(80), 255);
    stroke(44, 62, 80, random(150, 255));
    strokeWeight(2);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i += 0.5) {
      var index = floor(map(i, 0, 100, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 70, 250);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    beginShape();
    //stroke(random(44, 253), random(62, 116), random(80, 108), 255);
    //stroke(random(253), random(116), random(108), 255);
    stroke(253, 116, 108, random(0, 150));
    strokeWeight(4);
    noFill(230, 0, 126);
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 255, 200, wave.length - 1));
      var r = map(wave[index], -1, 1, 10, 200);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();

    // beginShape();
    // stroke(random(44, 253), random(62, 116), random(80, 108), 255);

    // strokeWeight(3);
    // noFill(230, 0, 126);
    // for (var i = 0; i <= 180; i += 0.5) {
    //   var index = floor(map(i, 0, 180, 0, wave.length - 1));
    //   var r = map(wave[index], -1, 1, 20, 90);
    //   var x = r * sin(i) * t;
    //   var y = r * cos(i);
    //   vertex(x, y);
    // }
    // endShape();

    // beginShape();
    // stroke(random(44, 253), random(62, 116), random(80, 108), 255);
    // strokeWeight(2);
    // noFill(random(180, 200), random(150, 192), random(126, 255), 180);
    // for (var i = 0; i <= 180; i += 3) {
    //   var index = floor(map(i, 0, 180, 0, wave.length - 1));
    //   var r = map(wave[index], -1, 1, 0, 90);
    //   var x = r * sin(i) * t;
    //   var y = r * cos(i);
    //   vertex(x, y);
    // }
    // endShape();
  }

  var p = new Particle();
  particles.push(p);

  for (var i = 0; i < particles.length; i++) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 235);
      particles[i].show();
    } else {
      particles.splice(i, 1);
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
