var wall,thickness;
var bullet,speed,weight;
var height


function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321);
weight=random(30,52);
height=random(200,300);
bullet= createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor=(80,80,80);
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
 /* if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = car.velocityX * (-1);
      wall.velocityX = wall.velocityX * (-1);
}  
  if (car.y - wall.y < wall.width/2 + car.width/2
  && wall.y - car.y < wall.width/2 + car.width/2) {
    car.velocityY = car.velocityY* (-1);
    wall.velocityY = wall.velocityY * (-1);
  }*/
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
  }
