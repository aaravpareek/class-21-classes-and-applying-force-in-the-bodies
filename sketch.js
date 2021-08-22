const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball2 = {
    restitution:1,frictionAir:0.02
  }

  ball = Bodies.circle(200,20,20,ball2);
 World.add(world,ball);

 botton1 = createImg("right.png")
 botton1.position(220,30);
 botton1.size(30,30)
 botton1.mouseClicked(force);

 botton2 = createImg("up.png");
 botton2.position(20,30)
 botton2.size(30,30)
 botton2.mouseClicked(force1);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function force1(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05})
}