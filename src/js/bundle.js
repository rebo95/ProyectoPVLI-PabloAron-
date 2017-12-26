(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');
var IMAGE_PATH = 'images/';

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {

    this.game.load.baseURL = 'https://rebo95.github.io/ProyectoPVLI-PabloAron-/src/';
    this.game.load.crossOrigin = 'anonymous';
    
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('ship', IMAGE_PATH + 'futurama.png');
    
    //Cargas de los enemigos
    this.game.load.image('enemy_1', IMAGE_PATH + 'meteorite.png');
    this.game.load.image('enemy_2', IMAGE_PATH + 'meteorite.png');
    this.game.load.image('enemy_3', IMAGE_PATH + 'meteorite.png');
    this.game.load.image('enemy_4', IMAGE_PATH + 'meteorite.png');
    
    //Cargas de las balas
    this.game.load.image('bullet_1', IMAGE_PATH + 'bullet1.png');


    //cargas necesarias para el tiled y el mapa
    this.load.tilemap('level', './images/object.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tilespng', 'images/tiles.png');
  },

  create: function () {
    this.game.state.start('play');
  }
};


window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};

},{"./play_scene.js":2}],2:[function(require,module,exports){
'use strict';

var upKey;
var downKey;
var leftKey;
var rightKey;
var spacebarKey;

//Player
var player;
var playerVel = 10;
var playerLives = 3;

var target;

//Enemigo que avanza un poco y retrocede en diagonal
var enemy_1;
var enemy_1Vel = 1
var enemy_1Lives = 1;

//Enemigo que avanza en línea recta y va hacia el player
var enemy_2;
var enemy_2Vel = 1
var enemy_2Lives = 1;

//Enemigo que sube y baja mientras avanza
var enemy_3;
var enemy_3Vel = 1
var enemy_3Lives = 1;

//Enemigo que alcanza la y del player y avanza en ese sentido
var enemy_4;
var enemy_4Vel = 1
var enemy_4Lives = 1;

//Balas
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
   
    //Input
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    spacebarKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //Player
    var playerPos = new pos(100, this.game.world.centerY);
    player = new Player(this.game, playerPos, 'ship', playerVel, playerLives);
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.25, 0.25);
    this.game.physics.arcade.enable(player);
    this.game.world.addChild(player);
    player.body.collideWorldBounds= true;

    //Enemy_1   
    var enemy_1Pos = new pos(this.game.world.width - 200, this.game.world.centerY - 100);
    enemy_1 = new Enemy_1(this.game, enemy_1Pos, 'enemy_1', enemy_1Vel, enemy_1Lives);
    enemy_1.anchor.setTo(0.5, 0.5);
    enemy_1.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_1);
    this.game.world.addChild(enemy_1);

    //Enemy_2 
    var enemy_2Pos = new pos(this.game.world.width, this.game.world.centerY);
    enemy_2 = new Enemy_2(this.game, enemy_2Pos, 'enemy_2', enemy_2Vel, enemy_2Lives);
    enemy_2.anchor.setTo(0.5, 0.5);
    enemy_2.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_2);
    this.game.world.addChild(enemy_2);

    //Enemy_3 
    var enemy_3Pos = new pos(this.game.world.width, this.game.world.centerY - 60);
    enemy_3 = new Enemy_3(this.game, enemy_3Pos, 'enemy_3', enemy_3Vel, enemy_3Lives, 80);
    enemy_3.anchor.setTo(0.5, 0.5);
    enemy_3.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_3);
    this.game.world.addChild(enemy_3);

     //Enemy_4 
     var enemy_4Pos = new pos(this.game.world.width, this.game.world.centerY + 60);
     enemy_4 = new Enemy_4(this.game, enemy_4Pos, 'enemy_4', enemy_4Vel, enemy_4Lives);
     enemy_4.anchor.setTo(0.5, 0.5);
     enemy_4.scale.setTo(0.5, 0.5);
     this.game.physics.arcade.enable(enemy_4);
     this.game.world.addChild(enemy_4);

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
    this.game.physics.arcade.overlap(bullets_1, enemy_2, collisionHandler, null, this);
    this.game.physics.arcade.overlap(bullets_1, enemy_3, collisionHandler, null, this);
    this.game.physics.arcade.overlap(bullets_1, enemy_4, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_2, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_3, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_4, collisionHandler, null, this);
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
  if (leftKey.isDown)
  {
      this.x -= vel;
  }
  else if (rightKey.isDown)
  {
      this.x += vel;
  }
  if (upKey.isDown)
  {
      this.y -= vel;
  }
  else if (downKey.isDown)
  {
      this.y += vel;
  }
  if(spacebarKey.isDown)
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

//Clase enemy 2
function Enemy_2(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy_2.prototype = Object.create(Enemy.prototype);
Enemy_2.prototype.constructor = Enemy_2;

Enemy_2.prototype.Movement = function(vel)
{
  this.move_along_enemy(vel);

  if(this.y > player.y)
  {
    this.y--;
  }
  else if(this.y < player.y)
  {
    this.y++;
  }
  
}

Enemy_2.prototype.update = function()
{
  this.Movement(enemy_2Vel);
}

//Clase enemy 3
function Enemy_3(game, position, sprite, velocity, lives, max_y)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
  this._max_y = max_y;
  this._iniY = position._y;
}

Enemy_3.prototype = Object.create(Enemy.prototype);
Enemy_3.prototype.constructor = Enemy_3;

var up = false;

Enemy_3.prototype.Movement = function(vel)
{
  this.move_along_enemy(vel);
  
  if(!up)
  {  
    this.y++;
    if(this.y === (this._iniY + this._max_y))
    {
      up = true;
    }
  }
  else
  {
    this.y--;
    if(this.y === (this._iniY - this._max_y))
    {
      up = false;
    }
  }
    
}

Enemy_3.prototype.update = function()
{
  console.log(this._iniY);
  console.log(this._max_y)
  console.log(this._iniY + this._max_y);
  console.log(this.y);
  this.Movement(enemy_3Vel);
}

//Clase enemy 4
function Enemy_4(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy_4.prototype = Object.create(Enemy.prototype);
Enemy_4.prototype.constructor = Enemy_4;

var found = false;
var localized = false;
var upMovement = false;
var downMovement = false;
Enemy_4.prototype.Movement = function(vel)
{

  if(!localized)
  {
    if(this.y > player.y)
    {
      upMovement = true;
    }
    else
    {
      downMovement = true;
    }

    localized = true;
  }

  if(upMovement && !found)
  {
    this.y--;
  }
  else if(downMovement && !found)
  {
    this.y++;
  }

  if(this.y === player.y)
  {
    found = true;
  }

  if(found)
  {
    this.move_along_enemy(vel);
  }
  
}

Enemy_4.prototype.update = function()
{
  this.Movement(enemy_4Vel);
}



},{}]},{},[1]);
