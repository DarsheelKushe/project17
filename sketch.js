var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var mainOpponentImg1;
var mainobstaclesImg2;
var END =0;
var PLAY =1;
var gameState = PLAY;
var bellSound;
var distance=0;
var Groupobstacles;
var ENDImg;
var opponent1Img;
var opponent2Img;
var opponent3Img;
var opponent9Img;


function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("mainplayer1(1).png","mainplayer2(2).png");
  mainRacerImg2= loadAnimation("mainplayer3.png");
  mainobstaclesImg1 = loadAnimation("opponent1-1.png","opponent2-1.png");
  mainobctaclesImg2= loadAnimation("opponent3-1.png");
  opponent1Img = loadAnimation("opponent4.png","opponent5.png");
  opponent2Img = loadAnimation("opponent6.png");
  opponent3Img = loadAnimation("opponent7.png","opponent8.png");
  opponent9Img = loadAnimation("opponent9.png");
  bellSound = loadSound("sound/bell.mp3");
  ENDImg = loadImage("gameOver.png");
}

function setup(){
  createCanvas(600,300);
  Groupobstacles = createGroup();
  
  // Moving background
  path=createSprite(100,150);
  path.addImage(pathImg);
  path.velocityX = -5;



  //creating boy running
  mainCyclist  = createSprite(100,160,5,10);
  
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);


}

function draw() {
  background(0);

  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  
  
 
  if(gameState === PLAY){  
      
  bellSound.play();
    
      var select_sprite = Math.round(random(1,3))
  if (frameCount % 80 == 0) {
    if (select_sprite == 1) {
      barrier();
    }
        if (select_sprite == 2) {
          barrier2();
        }
      if (select_sprite == 3) {
       barrier3();
    }
  }
    
   
    distance = distance + Math.round(getFrameRate()/50);
    
    if (Groupobstacles.isTouching(mainCyclist)) {
      gameState = END;     
      for (i = 0; i < Groupobstacles.length; i++) {
        if( Groupobstacles.get(i).isTouching(mainCyclist)){
          if(  Groupobstacles.get(i).person == 1){
            Groupobstacles.get(i).addAnimation("SahilRunning",mainobctaclesImg2);
          }
          if(  Groupobstacles.get(i).person == 2){
            Groupobstacles.get(i).addAnimation("SahilRunning",opponent2Img);
          }
          if(  Groupobstacles.get(i).person == 3){
            Groupobstacles.get(i).addAnimation("SahilRunning",opponent9Img);
          }
        }
      }
    }

    edges= createEdgeSprites();
    mainCyclist.collide(edges);
    mainCyclist.y = World.mouseY;
    //code to reset the background
    if(path.x < 0 ){
      path.x = width/2;
    }
  }else{
    path.velocityX = 0;
    Groupobstacles.setVelocityXEach(0);
    END  = createSprite(300,160,20,20);
    END.addImage(ENDImg);
    
    mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
    
  }
}

  function barrier() {
    mainOpponent1  = createSprite(600,random(1,300),10,10);
    mainOpponent1.addAnimation("SahilRunning",mainobstaclesImg1);
    mainOpponent1.person=1;  
    mainOpponent1.velocityX = -3;
    Groupobstacles.add(mainOpponent1);
}

  function barrier2() {
    Opponent1  = createSprite(600,random(1,300),10,10);
    Opponent1.addAnimation("SahilRunning",opponent1Img);
    Opponent1.person=2; 
    Opponent1.velocityX = -3;
    Groupobstacles.add(Opponent1);
  }

function barrier3() {
  Opponent3  = createSprite(600,random(1,300),10,10);
  Opponent3.addAnimation("SahilRunning",opponent3Img);
  Opponent3.person=3; 
  Opponent3.velocityX = -3;
  Groupobstacles.add(Opponent3);
  }



