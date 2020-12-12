



function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.World;
  object=Bodies.rectangle(200,200,50,50);
  World.add(world,object);
  console.log(object);

}

function draw() {
  background("pink");  
  Engine.update(engine);
  rect(object.position.x,object.position.y,400,20);
  
}