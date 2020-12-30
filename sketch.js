var car,car_Image;
var wall;
var speed;
var weight;

function preload()
{
  car_Image=loadImage("car.png");
}

function setup()
{
 
  car=createSprite(50,200,50,50);
  car.addImage(car_Image);
  car.scale=0.9;

  wall=createSprite(1500,200,60,200);
  wall.shapeColor=color(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw()
{
  createCanvas(1600,400);
  background("black");
  
  car.depth=wall.depth;
  car.depth=car.depth+1;
  car.velocityX=speed;

  if (wall.x-car.x <(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
    if (deformation>180)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      wall.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      wall.shapeColor=color(0,255,0);
    }

    textSize(25);
    stroke("white");
    fill("white");
    text("DEFORMATION = "+Math.round(deformation),500,50)
        }
  drawSprites();
  
    
}