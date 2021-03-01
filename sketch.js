var fixedRect,movingRect;
var ball1,ball2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  ball1 = createSprite(400, 400, 40, 80);
  ball1.shapeColor = "red";
  ball2= createSprite(200, 400, 60, 80);
  ball2.shapeColor = "white";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background("pink");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else if(isTouching(movingRect,ball1)){
 ball1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else if(isTouching(movingRect,ball2)){
  ball2.shapeColor = "blue";
   movingRect.shapeColor = "blue";
 }
  else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "yellow";
  ball1.shapeColor = "red";
 ball2.shapeColor = "white";
  }
   
  drawSprites();
}