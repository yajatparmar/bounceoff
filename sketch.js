var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(100, 200, 50, 50);
 movingRect =createSprite(700, 200, 50, 50);

 object1 =createSprite(400, 50, 50, 50);
 object2 =createSprite(400, 750, 50, 50);

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "violet";

 object1.shapeColor = "indigo";
 object2.shapeColor = "yellow";
 fixedRect.velocityX = 2;
 movingRect.velocityX = -2;
 object1.velocityY = 4;
 object2.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  //console.log("moving : "+movingRect.y);
  //console.log("fixed : "+fixedRect.y)
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceback(fixedRect, movingRect);
 istouching(object1,object2);
  drawSprites();
}

