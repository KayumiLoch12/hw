var gamestate = "start"
var forestBackground;
var you ;
var susElf;
var monster;
var visibility = 255; 
var gamebutton1, gamebutton2;

function setup() {
  createCanvas(800,500);
  
  forestBackground = createSprite(400,250, 1,1);
}

function draw() {
  background(255,255,255);
  
  if (gamestate === "start"){
    if(keyDown("space")){
      gamestate = "lv."
    
    }
      
  //start screen text
  fill("lightblue");
  textSize(15)
  text("press space to go to lv. screen >:3",380,300);
  fill(162,225,221);
  textSize(50);
  text("REVIVAL OF PIXEL GAMES", 120, 230);
  }
  if (gamestate === "lv."){
    gamebutton1 = createSprite(250,250,40,40)
    gamebutton2 = createSprite(600,250,40,40)
    
    if (keyDown("s")){
      gamestate = "ScamQuest"
    }
    if (mousePressedOver(gamebutton2)){
      gamestate = "escape"
    }
   
  }
  if (gamestate === "ScamQuest"){
    gamebutton1.visible = false;
  }
  drawSprites();
}