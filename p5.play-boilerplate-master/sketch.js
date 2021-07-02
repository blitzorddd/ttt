const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world = engine.world;
 var option2={
   restitution:1
 }
 object= Bodies.circle(200,100,20,option2);
 World.add(world,object);
 console.log(object);
 console.log(object.position.y);
 var option={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,10,option);
World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
}