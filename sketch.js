var jungleimg;
var openingplayerimg,openingplayer;
var adventurer,playeranimation;

function preload(){
    jungleimg=loadImage("Jungle.jpg");
    
    playeranimation=loadAnimation("runpic1.png","runpic2.png","runpic3.png","runpic4.png","runpic5.png","runpic6.png","runpic7.png","runpic8.png")
}
function setup(){
    
createCanvas(displayWidth,displayHeight);



adventurer=createSprite(500,500,10,10)
adventurer.addAnimation("playeranimation",playeranimation)
adventurer.scale=2.5

form= new Form()
form.display();

}
function draw(){
background(jungleimg)
textSize(60)
fill("blue")
text("The Education Adventure!",100,100)

drawSprites();
}