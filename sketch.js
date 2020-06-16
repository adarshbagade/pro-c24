
var ground,boxBase,boxBaseBody,boxLeftBody,boxLeftSprite;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	dustbin= new Dustbin (300,200);
	
    dustbin.scale= 0.5;
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);


 boxRightSprite.display();
  boxLeftSprite.display();
  boxBaseBody.display();
  boxRightBody.display();
  boxLeftBody.display();
  boxBase.display();

 dustbin.display();
 
  drawSprites();
 
}



