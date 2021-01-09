
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
  paper = new Paper(100,300);

	
  
}


function draw() {
 rectMode(CENTER);
  background(0);
  Engine.run(engine);
  paper.display();
  
}



