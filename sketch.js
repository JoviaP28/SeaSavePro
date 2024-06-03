var mermaid, mermaidImage
var octopus, octopusImage
var treasure, treasureImage
var background, backgroundImage
var gem, gemImage
var coin, coinImage
var fish1, fish2, fish3, fish4
var fish1img, fish2img, fish3img, fish4img
function preload(){
  mermaidImage=loadAnimation("m1.png","m2.png","m3.png","m4.png")
  octopusImage=loadAnimation("octo1.png","octo2.png","octo3.png","octo4.png","octo5.png")
  treasureImage=loadImage("treasure.png")
  backgroundImage=loadImage("Background.jpg")
  gemImage=loadImage("Gem.png")
  coinImage=loadImage("coin.png")
  fish1img=loadImage("Fish1.png")
  fish2img=loadImage("Fish2.png")
  fish3img=loadImage("Fish3.png")
  fish4img=loadImage("Fish4.png")
}
function setup() {
  createCanvas(650,600);
  bg=createSprite(300,300,1000,600)
bg.addImage("background",backgroundImage)
bg.velocityX=-1
bg.scale=2
 mermaid=createSprite(700,500)
 mermaid.addAnimation("mermaid",mermaidImage)
 mermaid.scale=0.5
 octopus=createSprite(100,500)
 octopus.addAnimation("octopus",octopusImage)
 octopus.scale=0.9
octopus.velocityX=3
treasure=createSprite(500,550)
treasure.addImage("treasure",treasureImage)
treasure.scale=0.5
fish1=createSprite(600,300)
fish1.addImage("fish1",fish1img)

}

function draw() {
  background("white");
  if(bg.x<0){
    bg.x=bg.width/2
  }
  if(keyDown("up")){
    mermaid.y-=5
  }
  if(keyDown("down")){
    mermaid.y+=5
  }
  if(keyDown("left")){
    mermaid.x-=5
  }
  if(keyDown("right")){
    mermaid.x+=5
  }
camera.x=mermaid.x
  createGems()

  drawSprites();
}
function createGems(){
  if(frameCount%100==0){
  gem=createSprite(500,100,30,30)
  gem.addImage(gemImage)
  gem.y=Math.round(random(40,500))
  gem.x=Math.round(random(0,500))
gem.velocityX=-1
gem.scale=0.5
  }
}