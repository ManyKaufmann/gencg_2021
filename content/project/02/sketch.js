//https://www.youtube.com/watch?v=uk96O7N1Yo0
//https://www.chosic.com/download-audio/24220/

var sound;
var fft;
var particles = [];

function preload() {
  sound = loadSound("loyal.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT();
  //particles[i] = new Particle();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();

  translate(width / 2, height / 2);

  fft.analyze();
  amp = fft.getEnergy(20, 255);

  var wave = fft.waveform();

  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i <= 180; i += 1.5) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));

      var r = map(wave[index], -1, 1, 150, 50);

      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }

  var p = new Particle();
  particles.push(p);

  for (var i = 0; i < particles.length; i++) {
    //if (!partilces[i].edges()) {
    particles[i].update(amp > 200);
    particles[i].show();
    // } else {
    //   particles.splice(i, 1);
    // }
  }
  // beginShape();
  //for (var i = 0; i <= 180; i++) {
  //var index = floor(map(i, 0, 180, 0, wave.length - 1));

  //var r = map(wave[index], -1, 1, 150, 350);

  //  var x = r * -sin(i);
  // var y = r * cos(i);
  //vertex(x, y);
  //}
  // endShape();
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
