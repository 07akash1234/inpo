var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,border1Body,border2Body,border3Body;
var border1,border2,border3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	engine = Engine.create();
	world = engine.world;

	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	border1=createSprite(width/2,650,200,20);
	border1.shapeColor=("red")
	
	border2=createSprite(290,620,20,100);
	border2.shapeColor=("red")
	
	border3=createSprite(490,620,20,100);
	border3.shapeColor=("red")


    border1Body = Bodies.rectangle(width/2, 650,200, 20 , {density:15,isStatic:true} );
	World.add(world, border1Body);

	border2Body = Bodies.rectangle(290,620, 20, 100 , {density:15,isStatic:true} );
	World.add(world, border2Body);

	border3Body = Bodies.rectangle(490,620, 20, 100 , {density:15,isStatic:true} );
	World.add(world, border3Body);

	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  border1.x=border1Body.position.x
  border1.y=border1Body.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution=0.8;

  
}
}