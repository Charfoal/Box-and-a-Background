var Player;
function setup() {
  createCanvas(1550,750);
  Player = createSprite(800,400,50,50);
}

function draw() 
{
  background("Blue");
drawSprites();
if(keyIsDown(RIGHT_ARROW)) {
  Player.position.x += 5;
}
if(keyIsDown(LEFT_ARROW)) {
  Player.position.x -= 5;
}
if(keyIsDown(DOWN_ARROW)) {
  Player.position.y += 5;
}
if(keyIsDown(UP_ARROW)) {
  Player.position.y -= 5;
}
}

