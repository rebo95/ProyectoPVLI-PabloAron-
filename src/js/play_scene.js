'use strict';

var akey;
var nuestroJuego;
var nuestraCamara;
var creado = false;

var upKey;
var downKey;
var leftKey;
var rightKey;
var spacebarKey;


var arrayPosicionesEnemigos_1 = [];
var arrayPosicionesEnemigos_2 = [];
var arrayPosicionesEnemigos_3 = [];
var arrayPosicionesEnemigos_4 = [];

var arrayX_Enemy_1 = [];
var arrayX_Enemy_2 = [];
var arrayX_Enemy_3 = [];
var arrayX_Enemy_4 = [];

var enemy_1_TiledToPhaser; 
var enemy_2_TiledToPhaser; 
var enemy_3_TiledToPhaser; 
var enemy_4_TiledToPhaser; 


var naveEspacial;
var secondPlayerAlive = false;
var player2;

var enemyArray = [];
var playerArray = [];


//Player
var player;
var playerVel = 10;
var playerLives = 3;
var shield = false;
var shield_resistance = 6;

var weapons = [];
var currentWeapon = 0;

//PowerUps
var upgrades = [];
var currentUpgrade = 0;
var powerup;

var playerAlive = true;

var target;
var target2;
var target_vel = 1;

//Enemigo que avanza un poco y retrocede en diagonal
var enemy_1;
var enemy_1Vel = 2;
var enemy_1Lives = 1;


var enemy_aarom;
var enemy_aaronLives = 1;

//Enemigo que avanza en línea recta y va hacia el player
var enemy_2;
var enemy_2Vel = 3;
var enemy_2Lives = 1;

//Enemigo que sube y baja mientras avanza
var enemy_3;
var enemy_3Vel = 1;
var enemy_3Lives = 1;

//Enemigo que alcanza la y del player y avanza en ese sentido
var enemy_4;
var enemy_4Vel = 1;
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
    nuestroJuego = this.game;
    nuestraCamara = this.game.camera;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Map
    map = this.game.add.tilemap('level');
    map.addTilesetImage('tilesheet','tilespng');

    back = map.createLayer('fondo');//son los nombres del tiled, como se llaman las capas del tiled creado
    level = map.createLayer('nivelado');
    
    colisiones = map.createLayer('collisions');

    map.setCollisionByExclusion([0], true, colisiones);

    //map.setCollision(708, true, level);

    akey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);

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


   /* //Player
    var playerPos = new pos(100, this.game.world.centerY);
    player = new Player(this.game, playerPos,'naves', 'front', playerVel, playerLives);
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(3,3);
    this.game.physics.arcade.enable(player);
    this.game.world.addChild(player);
    player.body.collideWorldBounds = true;
    */
 

    weapons.push(new Weapon.SingleBullet(this.game));
    weapons.push(new Weapon.UpFront(this.game));
    weapons.push(new Weapon.FrontDown(this.game));
    weapons.push(new Weapon.ThreeWay(this.game));
    weapons.push(new Weapon.Laser(this.game));
    currentWeapon = 0;
    /*
    for(var i = 1; i < weapons.length; i++)
    {
      weapons[i].visible = false;
    }
    */

    upgrades.push("Empty");  //Vacío
    upgrades.push("Speed");  //Para más velocidad
    upgrades.push("Double"); //Double
    upgrades.push("Misile"); //Misile
    upgrades.push("Laser"); //Laser
    upgrades.push("Option");  //Option
    upgrades.push("?")  //?(shield)


    //Enemy_1   
    /*
    var enemy_1Pos = new pos(this.game.world.width - 200, this.game.world.centerY - 100);
    enemy_1 = new Enemy_1(this.game, enemy_1Pos, 'enemy_1', enemy_1Vel, enemy_1Lives);
    this.game.physics.arcade.enable(enemy_1);
    this.game.world.addChild(enemy_1);
    enemy_1.anchor.setTo(0.5, 0.5);
    enemy_1.scale.setTo(0.5, 0.5);

    enemyArray.push(enemy_1);
    */

    //enemy_aaron
    /*
    var enemy_aaronPos = new pos(this.game.world.centerX, this.game.world.centerY);
    enemy_aarom = new Enemy_Aaron(this.game, enemy_aaronPos,'ship', enemy_1Vel, enemy_1Lives);
    enemy_aarom.anchor.setTo(0.5, 0.5);
    enemy_aarom.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(enemy_aarom);
    this.game.world.addChild(enemy_aarom);*/


//para que colisione correctamente al impactar contra los elementos es necesario que 
// vamos a poner un enemy2
/*
    //Enemy_2 
    var enemy_2Pos = new pos(this.game.world.width, this.game.world.centerY);
    enemy_2 = new Enemy_2(this.game, enemy_2Pos, 'enemy_2', enemy_2Vel, enemy_2Lives);
    enemy_2.anchor.setTo(0.5, 0.5);
    enemy_2.scale.setTo(0.1, 0.1);
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

    */
    //el target debería heredar de sprite, de la clase movable, y no directamente de sprite.

    target = this.game.add.sprite(
    this.game.world.width, this.game.world.centerY);
    target.anchor.setTo(0.5, 0.5);
    target.scale.setTo(0.25, 0.25);
    target.x = 0;

    colisiones.resizeWorld();

  //player
  naveEspacial = this.game.add.physicsGroup();
  map.createFromObjects('objetos', 'nave', '', 683, true, false, naveEspacial);
  naveEspacial.forEach(function(integrante){
    // nos da la poiscion de cada uno de los integrantes
    var playerPos = new pos(integrante.x, integrante.y);
    player = new Player(nuestroJuego, playerPos,'naves', playerVel, playerLives);
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(3,3);
    nuestroJuego.physics.arcade.enable(player);
    nuestroJuego.world.addChild(player);
    player.body.collideWorldBounds = true;
    playerArray.push(player);


});    

    enemy_1_TiledToPhaser = this.game.add.physicsGroup();
    map.createFromObjects('objetos', 'enemy_1', '', 779, true, false, enemy_1_TiledToPhaser);// asÃ­ funciona igual , para la nave no nos hace falta poner el grupo
    enemy_1_TiledToPhaser.forEach(function(integrante){
      // nos da la poiscion de cada uno de los integrante
      var enePos = new pos(integrante.x, integrante.y);
      arrayPosicionesEnemigos_1.push(enePos);
      arrayX_Enemy_1.push(integrante.x);
      //crea(nuestroJuego, arrayPosicionesEnemigos1[arrayPosicionesEnemigos1.length-1],'enemy_1',enemy_1Vel,enemy_1Lives);
  });    

  enemy_2_TiledToPhaser = this.game.add.physicsGroup();
  map.createFromObjects('objetos', 'enemy_2', '', 4792, true, false, enemy_2_TiledToPhaser);// asÃ­ funciona igual , para la nave no nos hace falta poner el grupo
  enemy_2_TiledToPhaser.forEach(function(integrante2){
    // nos da la poiscion de cada uno de los integrante
    var enePos2 = new pos(integrante2.x, integrante2.y);
    arrayPosicionesEnemigos_2.push(enePos2);
    arrayX_Enemy_2.push(integrante2.x);
    //crea(nuestroJuego, arrayPosicionesEnemigos1[arrayPosicionesEnemigos1.length-1],'enemy_1',enemy_1Vel,enemy_1Lives);
});    

enemy_3_TiledToPhaser = this.game.add.physicsGroup();
map.createFromObjects('objetos', 'enemy_3', '', 4978, true, false, enemy_3_TiledToPhaser);// asÃ­ funciona igual , para la nave no nos hace falta poner el grupo
enemy_3_TiledToPhaser.forEach(function(integrante3){
  // nos da la poiscion de cada uno de los integrante
  var enePos3 = new pos(integrante3.x, integrante3.y);
  arrayPosicionesEnemigos_3.push(enePos3);
  arrayX_Enemy_3.push(integrante3.x);
  //crea(nuestroJuego, arrayPosicionesEnemigos1[arrayPosicionesEnemigos1.length-1],'enemy_1',enemy_1Vel,enemy_1Lives);
});    


enemy_4_TiledToPhaser = this.game.add.physicsGroup();
map.createFromObjects('objetos', 'enemy_4', '', 4782, true, false, enemy_4_TiledToPhaser);// asÃ­ funciona igual , para la nave no nos hace falta poner el grupo
enemy_4_TiledToPhaser.forEach(function(integrante4){
  // nos da la poiscion de cada uno de los integrante
  var enePos4 = new pos(integrante4.x, integrante4.y);
  arrayPosicionesEnemigos_4.push(enePos4);
  arrayX_Enemy_4.push(integrante4.x);
  //crea(nuestroJuego, arrayPosicionesEnemigos1[arrayPosicionesEnemigos1.length-1],'enemy_1',enemy_1Vel,enemy_1Lives);
});    





    
  },


  update: function ()
  {
    

    if(target.x < this.game.world.width - this.game.camera.width)
    target.x +=target_vel;

    colisiones.debug = true;
    
    this.game.physics.arcade.collide(player, this.colisiones);

    spawnEnemy(arrayX_Enemy_1, arrayPosicionesEnemigos_1, 'enemy_1', enemy_1Vel, enemy_1Lives, 1);
    spawnEnemy(arrayX_Enemy_2, arrayPosicionesEnemigos_2, 'enemy_2', enemy_2Vel, enemy_2Lives, 2);
    spawnEnemy(arrayX_Enemy_3, arrayPosicionesEnemigos_3, 'enemy_3', enemy_3Vel, enemy_3Lives, 3);
    spawnEnemy(arrayX_Enemy_4, arrayPosicionesEnemigos_4, 'enemy_4', enemy_4Vel, enemy_4Lives, 4);

    /*
    for(var j = 0; j<arrayPosicionesEnemigos_1.length; j++ ){
      if(canICreateMyself(arrayX_Enemy_1[j])){
        createEnemy_1(nuestroJuego, arrayPosicionesEnemigos_1[j],'enemy_1',enemy_1Vel,enemy_1Lives);
      }
    }

    for(var j = 0; j<arrayPosicionesEnemigos_1.length; j++ ){
      if(canICreateMyself(arrayX_Enemy_1[j])){
        arrayX_Enemy_1.splice(j,1);
        arrayPosicionesEnemigos_1.splice(j,1);
      }
    }

    for(var j = 0; j<arrayPosicionesEnemigos_2.length; j++ ){
      if(canICreateMyself(arrayX_Enemy_2[j])){
        createEnemy_2(nuestroJuego, arrayPosicionesEnemigos_2[j],'enemy_2',enemy_2Vel,enemy_2Lives);
      }
    }

    for(var j = 0; j<arrayPosicionesEnemigos_2.length; j++ ){
      if(canICreateMyself(arrayX_Enemy_2[j])){
        arrayX_Enemy_2.splice(j,1);
        arrayPosicionesEnemigos_2.splice(j,1);
      }
    }

*/

    for(var i = 0; i<enemyArray.length; i++ ){
        this.game.physics.arcade.overlap(weapons[currentWeapon], enemyArray[i], collisionHandler, null, this);
        this.game.physics.arcade.overlap(player, enemyArray[i], collisionHandler, null, this);
    }


    this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_1, collisionHandler, null, this);
    this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_2, collisionHandler, null, this);
    this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_3, collisionHandler, null, this);
    this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_4, collisionHandler, null, this);

    if(this.game.physics.arcade.overlap(player, enemy_1) || this.game.physics.arcade.overlap(player, enemy_2) ||
    this.game.physics.arcade.overlap(player, enemy_3) || this.game.physics.arcade.overlap(player, enemy_4))
    {
      if(shield)
      {
        this.game.physics.arcade.overlap(enemy_1, player, collisionHandler2, null, this);
        this.game.physics.arcade.overlap(enemy_2, player, collisionHandler2, null, this);
        this.game.physics.arcade.overlap(enemy_3, player, collisionHandler2, null, this);
        this.game.physics.arcade.overlap(enemy_4, player, collisionHandler2, null, this);
        shield_resistance--;
        if(shield_resistance <= 0)
        {
          shield = false;
          shield_resistance = 6;
        } 
        console.log(shield_resistance);
      }
      else
      {
        this.game.physics.arcade.overlap(player, enemy_1, collisionHandler, null, this);
        this.game.physics.arcade.overlap(player, enemy_2, collisionHandler, null, this);
        this.game.physics.arcade.overlap(player, enemy_3, collisionHandler, null, this);
        this.game.physics.arcade.overlap(player, enemy_4, collisionHandler, null, this);
      }
    }

    if(this.game.physics.arcade.overlap(player, powerup))
    {
      currentUpgrade++;
      if(currentUpgrade > upgrades.size())
      {
        currentUpgrade = 0;
      }
    }

    //this.game.camera.x = target.x;


    nuestraCamara.x = target.x;

    if(player.x<target.x)
    player.x = target.x;

    for(var i = 0; i<enemyArray.length; i++ )
    {
      this.game.debug.body(enemyArray[i]);
    }
    

    this.game.debug.body(player);
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

function canICreateMyself(posX){
  if(posX < nuestraCamara.x + nuestraCamara.width + 1000){ return true; }
  else return false;
}

function isOnCamera(posX){
if(posX < nuestraCamara.x + nuestraCamara.width + 20){ return true; }
else return false;
}

function spawnEnemy(enemy_x_array, enemy_pos_array, enemySpriteName, enemyVel,enemyLives, enemy_Type){ 

  for(var j = 0;  j <enemy_pos_array.length; j++ ){
    if(canICreateMyself(enemy_x_array[j])){
      if(enemy_Type===1)
      createEnemy_1(nuestroJuego, enemy_pos_array[j],enemySpriteName,enemyVel,enemyLives);
      else if(enemy_Type===2)
      createEnemy_2(nuestroJuego, enemy_pos_array[j],enemySpriteName,enemyVel,enemyLives);
      else if(enemy_Type===3)
      createEnemy_3(nuestroJuego, enemy_pos_array[j],enemySpriteName,enemyVel,enemyLives);
      else if(enemy_Type===4)
      createEnemy_4(nuestroJuego, enemy_pos_array[j],enemySpriteName,enemyVel,enemyLives);
    }
  }

  for(var i= 0; i < enemy_pos_array.length; i++ ){
    if(canICreateMyself(enemy_x_array[i])){
      enemy_pos_array.splice(i,1);
      enemy_x_array.splice(i,1);
    }
  }

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

//función que pawnea un enemigo

function createEnemy_1(juego, posicion, spriteName, velocidad, vidas, nombre){
  var ene = new Enemy_1(juego, posicion, spriteName, velocidad, vidas);
  ene.anchor.setTo(0.5, 0.5);
  ene.scale.setTo(0.5, 0.5);
  juego.physics.arcade.enable(ene);
  juego.world.addChild(ene);
  enemyArray.push(ene);

}

function createEnemy_2(juego, posicion, spriteName, velocidad, vidas, nombre){
  var ene2 = new Enemy_2(juego, posicion, spriteName, velocidad, vidas);
  ene2.anchor.setTo(0.5, 0.5);
  ene2.scale.setTo(0.1, 0.1);
  juego.physics.arcade.enable(ene2);
  juego.world.addChild(ene2);
  enemyArray.push(ene2);

}

function createEnemy_3(juego, posicion, spriteName, velocidad, vidas, nombre){
  var ene3 = new Enemy_3(juego, posicion, spriteName, velocidad, vidas);
  ene3.anchor.setTo(0.5, 0.5);
  ene3.scale.setTo(0.3, 0.3);
  juego.physics.arcade.enable(ene3);
  juego.world.addChild(ene3);
  enemyArray.push(ene3);

}

function createEnemy_4(juego, posicion, spriteName, velocidad, vidas, nombre){
  var ene4 = new Enemy_4(juego, posicion, spriteName, velocidad, vidas);
  ene4.anchor.setTo(0.5, 0.5);
  ene4.scale.setTo(0.5, 0.5);
  juego.physics.arcade.enable(ene4);
  juego.world.addChild(ene4);
  enemyArray.push(ene4);

}

function createSecondPlayer(vidas){
  vidas = 3;
  var player2Pos = new pos(player.x - 50, player.y + 50);
  player2 = new Player2(nuestroJuego, player2Pos,'naves', playerVel, vidas,player);
  player2.anchor.setTo(0.5, 0.5);
  player2.scale.setTo(3,3);
  nuestroJuego.physics.arcade.enable(player2);
  nuestroJuego.world.addChild(player2);
  player2.body.collideWorldBounds = true;
  secondPlayerAlive = true;
  playerArray.push(player2);
  
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
Player.prototype.Movement = function()
{
if(akey.isDown){
  //createSecondPlayer();
}

this.body.x += target_vel;


  if (leftKey.isDown)
  {
      this.body.x -= this._velocity;

  }
  else if (rightKey.isDown)
  {
    this.body.x += this._velocity;

  }

  if (upKey.isDown)
  {
    this.body.y -= this._velocity * 0.5;
      player.frameName = 'down';
  }
  else if (downKey.isDown)
  {
    this.body.y += this._velocity * 0.5;
      player.frameName = 'up';
  }  else {
    player.frameName = 'front';
  }

  if(spacebarKey.isDown)
  {
    weapons[currentWeapon].fire(player);
  }

}

Player.prototype.update = function()
{
  this.Movement();
}

function Player2(game, position, sprite, velocity, lives, father)
{
  Destroyable.apply(this, [game, position, sprite, velocity, lives]);
  this._father = father;
}

Player2.prototype = Object.create(Destroyable.prototype);
Player2.prototype.constructor = Player2;

//Métodos de la clase Player
//Permite al player moverse con los cursores
// añade al prototipo de player la función Movement
Player2.prototype.Movement = function()
{
  
    this.body.x = this._father.body.x -  50;

    this.body.y =  this._father.body.y + 50 ;

  if (upKey.isDown)
  {
    this._father.frameName = 'down';
  }
  else if (downKey.isDown)
  {
    this._father.frameName = 'up';
  }  else {
    this._father.frameName = 'front';
  }

  if(spacebarKey.isDown)
  {
    weapons[0].fire(player2);
  }

}

Player2.prototype.update = function()
{
  this.Movement();
}















//NUEVAS CLASES BALAS MEJORADAS
function Bullet (game, sprite)
{
  Phaser.Sprite.call(this, game, 0, 0, sprite);
  this.anchor.set(0.5);
  
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
  this.exists = false;
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

//Método fire común a todas las balas
Bullet.prototype.fire = function (x, y, angle, speed, gx, gy) 
{
  
  gx = gx || 0;
  gy = gy || 0;
  
   this.reset(x, y);  //colocamos el objeto en la x e y introducidas
   this.scale.set(1);
  
   this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);
  
   this.angle = angle;
  
  this.body.gravity.set(gx, gy);
  
};

var Weapon = {};

//Clase que hereda de Phaser group
Weapon.SingleBullet = function (game) 
{
  
  Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
  
  this.nextFire = 0;
  this.bulletSpeed = 600;
  this.fireRate = 100;
  
  for (var i = 0; i < 64; i++)
  {
     this.add(new Bullet(game, 'bullet_1'), true);
  }
  
  return this;
  
};
  
  Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
  Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;
  
  Weapon.SingleBullet.prototype.fire = function (source)
  {
  
    if (this.game.time.time < this.nextFire) { return; }
  
      var x = source.x + 10;
      var y = source.y + 10;
  
      this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);

      this.nextFire = this.game.time.time + this.fireRate;
  
  };

  Weapon.UpFront = function (game)
  {
    Phaser.Group.call(this, game, game.world, 'UpFront', false, true, Phaser.Physics.ARCADE);
    
    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;
    
    for (var i = 0; i < 64; i++)
    {
       this.add(new Bullet(game, 'bullet_1'), true);
    }
    
    return this;
  };

  Weapon.UpFront.prototype = Object.create(Phaser.Group.prototype);
  Weapon.UpFront.prototype.constructor = Weapon.UpFront;

  Weapon.UpFront.prototype.fire = function (source)
  {
    if (this.game.time.time < this.nextFire) { return; }
    
    var x = source.x + 10;
    var y = source.y + 10;
    
    this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
    this.getFirstExists(false).fire(x, y, -45, this.bulletSpeed, 0, 0);
    
    this.nextFire = this.game.time.time + this.fireRate;
  };

  //Bala que dispara de frente y hacia abajo
  Weapon.FrontDown = function (game) 
  {
    
    Phaser.Group.call(this, game, game.world, 'FrontDown', false, true, Phaser.Physics.ARCADE);
    
    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;
    
    for (var i = 0; i < 64; i++)
    {
       this.add(new Bullet(game, 'bullet_1'), true);
    }
    
    return this;
    
  };
    
  Weapon.FrontDown.prototype = Object.create(Phaser.Group.prototype);
  Weapon.FrontDown.prototype.constructor = Weapon.FrontDown;
    
  Weapon.FrontDown.prototype.fire = function (source)
  {
    
    if (this.game.time.time < this.nextFire) { return; }
    
      var x = source.x + 10;
      var y = source.y + 10;
    
      this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
      this.getFirstExists(false).fire(x, y, 45, this.bulletSpeed, 0, 0);
  
      this.nextFire = this.game.time.time + this.fireRate;
    
   };

  //Bala que va hacia delante, arriba y abajo
  Weapon.ThreeWay = function (game) 
  {
      
    Phaser.Group.call(this, game, game.world, 'ThreeWay', false, true, Phaser.Physics.ARCADE);
      
    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;
      
    for (var i = 0; i < 64; i++)
    {
      this.add(new Bullet(game, 'bullet_1'), true);
    }
      
    return this;
      
  };
      
  Weapon.ThreeWay.prototype = Object.create(Phaser.Group.prototype);
  Weapon.ThreeWay.prototype.constructor = Weapon.ThreeWay;
      
  Weapon.ThreeWay.prototype.fire = function (source)
  {
      
    if (this.game.time.time < this.nextFire) { return; }
      
      var x = source.x + 10;
      var y = source.y + 10;
      
      this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
      this.getFirstExists(false).fire(x, y, 45, this.bulletSpeed, 0, 0);
      this.getFirstExists(false).fire(x, y, -45, this.bulletSpeed, 0, 0);
    
      this.nextFire = this.game.time.time + this.fireRate;
      
  };

  //Tipo de bala Láser, no se destruye al chocar contra enemigos
  Weapon.Laser = function (game) 
  {
        
    Phaser.Group.call(this, game, game.world, 'Laser', false, true, Phaser.Physics.ARCADE);
        
    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;
        
    for (var i = 0; i < 64; i++)
    {
      this.add(new Bullet(game, 'laser'), true);
    }
        
    return this;
        
  };
        
  Weapon.Laser.prototype = Object.create(Phaser.Group.prototype);
  Weapon.Laser.prototype.constructor = Weapon.Laser;
        
  Weapon.Laser.prototype.fire = function (source)
  {
        
    if (this.game.time.time < this.nextFire) { return; }
        
      var x = source.x + 10;
      var y = source.y + 10;
        
      this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
      
      this.nextFire = this.game.time.time + this.fireRate;
        
  };

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



Enemy_1.prototype.Movement = function()
{
  this.Enemy_1Mov = false;

  if(this.x > this.game.camera.x + this.game.camera.width / 2 && !this.Enemy_1Mov)
  {
    this.move_along_enemy(this._velocity);
  }
  else
  {
    this.x += this._velocity;
    if(this.x < this.game.camera.x + this.game.camera.width / 2 + 100)
    {
      this.y += this._velocity;
      this.x-= 2 * target_vel;
    }
    
    this.Enemy_1Mov = true;
  }
}

Enemy_1.prototype.update = function()
{
  if(isOnCamera(this.x))
 this.Movement();
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
  if(isOnCamera(this.x))
  this.Movement(enemy_2Vel);
}

//Clase enemy 3
function Enemy_3(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);

  this._iniY = position._y;
}

Enemy_3.prototype = Object.create(Enemy.prototype);
Enemy_3.prototype.constructor = Enemy_3;



Enemy_3.prototype.Movement = function()
{
  this._max_y = 80;
  this._up = false;
  this.move_along_enemy(this._velocity);
  
  if(!this._up)
  {  
    this.y++;
    if(this.y === (this._iniY + this._max_y))
    {
      this._up = true;
    }
  }
  else
  {
    this.y--;
    if(this.y === (this._iniY - this._max_y))
    {
      this._up = false;
    }
  }
    
}

Enemy_3.prototype.update = function()
{
  if(isOnCamera(this.x))
  this.Movement();
}

//Clase enemy 4
function Enemy_4(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy_4.prototype = Object.create(Enemy.prototype);
Enemy_4.prototype.constructor = Enemy_4;


Enemy_4.prototype.Movement = function()
{

  this._found = false;
  this._localized = false;
  this._upMovement = false;
  this._downMovement = false;

  if(!this._localized)
  {
    if(this.y > player.y)
    {
      this._upMovement = true;
    }
    else
    {
      this._downMovement = true;
    }

    this._localized = true;
  }

  if(this._upMovement && !this._found)
  {
    this.y--;
  }
  else if(this._downMovement && !this._found)
  {
    this.y++;
  }

  if(this.y === player.y)
  {
    this._found= true;
  }

  if(this._found)
  {
    this.move_along_enemy(this._velocity);
  }
  
}

Enemy_4.prototype.update = function()
{
  if(isOnCamera(this.x))
  this.Movement();
}

module.exports = PlayScene;