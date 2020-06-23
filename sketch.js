var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var  box2, box3;
var box1Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	box1Sprite = createSprite(400, 630, 200, 20);
	box1Sprite.shapeColor = color(255, 0, 0);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true} );
	World.add(world, packageBody);
	

	//Create a ground
	ground = Bodies.rectangle(width/2, 650, 700, 10 ,{isStatic:true});
 	World.add(world, ground);

	box1Body = Bodies.rectangle(400, 630, 200, 20 ,{isStatic:true});
	World.add(world, box1Body);
	
   box2Sprite = createSprite(290, 590, 20, 100);
   box2Sprite.shapeColor=color(255, 0, 0);
   box3Sprite = createSprite(490, 590, 20, 100);
   box3Sprite.shapeColor=color(255, 0, 0);
   


   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
}



function keyPressed() { if (keyCode === LEFT_ARROW) { helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20,y:0} 
	 Matter.Body.translate(packageBody, translation) }
	  else if (keyCode === RIGHT_ARROW) 
	  { helicopterSprite.x=helicopterSprite.x+20; 
		translation={x:20,y:0}
	   Matter.Body.translate(packageBody, translation) } 
	   else if (keyCode === DOWN_ARROW)
		{ Matter.Body.setStatic(packageBody,false)}
	  }