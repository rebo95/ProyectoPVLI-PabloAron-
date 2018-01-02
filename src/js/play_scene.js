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



var playerAlive = true;

var target;
var target2;
var target_vel;

//Enemigo que avanza un poco y retrocede en diagonal
var enemy_1;
var enemy_1Vel = 1
var enemy_1Lives = 1;


var enemy_aarom;
var enemy_aaronLives = 1;

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

var music;
//sound effects
var shootSound;
var explosion;



var map;
var layer;
var level;
var colisiones;
var back;

var PlayScene = 
{
  create: function () 
  {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Map
    map = this.game.add.tilemap('level');
    map.addTilesetImage('tilesheet','tilespng');

    back = map.createLayer('fondo');//son los nombres del tiled, como se llaman las capas del tiled creado
    level = map.createLayer('nivelado');
    
    colisiones = map.createLayer('collisions');

    map.setCollisionByExclusion([0], true, colisiones);

    //map.setCollision(708, true, level);


    //Input
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    spacebarKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //sound effects

    music = this.game.add.audio('gameMusic');
   
    shootSound = this.game.add.audio('blaster');
    explosion = this.game.add.audio('explosion');
  
    
    //shootSound.onStop.add(soundStopped, this);
    //explosion.onStop.add(soundStopped, this);
    this.game.sound.setDecodedCallback([shootSound, explosion, music], start, this);


    //Player
    var playerPos = new pos(100, this.game.world.centerY);
    player = new Player(this.game, playerPos,'naves', 'front', playerVel, playerLives);
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(3,3);
    this.game.physics.arcade.enable(player);
    this.game.world.addChild(player);
    player.body.collideWorldBounds = true;

    //Enemy_1   
    var enemy_1Pos = new pos(this.game.world.width - 200, this.game.world.centerY - 100);
    enemy_1 = new Enemy_1(this.game, enemy_1Pos, 'enemy_1', enemy_1Vel, enemy_1Lives);
    enemy_1.anchor.setTo(0.5, 0.5);
    enemy_1.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_1);
    this.game.world.addChild(enemy_1);

    //enemy_aaron
    /*
    var enemy_aaronPos = new pos(this.game.world.centerX, this.game.world.centerY);
    enemy_aarom = new Enemy_Aaron(this.game, enemy_aaronPos,'ship', enemy_1Vel, enemy_1Lives);
    enemy_aarom.anchor.setTo(0.5, 0.5);
    enemy_aarom.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_aarom);
    this.game.world.addChild(enemy_aarom);*/


//para que colisione correctamente al impactar contra los elementos es necesario que 

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

     
    //el target debería heredar de sprite, de la clase movable, y no directamente de sprite.

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
    
    colisiones.resizeWorld();
    
  },


  update: function ()
  {
    

    if(target.x < this.game.world.width - this.game.camera.width)
    target.x +=1;

    colisiones.debug = true;
    
    this.game.physics.arcade.collide(player, this.colisiones);

    this.game.physics.arcade.overlap(bullets_1, enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.overlap(bullets_1, enemy_2, collisionHandler, null, this);
    this.game.physics.arcade.overlap(bullets_1, enemy_3, collisionHandler, null, this);
    this.game.physics.arcade.overlap(bullets_1, enemy_4, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_2, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_3, collisionHandler, null, this);
    this.game.physics.arcade.overlap(player, enemy_4, collisionHandler, null, this);

    


    this.game.camera.x = target.x;

    if(player.x<target.x)
    player.x = target.x;

    this.game.debug.body(player);
    this.game.debug.body(enemy_4);
  },

};   
//////////////////////////////
//Funciones Auxiliares independientes de la jerarquía
function collisionHandler2(obj1, obj2){
  obj1.kill();
}

function collisionHandler(obj1, obj2)
{
  obj1.kill();
  obj2.kill();
  //explosion.play();
  if(obj1 === player)
  playerAlive = false;
  // nos permite cohibir el disparo en caso de que se destruya nuestra 

  if(obj2 = Enemy){// para saber si un determinado elemento es de tipo alguno de los padres de la herencia se hace con el comparador "="
    explode();

    // este método nos gestiona las colisiones, aquí tendremos que lanzar los métodos pertinentas para el caso de que se produzcan estas colisiones
  }
}

function start(){
  music.play();
  shootSound.onStop.add(soundStopped, this);
  explosion.onStop.add(soundStopped, this);

}

function soundStopped(sound){

}

function explode(){
  explosion.play();
}

//CLASES Y ARQUITECTURA DE HERENCIA
function pos(x, y)
{
  this._x = x;
  this._y = y;
}


//////////////////////////////////////////7
//esta sería la manera de hacer métodos auxiliares, por ejemplo, que no 
//fuesen propios de la clase en cuestión desde la que estamos trabajando

function movimiento(objeto, velocidad){
  objeto.x +=1;
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
  Movable.apply(this, [game, position, sprite, velocity]); 
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
// añade al prototipo de player la función Movement
Player.prototype.Movement = function(vel)
{
  if (leftKey.isDown)
  {
      this.body.x -= vel;

  }
  else if (rightKey.isDown)
  {
    this.body.x += vel;

  }

  if (upKey.isDown)
  {
    this.body.y -= vel * 0.5;
      player.frameName = 'down';
  }
  else if (downKey.isDown)
  {
    this.body.y += vel * 0.5;
      player.frameName = 'up';
  }  else {
    player.frameName = 'front';
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
    if(playerAlive)
    if(this.game.time.now > shootTime)
    {
      var bullet_1 = bullets_1.getFirstExists(false);
      if(bullet_1)
      {

        bullet_1.reset(this.x + 50, this.y);
        bullet_1.body.velocity.x = 900;
        shootTime = this.game.time.now + 100;
        shootSound.play();
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
      //this.move_along_bullet(bullet_1Vel); // como heredamos de bullet podemos usar sus funciones
      movimiento(this,bullet_1Vel);
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



/*
function Enemy_Aaron(game, position, sprite, velocity, lives){
  Enemy.apply(this, [game, position, sprite, velocity, lives]); // esto es : hereda de el objeto enemigo.

}
 Enemy_Aaron.prototype = Object.create(Enemy.prototype);
 Enemy_Aaron.prototype.constructor = Enemy_Aaron;

 Enemy_Aaron.prototype.Movement = function(vel){
   this.move_along_enemy(vel);
 }

 Enemy_Aaron.prototype.update = function(){
   this.Movement(enemy_1Vel);
 }

*/
 
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

module.exports = PlayScene;