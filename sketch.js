const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg , bg1 , bg2;
var child1, childImg;
var snow = [];

function preload() {
   bg = loadImage("snow1.jpg");
   bg1 = loadImage("snow2.jpg");
   bg2 = loadImage("snow3.jpg");
  //  childImg = loadImage("d.png");
  }

function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(1500,790,3000,20);
}

function draw() {

  background(bg1); 
  
   Engine.update(engine);
 
   ground.display();
 
  if(frameCount %60 === 0) {
    snow.push(new Snow(random(width/2-30, width/2+30),10,10));
  }

   for(var h = 0; h < snow.length; h++) {
    snow[h].display();
  }
}