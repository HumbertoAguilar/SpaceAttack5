var prefondo
var buton
var postfondo
var retrybuton
var fondo
var shooter
var gun 
var enemy
var barrera
var shot
var gameState=0
var shutsound

var score=0
var vidas=5
function preload(){
  shooterimg=loadImage("nave_preview_rev_1.png")

  fondoimg=loadImage("67664951-ilustración-de-vector-de-fondo-espacio-y-estrella.webp")
 // shot=loadSound("sound.mp3")
//sound=loadSound("intro1.mp3")
kill=loadSound("muerte.mp3")
shot=loadSound("Record (online-voice-recorder.com) (1).mp3")
butonimg=loadImage("estilo-de-dibujos-animados-vectoriales-botones-habilitados-y-desactivados-con-texto-para-el-diseno-de-juegos-sobre-fondo-de-textura-de-nave-espacial-boton-de-interfaz-de-juego-en-la-nave-espacial-interi-.png")
gunimg=loadImage("bala_preview_rev_1.png")
shotenimg=loadImage("4e3d4629-dba0-4bd1-b19c-0c21164765a0_preview_rev_1.png")
retryimg=loadImage("png-transparent-computer-icons-reboot-symbol-restart-miscellaneous-purple-violet-thumbnail_preview_rev_3.png")
scoreimg=loadImage("8fac47a68aee5e789404ca0a4566bd3e.png")
vidasimg=loadImage("9b57879e6562e815c184fcf87963342f.png")
gameover=loadImage("juego-sobre-pantalla-digital-glitch-vector-fondo-de-error-ordenador-derrota-internet-ciberataque-amenaza-mensaje-o-juegos-azar-214592981_preview_rev_1.png")
playimg=loadImage("e4bb07f3fc91615b766a0e7dc23d9766.png")
prefondoimg=loadImage("db1ae342-b568-46c5-9803-088f982e1538.jpg")
loseSound=loadSound("loseRecord (online-voice-recorder.com) (4).mp3")
balaenemgo=loadImage("e13b7fed-77fe-4e90-aab2-dc8491337425_preview_rev_1 (1).png")
explosion=loadImage("cuadros-animacion-explosion-pixel-art_1284-53122_preview_rev_1.png")
level1img=loadImage("level1img.png")

level2img=loadImage("level2.png")
level3img=loadImage("46fa39788e3e207641e0e3506bb8ef59.png")
level4img=loadImage("f85d6e4e885275a473a50042712cd79c.png")
spaceAttackimg=loadImage("a7b63040ce001cd62f8cd83483bb6c99.png")
}
function setup(){
  createCanvas(600,600)
  
  fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=3
  shooter=createSprite(300,500,30,30)
  shooter.addImage(shooterimg)
  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11
  

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false

postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.7
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false
//sound.play();
scoreAn=createSprite(60,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.6
  vidasAn=createSprite(450,40)
  vidasAn.scale=.6
  vidasAn.addImage(vidasimg)

  prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=2.3

buton=createSprite(300,500,40,20)
buton.shapeColor="red"
buton.addImage(butonimg)
play=createSprite(300,280)
  play.addImage(playimg)
  play.scale=1


//imagenes niveles
level=createSprite(300,130)
level.addImage(level1img)
level.scale=.6
level.visible=false

level2=createSprite(300,130)
level2.addImage(level2img)
level2.scale=.6
level2.visible=false
level3=createSprite(300,130)
level3.visible=false
level3.scale=.6
level3.addImage(level3img)
level4=createSprite(300,130)
level4.visible=false
level4.scale=.6
level4.addImage(level4img)
spaceAttack=createSprite(300,150)
spaceAttack.addImage(spaceAttackimg)
spaceAttack.scale=1.27
}

function draw(){
  background("black")
      if(gameState===0){


        retrybuton.visible=false
        postfondo.visible=false
if(mousePressedOver(buton)){
  gameState+=+1
  fondo.velocityY=2
  shooter.velocityX=0

}


}
if(gameState===1){
  spaceAttack.visible=false

  if(fondo.y===400){
    fondo.y=200
  }
  retrybuton.visible=false
  postfondo.visible=false
prefondo.visible=false
buton.visible=false
play.visible=false
shooter.velocityX=0
if(score===0){
level.visible=true


}
if(score>0){
  level.visible=false
}
spawnenemy();
enemyShot();
move();
shoot();
console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play();
}
if(gunGroup.isTouching(enemy2)){

  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play();
  }

  if(gunGroup.isTouching(enemy3)){

    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play();
    }

if(shoten.isTouching(shooter)){
vidas+=-1
shoten.destroy();
loseSound.play();


}
if(shoten2.isTouching(shooter)){
  vidas+=-1
  shoten2.destroy();
  loseSound.play();
  
  
  }
  if(shoten3.isTouching(shooter)){
    vidas+=-1
    shoten3.destroy();
    loseSound.play();
    
    
    }
    if(score===5){
      gameState+=+1
      vidas=5
      level2.visible=true
    }

    if(vidas<1){
      gameState=5
    }
}


        if(gameState===2){
          if(fondo.y===400){
            fondo.y=200
          }
          if(score>5){
            level2.visible=false
          }
spawn2();
enemyshot2();
move();
shoot();
shooter.velocityX=0

console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play()
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1
      kill.play()
      }
      if(shoten.isTouching(shooter)){
        vidas+=-1
        shoten.destroy();
        loseSound.play();
        
        
        }
        if(shoten2.isTouching(shooter)){
          vidas+=-1
          shoten2.destroy();
          loseSound.play();
          
          
          }
          if(shoten3.isTouching(shooter)){
            vidas+=-1
            shoten3.destroy();
            loseSound.play();
            
            
            }
            if(shoten4.isTouching(shooter)){
              vidas+=-1
              shoten4.destroy();
              loseSound.play();
              
              
              }
    if(score===10){
      gameState+=+1
      vidas=5
      level3.visible=true
    }


    if(vidas<1){
      gameState=5
    }
        }

                  if(gameState===3){
                    if(fondo.y===400){
                      fondo.y=200
                    }
                    if(score===10){
                      level3.visible=true
                    }
                    if(score>10){
                      level3.visible=false
                    }
spawn3();
enemyshot3();
move();
shoot();
shooter.velocityX=0

console.log(score)
if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play()
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1
      kill.play()
      }
      if(gunGroup.isTouching(enemy5)){
        gun.destroy();
        enemy5.destroy();
        score+=+1
        kill.play()
        }
        if(shoten5.isTouching(shooter)){
          vidas+=-1
          shoten5.destroy();
          loseSound.play();
          
          
          }
          if(shoten6.isTouching(shooter)){
            vidas+=-1
            shoten6.destroy();
            loseSound.play();
            
            
            }
            if(shoten7.isTouching(shooter)){
              vidas+=-1
              shoten7.destroy();
              loseSound.play();
              
              
              }
              if(shoten8.isTouching(shooter)){
                vidas+=-1
                shoten8.destroy();
                loseSound.play();
                
                
                }
                if(shoten9.isTouching(shooter)){
                  vidas+=-1
                  shoten9.destroy();
                  loseSound.play();
                  
                  
                  }
  
        if(score===15){
          gameState+=+1
          vidas=5
          level4.visible=true
        }
        if(vidas<1){
          gameState=5
        }

                  }

                  if(gameState===4){
                    if(fondo.y===400){
                      fondo.y=200
                    }
                    if(score>15){
level4.visible=false

                    }
                    spawn4();
                    enemyshot4();

                    move();
                    shoot();
                    console.log(score)
                    shooter.velocityX=0

if(gunGroup.isTouching(enemy1)){
gun.destroy();
enemy1.destroy();
score+=+1
kill.play()
}
if(gunGroup.isTouching(enemy2)){
  gun.destroy();
  enemy2.destroy();
  score+=+1
  kill.play()
  }

  if(gunGroup.isTouching(enemy3)){
    gun.destroy();
    enemy3.destroy();
    score+=+1
    kill.play
    }
    if(gunGroup.isTouching(enemy4)){
      gun.destroy();
      enemy4.destroy();
      score+=+1

kill.play()      
      }
      if(gunGroup.isTouching(enemy5)){
        gun.destroy();
        enemy5.destroy();
        score+=+1
        kill.play()
        }
        if(gunGroup.isTouching(enemy6)){
          gun.destroy();
          enemy6.destroy();
          score+=+1

          kill.play()
          }

          if(shoten5.isTouching(shooter)){
            vidas+=-1
            shoten5.destroy();
            loseSound.play();
            
            
            }
            if(shoten6.isTouching(shooter)){
              vidas+=-1
              shoten6.destroy();
              loseSound.play();
              
              
              }
              if(shoten7.isTouching(shooter)){
                vidas+=-1
                shoten7.destroy();
                loseSound.play();
                
                
                }
                if(shoten8.isTouching(shooter)){
                  vidas+=-1
                  shoten8.destroy();
                  loseSound.play();
                  
                  
                  }
                  if(shoten9.isTouching(shooter)){
                    vidas+=-1
                    shoten9.destroy();
                    loseSound.play();
                    
                    
                    }
                    if(shoten10.isTouching(shooter)){
                      vidas+=-1
                      shoten10.destroy();
                      loseSound.play();
                      
                      
                      }
                      if(vidas<1){
                        gameState=5
                      }
                   
                  }

                              if(gameState===5){
retrybuton.visible=true
shooter.destroy();
enemy1.destroy();
enemy2.destroy();
enemy3.destroy();
enemy4.destroy();
enemy5.destroy();
enemy6.destroy();
level.destroy();
level2.destroy();
level3.destroy();
level4.destroy();


postfondo.visible=true
if(mousePressedOver(retrybuton)){
gameState=0
  create();
  shooter.velocityX=0
  retrybuton.visible=false
  postfondo.visible=false
  create();
  vidas=5
  score=0

}


                              }



drawSprites();
textSize(35)
fill("red")
text("   "+score,100,50)
text("   "+vidas,485,50)
}
 

 






function shoot(){
if(keyWentUp("space")){
gun=createSprite(shooter.x,shooter.y)
gun.addImage(gunimg)
gun.scale=.05

gun.velocityY=-40
shot.play();



}
gunGroup.add(gun)
gunGroup.lifetime=10




}

function spawnenemy(){
/*if(frameCount%20===0){
enemy=createSprite(random(50,400),0,50,50)
enemy.shapeColor="green"
enemy.velocityY=3


}
enemyGroup.add(enemy)*/
if(frameCount%200===0){
enemy1=createSprite(random(50,400),-50,50,50)
enemy1.addImage(shotenimg)
enemy1.velocityY=5
enemy1.scale=.3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.3

enemy2.velocityY=5

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.3

enemy3.velocityY=5


}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();
  enemy3.destroy();
}
}

function spawn2(){
  if(frameCount%150===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.27

enemy1.velocityY=5.7

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.27

enemy2.velocityY=5.7

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.27
enemy3.velocityY=5.7
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.27


enemy4.velocityY=5.7
enemy4.visible=true

}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();
  enemy3.destroy();
  enemy4.destroy();
}
}

function spawn3(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.25

enemy1.velocityY=6.5

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.velocityY=6.5
enemy2.scale=.25


enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.velocityY=6.5
enemy3.scale=.25

enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.25

enemy4.velocityY=6.5
enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.25

enemy5.velocityY=6.5
enemy5.visible=true
}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();

  enemy2.destroy();

  enemy3.destroy()
  enemy4.destroy();
  enemy5.destroy();
}


}
function spawn4(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.velocityY=7
    enemy1.scale=.22

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.22


enemy2.velocityY=7

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.22

enemy3.velocityY=7
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.velocityY=7
enemy4.scale=.22

enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.22

enemy5.velocityY=7
enemy5.visible=true

enemy6=createSprite(random(50,400),-50,50,50)
enemy6.addImage(shotenimg)
enemy6.velocityY=7
enemy6.visible=true
enemy6.scale=.22
}
if(enemy1.y===650||enemy1.y>650){
  enemy1.destroy();
  enemy2.destroy();

    enemy3.destroy()
    enemy4.destroy();

    enemy5.destroy();

    enemy6.destroy();
}
}

function move(){
  if(keyCode===LEFT_ARROW){
    shooter.x+=-9
  }
  if(keyCode===RIGHT_ARROW){
    shooter.x+=+9
  }
}

function create(){

//nuevo
fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=3
  shooter=createSprite(300,500,30,30)
  shooter.addImage(shooterimg)
  shooter.x=300

  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11
  

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false
prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=2.3

buton=createSprite(300,500,40,20)
buton.shapeColor="red"
buton.addImage(butonimg)
postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.7
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false
//sound.play();
scoreAn=createSprite(60,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.6
  vidasAn=createSprite(450,40)
  vidasAn.scale=.6
  vidasAn.addImage(vidasimg)
  play=createSprite(300,250)
  play.addImage(playimg)
 
  level=createSprite(300,130)
  level.addImage(level1img)
  level.scale=.6
  level.visible=false
  
  level2=createSprite(300,130)
  level2.addImage(level2img)
  level2.scale=.6
  level2.visible=false

level3=createSprite(300,130)
level3.visible=false
level3.scale=.6
level3.addImage(level3img)
level4=createSprite(300,130)
level4.visible=false
level4.scale=.6
level4.addImage(level4img)

}
function enemyShot(){
  if(enemy1.y<170){
  if(frameCount%80===0){

shoten=createSprite(enemy1.x,enemy1.y,5,10)
shoten.velocityY=20
shoten.addImage(balaenemgo)
shoten.scale=.6

  }
  if(frameCount%80===0){

    shoten2=createSprite(enemy2.x,enemy2.y,5,10)
    shoten2.velocityY=20
    shoten2.addImage(balaenemgo)
shoten2.scale=.6
    
      }
}
if(frameCount%80===0){

  shoten3=createSprite(enemy3.x,enemy3.y,5,10)
  shoten3.velocityY=20
  shoten3.addImage(balaenemgo)
  shoten3.scale=.6

}
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();

}
    }
    function enemyshot2(){

      if(enemy1.y<100){
        if(frameCount%40===0){
      
      shoten=createSprite(enemy1.x,enemy1.y,5,10)
      shoten.velocityY=25
      shoten.addImage(balaenemgo)
      shoten.scale=0.6
      
        }
        if(frameCount%40===0){
      
          shoten2=createSprite(enemy2.x,enemy2.y,5,10)
          shoten2.velocityY=25
          shoten2.addImage(balaenemgo)
          shoten2.scale=.6
          
            }
      }
      if(frameCount%40===0){
      
        shoten3=createSprite(enemy3.x,enemy3.y,5,10)
        shoten3.velocityY=25
        shoten3.addImage(balaenemgo)
        shoten3.scale=.6


      }
      if(frameCount%40===0){
      
        shoten4=createSprite(enemy4.x,enemy4.y,5,10)
        shoten4.velocityY=25
        shoten4.addImage(balaenemgo)
        shoten4.scale=.6
      }
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}

    }


    function enemyshot3(){

      if(enemy5.y<200){
        if(frameCount%60===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=30
      shoten5.addImage(balaenemgo)
      shoten5.scale=.6
        }
        if(frameCount%40===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=30
          shoten6.addImage(balaenemgo)
          shoten6.scale=.6
          
            }
      }
      if(frameCount%60===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=30
        shoten7.addImage(balaenemgo)
shoten7.scale=.6

      }
      if(frameCount%60===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=30
        shoten8.addImage(balaenemgo)
        shoten8.scale=.6
      }
      if(frameCount%60===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=30
        shoten9.addImage(balaenemgo)
        shoten9.scale=.6
      }
if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();

}

    }

    function enemyshot4(){
      if(enemy5.y<200){
        if(frameCount%40===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=35
      shoten5.addImage(balaenemgo)
      shoten5.scale=.6
        }
        if(frameCount%40===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=35
          shoten6.addImage(balaenemgo)
          shoten6.scale=.6
          
            }
      }
      if(frameCount%40===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=35
        shoten7.addImage(balaenemgo)
shoten7.scale=.6

      }
      if(frameCount%40===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=35
        shoten8.addImage(balaenemgo)
        shoten8.scale=.6
      }
      if(frameCount%40===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=35
        shoten9.addImage(balaenemgo)
        shoten9.scale=.6
      }
      if(frameCount%40===0){

        shoten10=createSprite(enemy6.x,enemy6.y,5,10)
        shoten10.velocityY=35
        shoten10.addImage(balaenemgo)
        shoten10.scale=.6
      }


if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();
  shoten10.destroy()

}



    }