# Day 04 || 06.10.21

## Drawing Machine

### Hot Wire

GOAL: Create TOGETHER

NAVIGATION:
- PlayerOne: Keyboard
- PlayerTwo: Mouse
- To start click once with the mouse!

OPTION ONE:
PlayerOne(Keyboard): Controll the lines with the arrow keyboard.
PlayerTwo(Mouse): Follow PlayerOne's line with the mouse as good as possible.
Extended: PlayerTwo with mouse goes first and PlayerOne follows.

OPTION TWO:
Create together something.

Idea: My idea was to create a drawing machine which two person can create. The idea is from the game Hot Wire.

<iframe src="../content/day04/01/embed.html" width="100%" height="450" frameborder="no"></iframe>

<img src="../content/day04/01/hotWire.png" width="40%">
<img src="../content/day04/01/hello.png" width="40%">
<img src="../content/day04/01/buddyArt.png" width="40%">

---

### MicInput - CLAP

In this project i want to do something with a interaction. So I decided to try out something with mic input.
Out of the microphon level I created the size of the circle.

<iframe src="../content/day04/02/embed.html" width="100%" height="600" frameborder="no"></iframe>



```js
function setup() {
  createCanvas(600, 600);
  background(0);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var micLevel = 0;
  var micLevel = mic.getLevel();
  console.log(micLevel);
  var sd = micLevel * 100;
  var md = micLevel * 300;
  var pd = micLevel * 500;
  fill(0, 10);

.
.
.

```
