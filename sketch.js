var backdrop;
var gameState= 0;
var form,rulesImage;
var object1,object2,object3,object4, object5,groundImage;
var object6,object7,object8,object9, object10;
var object11, object12, object13, object14;
var object15, object16,object17;
var player,playerRunning,playerRunningImage,playerJumping,playerJumpingImage;
var coinImage,coin1;
var reset;
var score=0, counter=0;


function preload(){
  backdrop= loadImage("pictures/cave.PNG");
  groundImage= loadImage("pictures/ground1.PNG");
rulesImage= loadImage("pictures/rules1.png");
playerRunningImage= loadAnimation ("pictures/running1.png","pictures/running2.png","pictures/running3.png","pictures/running4.png","pictures/running5.png");
playerJumpingImage= loadAnimation("pictures/jumping1.png","pictures/jumping2.png","pictures/jumping3.png","pictures/jumping4.png","pictures/jumping5.png");
coinImage= loadAnimation("pictures/coin1.png","pictures/coin2.png","pictures/coin3.png","pictures/coin4.png","pictures/coin5.png","pictures/coin7.png")
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  form= new Form ();
 
  object1= new Ground(150,700,50,20);
  object2= new Ground(350,700,50,20);
  object3= new Ground(700,700,50,20);
  object4= new Ground(1200,700,50,20);
  object5= new Ground(1350,700,50,20);

  object6= new Ground(150,500,50,20);
  object7= new Ground(300,500,50,20);
  object8= new Ground1(800,500,50,20);
  object9= new Ground(1300,500,50,20);
  object10= new Ground(1100,500,50,50);

  object11= new Ground2(90,300,50,20);
  object12= new Ground (300,300,50,20);
  object13= new Ground1(700,300,50,20);
  object14= new Ground(1200,300,50,20);

  object15= new Ground(500,100,50,20);
  object16= new Ground(600,100,50,20);
  object17= new Ground1(1300,100,50,20);

  coin1= new Coin(50,600,10,10);


  player= createSprite(150,700,20,30);
  player.addAnimation("playerRunningImage",playerRunningImage);
  player.addAnimation("playerJumpingImage",playerJumpingImage);
  player.debug= true;
}

function draw() {
  background("white");  
  if (gameState===0){
    
    form.display();
    
    

  }

  if( gameState===1){
    image(backdrop,0,0,displayWidth,displayHeight);
image(rulesImage,displayWidth/2-300,displayHeight/2-400,700,700);
if(keyIsDown(32)){
  gameState=2;
}
  }

  if (gameState===2){
    imageMode(CENTER);

image(backdrop,displayWidth/2-30,displayHeight/2 -50,displayWidth-50,displayHeight-100);


if( keyIsDown(UP_ARROW)){
  player.velocityY= -6;

  player.changeAnimation("playerJumpingImage",playerJumpingImage);
}

player.velocityY=player.velocityY+0.5;

if(keyIsDown(RIGHT_ARROW)){
  player.velocityX=4;

}
else{
  player.velocityX=0;
}

if(keyIsDown(LEFT_ARROW)){
  player.velocityX=-4;
}



object1.display();
object2.display();
object3.display();
object4.display();
object5.display();
object6.display();
object7.display();
object8.display();
object9.display();
object10.display();
object11.display();
object12.display();
object13.display();
object14.display();
object15.display();
object16.display();
object17.display();

coin1.display();





//playerRunning.display();
drawSprites();
textSize(24);
fill("white");
text("score: "+score,500,400);

if(player.y>displayHeight){
  gameState=3;
}
  }

  

  if(gameState===3){
    background("black");
    textSize(45);
    textFont("Ariel")
    fill("white");
text("GAME OVER",displayWidth/2-100,displayHeight/2-100);
text("press R to restart", displayWidth/2-50,displayHeight/2-50)

  }


  

}