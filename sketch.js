var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,apple;
var leafImg,leaf;
var leaf2Img,leaf2;
var invisible;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  leaf2Img = loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(400,400);
 

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,350,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  drawSprites();

  


  var rand =  Math.round(random(1,100))
  console.log(rand)


  if(frameCount % 80 == 0){
    console.log(frameCount);
  
  apple=createSprite(170,200,40,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY=3;
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  
  apple.y= Math.round(random(50,100));
 
 }


 if(frameCount % 45 == 0){
  console.log(frameCount);

leaf=createSprite(80,200,40,10);
leaf.addImage(leafImg);
leaf.scale = 0.05;
leaf.velocityY=3;
leaf.depth=rabbit.depth;
rabbit.depth=rabbit.depth+1;

leaf.y= Math.round(random(50,100));

}

if(frameCount % 70 == 0){
  console.log(frameCount);
apple=createSprite(350,200,40,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY=3;
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  
  apple.y= Math.round(random(50,100));
 
 }

 if(frameCount % 66 == 0){
  console.log(frameCount);

leaf2=createSprite(230,200,40,10);
leaf2.addImage(leaf2Img);
leaf2.scale = 0.05;
leaf2.velocityY=3;
leaf2.depth=rabbit.depth;
rabbit.depth=rabbit.depth+1;

leaf2.y= Math.round(random(50,100));

}



}