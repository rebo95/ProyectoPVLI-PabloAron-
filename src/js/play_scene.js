'use strict';

var player;
var playerVel = 10;
var playerLives = 3;

var target;

var enemy_1;
var enemy_1Vel = 1
var enemy_1Lives = 1;

var bullets_1;
var bullets_1Vel = 3;
var bullets_1Lives = 1;

var shootTime = 0;

var map;
var layer;
var level;
var back;

var PlayScene = 
{
  create: function () 
  {

    //Map
    map = this.game.add.tilemap('level');
    map.addTilesetImage('tilesheet','tilespng');
    

    back = map.createLayer('fondo');//son los nombres del tiled, como se llaman las capas del tiled creado
    level = map.createLayer('nivelado');
    map.setCollisionBetween(1,1000, true, 'nivelado');
   


    //Player
    var playerPos = new pos(100, this.game.world.centerY);
    player = new Player(this.game, playerPos, 'ship', playerVel, playerLives);
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.25, 0.25);
    this.game.physics.arcade.enable(player);
    this.game.world.addChild(player);
    player.body.collideWorldBounds= true;

    //Enemy_1   
    var enemy_1Pos = new pos(this.game.world.width-200, this.game.world.centerY - 100);
    enemy_1 = new Enemy_1(this.game, enemy_1Pos, 'enemy_1', enemy_1Vel, enemy_1Lives);
    enemy_1.anchor.setTo(0.5, 0.5);
    enemy_1.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_1);
    this.game.world.addChild(enemy_1);

    target= this.game.add.sprite(
    this.game.world.width, this.game.world.centerY);
    target.anchor.setTo(0.5, 0.5);
    target.scale.setTo(0.25, 0.25);
    target.x = 0;


    bullets_1 = this.game.add.group();
    bullets_1.enableBody = true;
    bullets_1.physicsBodyType = Phaser.Physics.ARCADE;
    
    bullets_1.setAll('anchor.x', 0.5);
    bullets_1.setAll('anchor.y', 0.5);
    bullets_1.setAll('scale.x', 2.5);
    bullets_1.setAll('scale.y', 2.5);
    
    bullets_1.createMultiple(15, 'bullet_1');
    bullets_1.setAll('outOfBoundsKill', true);  //Se destruyen las balas cuando desaparecen del mapa
    bullets_1.setAll('checkWorldBounds', true); //Sólo puedo disparar cuando estoy dentro de los límites del mapa
    
    level.resizeWorld();
    
  },

  update: function ()
  {
    

    if(target.x < this.game.world.width - this.game.camera.width)
    target.x +=1;

    
    this.game.physics.arcade.overlap(bullets_1, enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.collide(player, level);

    this.game.camera.x = target.x;

    if(player.x<target.x)
    player.x = target.x;
  },

};   

function collisionHandler(obj1, obj2)
{
  obj1.kill();
  obj2.kill();
}

module.exports = PlayScene;

//CLASES Y ARQUITECTURA DE HERENCIA
function pos(x, y)
{
  this._x = x;
  this._y = y;
}

//Objetos móviles
function Movable(game, position, sprite, velocity)
{
  Phaser.Sprite.apply(this, [game, position._x, position._y, sprite]);
  this._velocity = velocity;
}

Movable.prototype = Object.create(Phaser.Sprite.prototype);
Movable.prototype.constructor = Movable;

//Objetos que se destruyen
function Destroyable(game, position, sprite,velocity, lives)
{
  Movable.apply(this, [game, position, sprite, velocity,]);
  this._lives = lives;
}

Destroyable.prototype = Object.create(Movable.prototype);
Destroyable.prototype.constructor = Destroyable;

//Player
function Player(game, position, sprite, velocity, lives)
{
  Destroyable.apply(this, [game, position, sprite, velocity, lives]);
}

Player.prototype = Object.create(Destroyable.prototype);
Player.prototype.constructor = Player;

//Métodos de la clase Player
//Permite al player moverse con los cursores
Player.prototype.Movement = function(vel)
{
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
      this.x -= vel;
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
      this.x += vel;
  }
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
  {
      this.y -= vel;
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
  {
      this.y += vel;
  }
  if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
  {
    /*
    var bullet_1Pos = new pos(this.x + 115, this.y);
    bullet_1 = new Bullet(this.game, bullet_1Pos, 'bullet_1', bullet_1Vel, bullet_1Lives);
    bullet_1.anchor.setTo(0.5, 0.5);
    bullet_1.scale.setTo(2.5, 2.5);
    this.game.world.addChild(bullet_1);
    */
    if(this.game.time.now > shootTime)
    {
      var bullet_1 = bullets_1.getFirstExists(false);
      if(bullet_1)
      {
        bullet_1.reset(this.x + 50, this.y);
        bullet_1.body.velocity.x = 900;
        shootTime = this.game.time.now + 100;
      }
    }
  }

}

Player.prototype.update = function()
{
  this.Movement(playerVel);
}

//Balas
function Bullet(game, position, sprite, velocity, lives)
{
  Destroyable.apply(this, [game, position, sprite, velocity, lives]);
}

Bullet.prototype = Object.create(Destroyable.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.move_along_bullet = function(vel)
{
  this.x += vel;
}

function Bullet_1(game, position, sprite, velocity, lives)
{
  Bullet.apply(this, [game, position, sprite, velocity, lives]);
}

Bullet_1.prototype = Object.create(Bullet.prototype);
Bullet_1.prototype.constructor = Bullet_1;

Bullet_1.prototype.Movement = function(vel)
{
  this.move_along_bullet(bullet_1Vel);
}

Bullet_1.prototype.update = function()
{
  this.Movement(bullet_1Vel);
}

//Enemigos
function Enemy(game, position, sprite, velocity, lives)
{
  Destroyable.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy.prototype = Object.create(Destroyable.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move_along_enemy = function(vel)
{
  this.x -= vel;
}

function Enemy_1(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy_1.prototype = Object.create(Enemy.prototype);
Enemy_1.prototype.constructor = Enemy_1;

var Enemy_1Mov = false;

Enemy_1.prototype.Movement = function(vel)
{
  if(this.x > this.game.world.centerX && !Enemy_1Mov)
  {
    this.move_along_enemy(vel);
    
  }
  else
  {
    this.x += vel;
    if(this.x < this.game.world.centerX + 100)
    {
      this.y += vel;
    }
    
    Enemy_1Mov = true;
  }
}

Enemy_1.prototype.update = function()
{
  this.Movement(enemy_1Vel);
}