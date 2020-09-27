
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, dustbin1;

function preload()
{
}

function setup() 
{
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,height,1600,20)

	dustbin1 = new Dustbin(1200,650);

	paper= new Paper(200,450,70);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
   	ground.display();
   	paper.display();
   	dustbin1.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW)
	{

   		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-150});

	}



}

