var fixedRect, movingRect,Rect1,Rect2,Rect3,Rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Rect1 = createSprite(200,100,80,80);
  Rect1.shapeColor = "green";
  Rect1.debug = true;

  Rect2 = createSprite(400,100,80,80);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  Rect3 = createSprite(600,100,80,80);
  Rect3.shapeColor = "green";
  Rect3.debug = true;

  Rect4 = createSprite(800,100,80,80);
  Rect4.shapeColor = "green";
  Rect4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,Rect2)){
  movingRect.shapeColor = "red";
  Rect2.shapeColor = "red";
  
 }
 else {
  movingRect.shapeColor = "green";
  Rect2.shapeColor = "green";
 }

 
  drawSprites();
}
