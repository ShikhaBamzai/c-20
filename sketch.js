var sprite1,sprite2;

function setup() {
  createCanvas(800,400);
 sprite1 = createSprite(200,200,20,20);
 sprite2 = createSprite(300,300,20,20);
 sprite1.shapeColor = "purple";
 sprite2.shapeColor = "purple";
}

function draw() {
  //background(255,255,255); 
  background("black");

  sprite2.x = mouseX;
  sprite2.y = mouseY;

  if(sprite1.isTouching(sprite2)){
    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";
  }

  else{
    sprite1.shapeColor = "purple";
    sprite2.shapeColor = "purple";
  }
  drawSprites();
}