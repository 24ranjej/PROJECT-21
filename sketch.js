var bullet,wall;
var speed,weight;
var thickness;

function setup()
{
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(23,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  if(bullet.isTouching(wall)){
    bullet.collide(wall);
  }
  if(hasColided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);  
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,225,0);  
    }
  }
  drawSprites();
}

function hasColided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge  =  Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;  
  }
  return false;
}  