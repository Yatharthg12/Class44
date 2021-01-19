var aircraft;
var aircraftImg;
var enemy1;
var backgroundImg;
var enemyGroup,weaponGroup;



function preload(){
  aircraftImg = loadAnimation("aircraft1.png","aircraft2.png","aircraft3.png","aircraft4.png")
  backgroundImg = loadImage("Background Img3.PNG");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  /*background = createSprite(200,200);
  background.addImage(backgroundImg);*/
  
  aircraft = createSprite(50,350);
  aircraft.addAnimation("aircraftimg",aircraftImg);
  enemyGroup = new Group();
  weaponGroup = new Group();
}

function draw() {
  background(backgroundImg);
  /*background.velocityX = -3;
  if(background.x<0){
    background.x = background.width/2;
  }*/

if(keyDown(UP_ARROW)){
  aircraft.y -= 5;
}
if(keyDown(DOWN_ARROW)){
  aircraft.y += 5;
}
if(keyDown(LEFT_ARROW)){
  aircraft.x -= 5;
}
if(keyDown(RIGHT_ARROW)){
  aircraft.x += 5;
}
edges = createEdgeSprites();
aircraft.bounceOff(edges);

if(keyDown("space")){
spawnWeapon();
}
  enemy();
  
  drawSprites();
  
}

function enemy(){
  if(frameCount %30 === 0){
    
  
  enemy1 = createSprite(Math.round(random(0,width)),Math.round(random(0,height)),70,70);
  enemy1.velocityX = -3;
  for(var i = 0;i<enemyGroup.length;i++){
    if(enemyGroup.get(i).isTouching(weaponGroup)){
      enemyGroup.get(i).destroy();
    }
  }
  

  enemyGroup.add(enemy1);
  
}}

function spawnWeapon(){
  if(frameCount %10 === 0){
    weapon = createSprite(aircraft.x+20,aircraft.y,100,100);
    weapon.velocityX = 5;
    weapon.shapeColor = "red";
    weaponGroup.add(weapon)
    //console.log(weapon.depth);
    //console.log(enemy1.depth);
    //enemy.depth = weapon.depth
    //enemy.depth += 1;
  }
}