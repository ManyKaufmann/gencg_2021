class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(150);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0005, 0.000001));

    this.w = random(1, 7);
  }

  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      //   this.pos.add(this.vel);
      //   this.pos.add(this.vel);
      //   this.pos.add(this.vel);
      //   this.pos.add(this.vel);
      //   this.pos.add(this.vel);
    }
  }

  show() {
    noStroke();
    // stroke(random(0, 220), random(170, 255), random(150, 239), 90);
    //strokeWeight(1);
    fill(random(144, 233), random(78, 100), random(149, 67), random(10, 250));
    ellipse(this.pos.x, this.pos.y, this.w);
  }

  edges() {
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
