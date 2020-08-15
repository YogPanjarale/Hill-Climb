
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gscale=1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground = new Ground(width)
	Engine.run(engine);
//	Matter.Body.scale(ground.body,ground.xScale,ground.yScale)
}


function draw() {
  rectMode(CENTER);
  background(240,255,240);
  ground.display()
  drawSprites();
 drawBlobs();
}
function keyPressed(){
	switch (keyCode) {
		case 37:
			camera.position.x-=50
			break;
	    case 39:
	    	camera.position.x+=50
			break;
		case 32:
			createBlob(mouseX,mouseY)
			default:
			break;
	}
}




