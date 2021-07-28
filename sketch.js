var garden,apple,rabbit,orangeLeaf;
var gardenImg,appleImg,rabbitImg,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background("white");
  
  edges = createEdgeSprites();
  rabbit.x = World.mouseX;
  rabbit.bounceOff(edges);

  createApples();
  createLeaves();
 drawSprites();
}

function createApples(){
  if(frameCount % 80==0){
    apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.09;
    apple.velocityY = 2;
    apple.lifetime = 175;
  }
}

function createLeaves(){
if(frameCount % 80==0){
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 175;
}
}
