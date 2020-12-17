const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1;
var dustbin1;





   

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    paper1= new Paper(200,397,19);
    dustbin1 = new Dustbin(600,289);
}

function draw(){
    background("white");
    Engine.update(engine);
    
    ground.display();
    paper1.display();
    dustbin1.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45});

    }
}