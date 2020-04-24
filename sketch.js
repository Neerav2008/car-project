var car1,car2,car3,car4;
var w1,w2,w3,w4;

function setup() {
    createCanvas(800,400);

    car1 = createSprite(30,30,30,30);
    car2 = createSprite(30,370,30,30);
    car3 = createSprite(30,130,30,30);
    car4 = createSprite(30,260,30,30);

    w1 = createSprite(770,30,10,40);
    w2 = createSprite(770,370,10,40);
    w3 = createSprite(770,130,10,40);
    w4 = createSprite(770,260,10,40);

    car1.shapeColor = "blue";
    car2.shapeColor = "blue";
    car3.shapeColor = "blue";
    car4.shapeColor = "blue";

    w1.shapeColor = "white";
    w2.shapeColor = "white";
    w3.shapeColor = "white";
    w4.shapeColor = "white";
}

function draw() {
  background("black");  

  if(keyDown("space")){
    car1.velocityX = 12;
    car2.velocityX = 12;
    car3.velocityX = 12;
    car4.velocityX = 12;
  }

  if(car1.isTouching(w1)){
    car1.velocityX = 0;
  }

  if(car2.isTouching(w2)){
    car2.shapeColor = "red";
    car2.velocityX = 0;
  }

  if(car3.isTouching(w3)){
    car3.shapeColor = "green";
    car3.velocityX = 0;
  }

  if(car4.isTouching(w4)){
    car4.shapeColor = "yellow";
    car4.velocityX = 0;
  }

  drawSprites();
}