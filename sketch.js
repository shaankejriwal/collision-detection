var movingRect,fixedRect;

function setup() {
  createCanvas(1600,800);
  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(800,200,80,30);
  fixedRect.shapeColor = "green";

  movingRect.velocityX = 4;

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){

    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";  
  }
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  
  drawSprites();
}