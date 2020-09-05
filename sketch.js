const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(800,800);
  engine = Matter.Engine.create();
    world = engine.world;

 // createSprite(400, 200, 50, 50);
  gol=new Ground(400,800,2,1); 
}

function draw() {
  background(255,255,255);
   gol.display();
  drawSprites();
}