const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHieght=300;



var gameState = "onSling";

function preload() {
   

}

function setup(){
    var canvas = createCanvas(1000,600);
   
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
    
    

}

function draw(){
    background("blue");

for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

    textSize(20);
    fill("white");
    
    Engine.update(engine);
    divsion.display();
    ground.display();
    particles.display();
    plinkos.display();

    for (var j = 0; j < particles.lenghth; j++){

        particles[j].display();
      }
      for(var k = 0; k < divisions.length; k++){
        divisions[k].display();
      }
    

}

