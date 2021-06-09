var car, wall;
var speed,weight;
var D

function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  wall=createSprite(710,200,60,200);
  
  wall.shapeColor="green";

  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed;

  car.shapeColor="white";

}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    D=0.5*speed*speed*weight/22500;

    if (D>180){
      car.shapeColor="red";
    }
    if (D<180 && D>100){
      car.shapeColor="yellow";
    }
    if (D<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}