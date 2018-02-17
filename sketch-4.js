var bird, cloud;

var CANVAS_W = 800;
var CANVAS_H = 600;

var CLOUD_W = 900;

var started = false;

function setup() {
  // put setup code here
  createCanvas(CANVAS_W,CANVAS_H);

  // cloud
  var cloud1 = loadImage("assets/cloud1.png");
  var cloud2 = loadImage("assets/cloud2.png");
  var cloud3 = loadImage("assets/cloud3.png");

  cloud = createSprite(0, 0);
  cloud.position.x = random(CANVAS_W);
  cloud.position.y = random(CANVAS_H);
  cloud.velocity.x = -random(1, 2);

  cloud.addImage("1", cloud1);
  cloud.addImage("2", cloud2);
  cloud.addImage("3", cloud3);

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

  if (cloud.position.x < -CLOUD_W/2) {
    cloud.changeAnimation(random(["1", "2", "3"]));
    cloud.position.x = CANVAS_W + CLOUD_W/2;
    cloud.position.y = random(CANVAS_H);
    cloud.velocity.x = -random(1, 2);
  }

  if (keyDown("x") || mouseDown(LEFT)) {
    started = true;
    bird.velocity.y -= 0.2;
    bird.changeAnimation("flapping");
  } else {
    if (started) {
      bird.velocity.y += 0.1;
      bird.changeAnimation("still");
    }
  }

  if (bird.position.y < 0 || bird.position.y > CANVAS_H) {
    bird.velocity.y *= -1;
  }

  drawSprites();
}
