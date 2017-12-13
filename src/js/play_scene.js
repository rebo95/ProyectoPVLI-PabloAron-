'use strict';
var nave;
var target;
var lasers;
var enemy;
var enemy2;
var fireCounter= 0;
var fireRate = 10;
var fire = false;
var map;
var layer;
var mapa;
var capa;

var nivelado;
var fondo;
var objetos;
var pos;

var PlayScene = {
  
  create: function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    map = this.game.add.tilemap('level');
    map.addTilesetImage('tilesheet','tilespng');

    fondo = map.createLayer('fondo');
    nivelado = map.createLayer('nivelado');
    objetos = map.createLayer('objetos');
    
    map.setCollisionBetween(1,500, true, 'nivelado');
   

    /*map = this.game.add.tilemap('tilemap',16,16);
    map.addTilesetImage('tilespng');
    map.setCollision(813);
    layer = map.createLayer(0);*/
    

    nave = this.game.add.sprite(
    this.game.world.centerX, this.game.world.centerY, 'nave');
    this.game.physics.enable(nave,Phaser.Physics.ARCADE);
    nave.anchor.setTo(0.5, 0.5);
    nave.scale.setTo(0.15, 0.15);
    nave.body.collideWorldBounds= true;


    enemy = this.game.add.sprite(
      this.game.world.width, this.game.world.centerY, 'nave');
      this.game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(0.5, 0.5);
    enemy.scale.setTo(0.25, 0.25);

    target= this.game.add.sprite(
      this.game.world.width, this.game.world.centerY);
    target.anchor.setTo(0.5, 0.5);
    target.scale.setTo(0.25, 0.25);
    target.x = 0;

    enemy2 = this.game.add.sprite(
      this.game.world.width, this.game.world.height - 150 , 'nave');
      this.game.physics.enable(enemy2, Phaser.Physics.ARCADE);
    enemy2.anchor.setTo(0.5, 0.5);
    enemy2.scale.setTo(0.25, 0.25);


    lasers = this.game.add.group();
    lasers.enableBody = true;
    lasers.physicsBodyType = Phaser.Physics.ARCADE;
    lasers.createMultiple(5, "laser");
    lasers.setAll('checkWorldBounds', true);
    lasers.setAll('outOfBoundsKill', true);

    nivelado.resizeWorld();


  },

update: function(){

 this.game.physics.arcade.collide(nave, layer);
 
if(target.x < this.game.world.width - this.game.camera.width)
  target.x +=1;

  enemy.x -= 1;

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
      nave.x -= 4;
    
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
      nave.x += 4;
      
  }

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
  {
      nave.y -= 4;
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
  {
      nave.y += 4;
  }

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
if(lasers.countLiving()<5)
  if(!fire){
        var laser = lasers.getFirstDead();
        //var laser = lasers.create(nave.x,nave.y, 'laser');
        laser.reset(nave.x, nave.y);
        laser.scale.setTo(0.1,0.1);
        laser.body.velocity.x = 500;

        fire = true ;
  }
  }
  if (fire){
    fireCounter++;
    if(fireCounter>fireRate){
      fire = false;
      fireCounter = 0;
    }
  }       


this.game.physics.arcade.collide(lasers, enemy, function(){enemy.kill();});
this.game.physics.arcade.collide(nave, enemy, function(){nave.kill();});
this.game.physics.arcade.collide(lasers, enemy2, function(){enemy2.kill();});
this.game.physics.arcade.collide(nave, nivelado);

this.game.camera.y = 100;
this.game.camera.x = target.x;
  
if(nave.x<target.x)
  nave.x = target.x;

}


};

module.exports = PlayScene;