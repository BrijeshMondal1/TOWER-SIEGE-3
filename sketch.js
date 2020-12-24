const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Variable declaration for Bodies
var hexagon;
var ground1, ground2, ground3;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15;
var block16, block17 ,block18, block19, block20;
var block21, block22, block23, block24, block25;

//Setup function
function setup() {
  //To create canvas
  createCanvas(windowWidth,windowHeight);

  //Creating small engine and world
  engine = Engine.create();
  world = engine.world;

  //first ground
  ground1 = new Ground(width/2,height - 10,width,30);

  //First level
  block1 = new Box((width -  (400 + (310/2))),350,40,40);
  block2 = new Box((width -  (400 + (310/2))) + 40 ,350,40,40);
  block3 = new Box((width -  (400 + (310/2))) + 80,350,40,40);
  block4 = new Box((width -  (400 + (310/2))) + 120,350,40,40);
  block5 = new Box((width -  (400 + (310/2))) - 40,350,40,40);
  block6 = new Box((width -  (400 + (310/2))) - 80,350,40,40);
  block7 = new Box((width -  (400 + (310/2))) - 120,350,40,40);

  //Second level
  block8 = new Box((width -  (400 + (310/2))),300,40,40);
  block9 = new Box((width -  (400 + (310/2))) + 40,300,40,40);
  block10 = new Box((width -  (400 + (310/2))) + 80,300,40,40);
  block11 = new Box((width -  (400 + (310/2))) - 40,300,40,40);
  block12 = new Box((width -  (400 + (310/2))) - 80,300,40,40);

  //Third level
  block13 = new Box((width -  (400 + (310/2))),250,40,40);
  block14 = new Box((width -  (400 + (310/2))) + 40,250,40,40);
  block15 = new Box((width -  (400 + (310/2))) - 40,250,40,40);
  
  //Fouth level
  block16 = new Box((width -  (400 + (310/2))),200,40,40);

  //Second ground
  ground2 = new Ground(width -  (400 + (310/2)),height/2 + 100, 310, 20);

  //Bottom level
  block17 = new Box((width  - (350/2)),250,40,40);
  block18 = new Box((width  - (350/2)) + 40,250,40,40);
  block19 = new Box((width  - (350/2)) + 80,250,40,40);
  block20 = new Box((width  - (350/2)) - 40,250,40,40);
  block21 = new Box((width  - (350/2)) - 80,250,40,40);

  //Middle level 
  block22 = new Box((width  - (350/2)),200,40,40);
  block23 = new Box((width  - (350/2)) + 40,200,40,40);
  block24 = new Box((width  - (350/2)) - 40,200,40,40);

  //Top level
  block25 = new Box((width  - (350/2)),150,40,40);

  //Lower Ground
  ground3 = new Ground(width  - (350/2), height/2, 225, 20);

  //hexagon
  hexagon = new polygon(200,300,35);

  //constraint
  sling = new SlingShot(hexagon.body, 180, 290)
}

function draw() {

  //To assign brown background color
  background("grey"); 

  Engine.update(engine);
  
  //Displaying ground
  ground1.display("darkgrey");

  //Displaying first level
  block1.display("red");
  block2.display("red");
  block3.display("red");
  block4.display("red");
  block5.display("red");
  block6.display("red");
  block7.display("red");

  //Displaying second level
  block8.display("blue");
  block9.display("blue");
  block10.display("blue");
  block11.display("blue");
  block12.display("blue");

  //Displaying third level
  block13.display("green");
  block14.display("green");
  block15.display("green");

  //Displaying fourth level
  block16.display("cyan");
  
  //displaying second ground
  ground2.display("orange");

  //Displaying bottom level
  block17.display("red");
  block18.display("red");
  block19.display("red");
  block20.display("red");
  block21.display("red");

  //Display middle level
  block22.display("blue");
  block23.display("blue");
  block24.display("blue");
  
  //Displying upper level
  block25.display("cyan");
   
  //displaying constraint line
   sling.display();

  //Displaying hexagon
  hexagon.display();
  
  //displaying ground 3
  ground3.display("orange");
  
}
//Mouse drag function to adjust the aim of hexagon
function mouseDragged(){
  
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});

}

//creating function mouseReleased
function mouseReleased(){
   
    sling.fly();

    setTimeout(function(){

      Matter.Body.setPosition(hexagon.body,{x:100,y:200});
      sling.attacher(hexagon.body);

    }, 2000);

}