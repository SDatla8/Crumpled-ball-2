var wall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

wall=createSprite(706,650,10,100);
wall2=createSprite(734,650,10,100);
wall.shapeColor="white";
wall2.shapeColor="white";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,20)
	ground1 = new Ground(680,650,20,100)
	ground2 = new Ground(760,650,20,100)
ball = new Ball(300,400,10);
	
}


function draw() {
	background("black");
	textSize(60);
	
	text("SAVE THE WORLD",150,400)
	
	Engine.update(engine);
  
  ground.display();
ball.display();	
ground1.display();  
ground2.display();  
  
 wall.display();
 wall2.display();
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});
	}
	
	drawSprites();
	  }


