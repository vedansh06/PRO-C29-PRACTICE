const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var stand1;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15, box16;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
  // All the Bodies are made here
  ground1 = new Ground(400,650,775,30);
  stand1 = new Ground(595,485,350,20);
  box1 = new Box(100,100,30,40);

  Engine.update(engine);
}

function draw() {
  background(0); 
  ground1.display(); 
  stand1.display();
  box1.display();
  drawSprites();
}