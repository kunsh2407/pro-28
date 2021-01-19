
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,groundO,sling;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,120,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(950,155,30);
	mango5=new mango(1050,170,30);
	tree=new Tree(1050,580);
	ground=new ground(width/2,600,width,20);
	stone=new Ball(260,435,30)
	sling=new Sling(stone.body,{x:230,y:425})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  fill(0)
  text(mouseX+", "+mouseY,mouseX,mouseY)

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();
  ground.display();
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
}
function mouseReleased(){
	sling.fly()
}
function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:230,y:425})
	sling.attach(stone.body)
}

}
function detectcollision(stone,mango){
mangopos=mango.body.position
stonepos=stone.body.position

var distance=dist(mangopos.x,mangopos.y,stonepos.x,stonepos.y)
if(distance<=mango.r+stone.r){

  Matter.Body.setStatic(mango.body,false)
}


}