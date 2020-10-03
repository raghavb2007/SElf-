function setup() {
  createCanvas(800,400);
  obstaclesGroup = new Group();
edge=createEdgeSprites()
 player= createSprite(50, 200, 30, 30);
 ground = createSprite(400,390,800,10);
 ground2 = createSprite(400,10,800,10);
 ground.velocityX=10
 ground2.velocityX=10
 ground.x=ground.width/2
 ground2.x=ground.width/2
 x=255
 player.shapeColor="grey"
  

}

function draw() {
  //background(x,x,x);
  //changing Background Color
  if (frameCount%50===0){
    x=x-10
    background (x)
  }
  if (ground.x>800){
    ground.x=ground.width/2
  }  
  if (ground2.x>800){
    ground2.x=ground.width/2
  }  
  //direction of player
  if (keyDown("right")){
   player.velocityX=4

  }
  if (keyDown("left")){
    player.velocityX=-4
 
   }
  if (keyDown("up")){
    player.velocityY=-4
 
   }
   if (keyDown("down")){
    player.velocityY=4
 
   }
   //not allowing player to leave the screen
  player.bounceOff(edge[0])
 player.bounceOff(edge[1])
  player.bounceOff(edge[2])
 player.bounceOff(edge[3])


  //console.log(ground.x)
  background(x)  
  spawnObstacles()
  
  drawSprites();
}

function spawnObstacles() {
  //spawing NPC's
  if(frameCount % 60 === 0) {
    var npc = createSprite(random(400,800),random(0, 400),15,15);
    //obstacle.debug = true;
    npc.velocityX = -2
    npc.velocityY= 2
       //assign scale and lifetime to the obstacle           
       npc.scale = 0.5;
       npc.lifetime = 900;
       //add each obstacle to the group
       obstaclesGroup.add(npc);
       npc.shapeColor="black"
       obstaclesGroup.bounceOff(edge[0])
       obstaclesGroup.bounceOff(edge[1])
       obstaclesGroup.bounceOff(edge[2])
      obstaclesGroup.bounceOff(edge[3])
   
     }
   
  }