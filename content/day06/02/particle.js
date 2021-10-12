//Daniel Schiffmann - https://www.youtube.com/watch?v=0V3uYA1hafk

function Particle(x,y) {
    this.x =x;
    this.y = y;
    this.r = random(4, 32);

    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    this.show = function() {
        noStroke();
        var px = floor(this.x/vScale);
        var py = floor(this.y / vScale);
        var col = video.get(px, py);
        //console.log(col);
        fill(col[0], col[1], col[2], slider.value());
        ellipse(mouseX, mouseY, this.r, this.r);
    }
}