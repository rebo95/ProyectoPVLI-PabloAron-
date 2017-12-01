'use strict';
var nave;
var lasers;
var enemy;
var enemy2;
var fireCounter= 0;
var fireRate = 10;
var fire = false;


var PlayScene = {
  
  create: function () {

    var fondo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'fondo');
    fondo.anchor.setTo(0.5, 0.5);

    nave = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'nave');
      this.game.physics.enable(nave, Phaser.Physics.ARCADE);
    nave.anchor.setTo(0.5, 0.5);
    nave.scale.setTo(0.15, 0.15);

    enemy = this.game.add.sprite(
      this.game.world.width, this.game.world.centerY, 'nave');
      this.game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(0.5, 0.5);
    enemy.scale.setTo(0.25, 0.25);


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

    
  },

update: function(){

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
  
}


};

module.exports = PlayScene;