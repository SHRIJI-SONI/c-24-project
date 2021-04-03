
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;
    
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	//Create the Bodies Here.
	dustbin1=new Dustbin(400,650,200,20)
	dustbin2=new Dustbin(300,610,20,100)
	dustbin3=new Dustbin(500,610,20,100)
	paper1=new Paper(1000,100,20)

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background("black");
  dustbin1.display();     
  dustbin2.display();
  dustbin3.display(); 
  paper1.display();  

  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW) {
	this.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  }
}