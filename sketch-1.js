var bird;

var CANVAS_W = 800;
var CANVAS_H = 600;

function setup() {
  // put setup code here
  createCanvas(CANVAS_W,CANVAS_H);

  // bird
  var birdAnim = loadAnimation("assets/bird1.png", "assets/bird2.png")
  bird = createSprite(100, 100, 64, 64);
  bird.addAnimation("flapping", birdAnim);
  bird.addImage("still", birdAnim.getImageAt(0));
  bird.scale = 1/8;
}

function draw() {
  // put drawing code here
  background("cyan");

  drawSprites();
}
