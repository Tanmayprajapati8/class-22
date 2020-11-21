const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup() {
  createCanvas(800, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = Bodies.rectangle(400, 390, 800, 10, { isStatic: true, friction: 0.5 });
  World.add(myWorld, ground);

  ball = Bodies.circle(400, 200, 20, { restitution: 0 });
  World.add(myWorld, ball);

  console.log(ground);
  //Engine.run(myEngine);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 0);

}
