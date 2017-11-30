'use strict';
var nave;
var lasers;
var fireCounter= 0;
var fireRate = 15;
var fire = false;

var PlayScene = {
  
  create: function () {

    var fondo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'fondo');
    fondo.anchor.setTo(0.5, 0.5);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.physics.setBoundsToWorld();


    nave = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'nave');
    nave.anchor.setTo(0.5, 0.5);
    nave.scale.setTo(0.2,0.2);

    lasers = this.game.add.group();
    lasers.enableBody = true;
    lasers.physicsBodyType = Phaser.Physics.ARCADE;
    lasers.createMultiple(5, "laser");
    

  },



update: function(){
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


  

},

};

module.exports = PlayScene;
