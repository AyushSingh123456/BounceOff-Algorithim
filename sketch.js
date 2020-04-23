var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 400, 50, 50);
  movingRect=createSprite(400, 40, 100, 100);
  movingRect.velocityY=4
  fixedRect.velocityY=-4
  movingRect.shapeColor='red'
  fixedRect.shapeColor='red'
  
}

function draw() {
  background(255,255,255);  
  
  if (movingRect.x-fixedRect.x<=(movingRect.width/2+fixedRect.width/2)
  
  && fixedRect.x-movingRect.x<=(movingRect.width/2+fixedRect.width/2)
  
  
  ){
    fixedRect.shapeColor='green'
    movingRect.shapeColor='green'
  }
  if (movingRect.y-fixedRect.y<=(movingRect.height/2+fixedRect.height/2)
  
  &&fixedRect.y-movingRect.y<=(movingRect.height/2+fixedRect.height/2)){

    fixedRect.velocityY=fixedRect.velocityY*(-1)
    movingRect.velocityY=movingRect.velocityY*(-1)


  }
  else {
    movingRect.shapeColor='red'
  fixedRect.shapeColor='red'
  }
  


  

  drawSprites();
}