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

//creating score & chances
var score = 0;
var chances = 5;

function preload(){

  blackImg = loadImage("black.png");
  starImg = loadImage("star.png");

}
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
  sling = new SlingShot(hexagon.body, 180, 290);

}

function draw() {

  //To assign brown background color
  changeBackgroudImg();

  if(hour >= 06 && hour <= 17){

    background("orange")

  }else{

     background("grey");

  }

  textSize(20);
  textFont("comic sans ms");
  textStyle("bold");
  fill("black");
  text("Score : " + score, width - 150, 50);

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
  
  //updating first level
  block1.update();
  block2.update();
  block3.update();
  block4.update();
  block5.update();
  block6.update();
  block7.update();

  //Displaying second level
  block8.display("blue");
  block9.display("blue");
  block10.display("blue");
  block11.display("blue");
  block12.display("blue");

  //updating second level
  block8.update();
  block9.update();
  block10.update();
  block11.update();
  block12.update();

  //Displaying third level
  block13.display("green");
  block14.display("green");
  block15.display("green");

  //updating third level
  block13.update();
  block14.update();
  block15.update();

  //Displaying fourth level
  block16.display("cyan");

  //updating fourth level
  block16.update();
  
  //displaying second ground
  ground2.display("orangered");

  //Displaying bottom level
  block17.display("red");
  block18.display("red");
  block19.display("red");
  block20.display("red");
  block21.display("red");
  
  //updating bottom level
  block17.update();
  block18.update();
  block19.update();
  block20.update();
  block21.update();

  //Display middle level
  block22.display("blue");
  block23.display("blue");
  block24.display("blue");

  //updating middle level
  block22.update();
  block23.update();
  block24.update();
  
  //Displying upper level
  block25.display("cyan");

  //Displying upper level
  block25.update();
   
  //displaying constraint line
   sling.display();

  //Displaying hexagon
  hexagon.display();
  
  //displaying ground 3
  ground3.display("orangered");
  
  gameOver();

}
//Mouse drag function to adjust the aim of hexagon
function mouseDragged(){
  
  if(score < 5000){
    
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});

  }
}

//creating function mouseReleased
function mouseReleased(){
  
     sling.fly();  

    if(chances != 1){
      setTimeout(function(){

        chances = chances - 1;
        Matter.Body.setPosition(hexagon.body,{x:100,y:200});
        sling.attach(hexagon.body);

      }, 2000);
    
    }else if(chances === 1){

      setTimeout(function(){

          chances = 0;


      }, 7000);

    }

}

async function changeBackgroudImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  hour = responseJSON.datetime.slice(11, 13);

}

function gameOver(){

  if(chances === 0 || score === 5000){

    image(blackImg , 0, 0, width * 2.5, height * 2.5);
    console.log(chances);

  }

  if(score < 4801 && chances === 0){

     textSize(50);
     textStyle("bold");
     fill("white");
     text("Try again", width/2 - 50, height/2);

  }else if(score === 5000){

    textSize(50);
    textStyle("bold");
    fill("white");
    text("You win", width/2 - 50, height/2);

    if(chances >= 3){

      for(var i = width/4 + 50; i < width/2 + width/4; i = i + 150){

        image(starImg, i, height/2 - 200, 100, 100);

      }
    
      }else if(chances === 2 || chances === 1){

        for(var i = width/4 + 200; i < (width/2 + width/4) - 50; i = i + 150){

          image(starImg, i, height/2 - 200, 100, 100);
  
        }

      }else if(chances >= 0){

        image(starImg, width/2 + 50, height/2 - 200, 100, 100);

      }


  }

}