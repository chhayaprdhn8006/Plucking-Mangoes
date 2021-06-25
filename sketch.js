
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, tree, boy, stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(500,690,1000,30);
	tree = new Tree(800,400,1,1);
	stone = new Stone(140,530,20,20);
	boy = new Boy(stone.body,{x:140,y:530});
	mango1 = new Mango(800,329,15);
	mango2 = new Mango(699,299,15);
	mango3 = new Mango(710,250,15);
	mango4 = new Mango(890,205,15);
	mango5 = new Mango(890,230,15);
	mango6 = new Mango(750,400,15);
	mango7 = new Mango(850,330,15);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ground1.display();
  tree.display();
  boy.display();
  stone.display();
 mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  if(stone.body.x - mango1.x < (stone.body.width - mango1.width)/2){
	Matter.Body.setStatic(mango1,false);
  }
  if(stone.body.x - mango2.x < (stone.body.width - mango2.width)/2){
	Matter.Body.setStatic(mango2,false);
}
if(stone.body.x - mango3.x < (stone.body.width - mango3.width)/2){
	Matter.Body.setStatic(mango3,false);
}
if(stone.body.x - mango4.x < (stone.body.width - mango4.width)/2){
	Matter.Body.setStatic(mango4,false);
}
if(stone.body.x - mango5.x < (stone.body.width - mango5.width)/2){
	Matter.Body.setStatic(mango5,false);
}
if(stone.body.x - mango6.x < (stone.body.width - mango6.width)/2){
	Matter.Body.setStatic(mango6,false);
}
if(stone.body.x - mango7.x < (stone.body.width - mango7.width)/2){
	Matter.Body.setStatic(mango7,false);
}
 

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    boy.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:140, y:530});
		boy.attach(stone.body);
	}
}





