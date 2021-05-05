const Engine=Matter.Engine 
const World=Matter.World
const Bodies=Matter.Bodies
var engine
var world
var ball;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

   var balls = {
     restitution: 1
   }
  ball = Bodies.circle (200,200,30,balls);
  World.add(world,ball);
  

  var grounds={
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,grounds);
  World.add(world,ground)
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  fill("green")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
}