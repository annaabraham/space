
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,sun,bg;


function preload(){
bgimg=loadImage("space.jpg");
sunimage=loadImage("sun.jpg");
mercuryimage=loadImage("mercury.png");
venusimage=loadImage("venus.jpg");
earthimage=loadImage("earth1.jpg");
marsimage=loadImage("mars.jpg");
jupiterimage=loadImage("jupiter.jpg");
saturnimage=loadImage("saturn.png");
uranusimage=loadImage("uranus.png");
neptuneimage=loadImage("neptune.png");
}

function setup() {
  createCanvas(600,500);
 bg=createSprite(300,250,600,600);
 bg.addImage(bgimg);
 bg.scale=1.0;
 sun=createSprite(300,250,600,600);
 sun.addImage(sunimage);
 sun.scale=0.4;
 mercury=createSprite(400,230,10,10);
 mercury.addImage(mercuryimage);
 mercury.scale=0.1;
 venus=createSprite(180,290,10,10);
 venus.addImage(venusimage);
 venus.scale=0.2;
 earth=createSprite(440,290,10,10);
 earth.addImage(earthimage);
 earth.scale=0.17;
 mars=createSprite(120,330,10,10);
 mars.addImage(marsimage);
 mars.scale=0.1;
 jupiter=createSprite(500,190,10,10);
 jupiter.addImage(jupiterimage);
 jupiter.scale=0.18;
 saturn=createSprite(70,210,10,10);
 saturn.addImage(saturnimage);
 saturn.scale=0.5;
 uranus=createSprite(560,340,10,10);
 uranus.addImage(uranusimage);
 uranus.scale=0.5;
 neptune=createSprite(30,420,10,10);
 neptune.addImage(neptuneimage); 
 neptune.scale=0.5;
}

function draw() {
 background(0,0,0);
 if(World.frameCount%60===0){
  sun.scale=sun.scale+0.07;
}
if(sun.collide(mercury)){
  mercury.destroy();
}
if(sun.collide(venus)){
 venus.destroy();
}
if(sun.collide(earth)){
earth.destroy();
}
if(sun.collide(mars)){
mars.destroy();
}
if(sun.collide(jupiter)){
jupiter.destroy();
}
if(sun.collide(saturn)){
 saturn.destroy();
}
if(sun.collide(uranus)){
uranus.destroy();
}

if(sun.collide(neptune)){
 neptune.destroy();
}
 drawSprites();
}