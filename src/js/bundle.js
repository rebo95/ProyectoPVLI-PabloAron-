(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var puntos;
var LeaderboardState = function() {  };  LeaderboardState.prototype = {    init: function(customParam1) {  puntos = customParam1; }};

var arribaTecla;

var mouseButton;

var fondo;
var menuSprite ;

var controlsBoton;
var controlsSprite;




var menuBoton;


var shootSound;
var music;
var txt;
var nave;

var GameOver = {
    create : function(){
        this.game.stage.backgroundColor = '#ffff';
        
        shootSound = this.game.add.audio('blaster');

            fondo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fondo' );
            fondo.anchor.setTo(0.5,0.5);
            fondo.scale.setTo(1, 1);
            
            var logo = this.game.add.sprite(this.game.world.centerX, 520, 'logo');
            logo.anchor.setTo(0.5,0.5);
            logo.scale.setTo(0.10, 0.10);
        
        
            var title2 = this.game.add.sprite(this.game.world.centerX, 80, 'title2');
            title2.anchor.setTo(0.5,0.5);
            title2.scale.setTo(0.5,0.5);

            menuBoton  = this.game.add.button(this.game.world.centerX + 290, this.game.world.centerY +250, 'blackRectangle', actionOnClickMenu, this, 2,1,0);
            menuBoton.anchor.setTo(0.5,0.5);
            menuBoton .scale.setTo(0.6, 0.3);
    
            menuSprite = this.game.add.sprite( menuBoton.x,  menuBoton.y, 'menuSprite');
            menuSprite.anchor.setTo(0.5,0.5);
            menuSprite.scale.setTo(1,1);


            var txt = this.game.add.text(boton3.x - boton3.width/2 ,boton3.y + 5, puntos , {font: "20px Italic", fill:"#ffff", align: "center"});
            txt.anchor.setTo(0,0.5);
                
            //txt = this.game.add.text(boton.x, boton.y, "Play" , {font: "20px Italic", fill:"#ffff", align: "center"})

            menuBoton.onInputOver.add(menuover, this);
            menuBoton.onInputOut.add(menuout, this);
            
            mouseButton = this.game.input.activePointer.leftButton;
        


        
    },


    update: function(){
        //enemigo.x++;}
        
    },

};

function start(){

   
}

function actionOnClickMenu()
{
    this.game.state.start('fin');
}

function menuover(){
    //txt.fill = '#ff00ff';
    menuSprite.frameName = "redmenu";
    shootSound.play();

}
function menuout(){
    //txt.fill = '#ffff';
    menuSprite.frameName = "bluemenu";
}



module.exports = GameOver;
},{}],2:[function(require,module,exports){
'use strict';


var arribaTecla;

var mouseButton;

var fondo;
var menuSprite ;

var controlsBoton;
var controlsSprite;




var menuBoton;


var shootSound;
var music;
var txt;
var nave;

var Controls2 = {
    create : function(){
        this.game.stage.backgroundColor = '#ffff';
        
        shootSound = this.game.add.audio('blaster');

            fondo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fondo' );
            fondo.anchor.setTo(0.5,0.5);
            fondo.scale.setTo(1, 1);
            
            var logo = this.game.add.sprite(this.game.world.centerX, 520, 'logo');
            logo.anchor.setTo(0.5,0.5);
            logo.scale.setTo(0.10, 0.10);
        
        
            var title2 = this.game.add.sprite(this.game.world.centerX, 80, 'title2');
            title2.anchor.setTo(0.5,0.5);
            title2.scale.setTo(0.5,0.5);

            menuBoton  = this.game.add.button(this.game.world.centerX + 290, this.game.world.centerY +250, 'blackRectangle', actionOnClickMenu, this, 2,1,0);
            menuBoton.anchor.setTo(0.5,0.5);
            menuBoton .scale.setTo(0.6, 0.3);
    
            menuSprite = this.game.add.sprite( menuBoton.x,  menuBoton.y, 'menuSprite');
            menuSprite.anchor.setTo(0.5,0.5);
            menuSprite.scale.setTo(1,1);
                
            //txt = this.game.add.text(boton.x, boton.y, "Play" , {font: "20px Italic", fill:"#ffff", align: "center"})

            menuBoton.onInputOver.add(menuover, this);
            menuBoton.onInputOut.add(menuout, this);
            
            mouseButton = this.game.input.activePointer.leftButton;
        


        
    },


    update: function(){
        //enemigo.x++;}
        
    },

};

function start(){

   
}

function actionOnClickMenu()
{
    this.game.state.start('menu');
}

function menuover(){
    //txt.fill = '#ff00ff';
    menuSprite.frameName = "redmenu";
    shootSound.play();

}
function menuout(){
    //txt.fill = '#ffff';
    menuSprite.frameName = "bluemenu";
}



module.exports = Controls2;
},{}],3:[function(require,module,exports){
'use strict';


var arribaTecla;

var mouseButton;

var fondo;
var menuBoton;
var menuSprite;

var spriteGroup;



var shootSound;
var music;
var txt;
var nave;

var Credits2 = {
    create : function(){
        this.game.stage.backgroundColor = '#ffff';
        
            shootSound = this.game.add.audio('blaster');
        
            fondo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fondo' );
            fondo.anchor.setTo(0.5,0.5);
            fondo.scale.setTo(1, 1);
        
            

            var ourlogo = this.game.add.sprite(this.game.world.centerX, 80, 'ourlogo');
            ourlogo.anchor.setTo(0.5,0.5);
            ourlogo.scale.setTo(1,0.8);


            var title2 = this.game.add.sprite(this.game.world.centerX, 180, 'title2');
            title2.anchor.setTo(0.5,0.5);
            title2.scale.setTo(0.5,0.5);


            var txt =  this.game.add.sprite(title2.x ,title2.y + 70, 'producido');//this.game.add.text(title2.x ,title2.y + 70,"Producido y dirigido" , {font: "35px Italic", fill:"#ffff", align: "center"});
            txt.anchor.setTo(0.5,0.5);
            txt.scale.setTo(0.7, 0.7);

            var txt2 = this.game.add.sprite(title2.x ,title2.y + 130, 'pablo');//this.game.add.text(title2.x ,title2.y + 130,"Pablo Martín García" , {font: "30px Italic", fill:"#ffff", align: "center"});
            txt2.anchor.setTo(0.5,0.5);
            txt2.scale.setTo(0.6, 0.6);

            var txt3 = this.game.add.sprite(title2.x ,title2.y + 170, 'aaron');//this.game.add.text(title2.x ,title2.y + 170, "Aaron Reboredo Vázquez" , {font: "30px Italic", fill:"#ffff", align: "center"});
            txt3.anchor.setTo(0.5,0.5);
            txt3.scale.setTo(0.6, 0.6);

            var logo = this.game.add.sprite(this.game.world.centerX, txt3.y + 90 , 'logo');
            logo.anchor.setTo(0.5,0.5);
            logo.scale.setTo(0.10, 0.10);
        

            spriteGroup = this.game.add.group();  
            spriteGroup.addMultiple([ourlogo,title2,txt, txt2,txt3,logo]);
            spriteGroup.y = this.game.world.height;


            menuBoton  = this.game.add.button(this.game.world.centerX + 290, this.game.world.centerY +250, 'blackRectangle', actionOnClickMenu, this, 2,1,0);
            menuBoton.anchor.setTo(0.5,0.5);
            menuBoton .scale.setTo(0.6, 0.3);
    
            menuSprite = this.game.add.sprite( menuBoton.x,  menuBoton.y, 'menuSprite');
            menuSprite.anchor.setTo(0.5,0.5);
            menuSprite.scale.setTo(1,1);
                
            //txt = this.game.add.text(boton.x, boton.y, "Play" , {font: "20px Italic", fill:"#ffff", align: "center"})

            menuBoton.onInputOver.add(menuover, this);
            menuBoton.onInputOut.add(menuout, this);
            
            mouseButton = this.game.input.activePointer.leftButton;
        


        
    },


    update: function(){
        //enemigo.x++;}
        if(spriteGroup.y > -this.game.world.height/2 - 90){
        spriteGroup.y -= 2; 
        }else {
            this.game.state.start('menu');
        }

    },

};

function start(){

   
}

function actionOnClickMenu()
{
    this.game.state.start('menu');
}

function menuover(){
    //txt.fill = '#ff00ff';
    menuSprite.frameName = "redmenu";
    shootSound.play();

}
function menuout(){
    //txt.fill = '#ffff';
    menuSprite.frameName = "bluemenu";
}


module.exports = Credits2;
},{}],4:[function(require,module,exports){
'use strict';


var arribaTecla;

var mouseButton;

var fondo;
var playBoton;
var playSprite;

var controlsBoton;
var controlsSprite;

var creditsBoton;
var creditsSprite;



var shootSound;
var music;
var txt;
var nave;

var MainMenu = {
    create : function(){


        music = this.game.add.audio('menuMusic');
        shootSound = this.game.add.audio('blaster');
        
        this.game.sound.setDecodedCallback([music, shootSound], start, this);

        arribaTecla = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

        
        
    },


    update: function(){
        //enemigo.x++;}
        
    },

};

function start(){

    music.loop = true;
    music.play();

    this.game.stage.backgroundColor = '#ffff';

    fondo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fondo' );
    fondo.anchor.setTo(0.5,0.5);
    fondo.scale.setTo(1, 1);

    
    var logo = this.game.add.sprite(this.game.world.centerX, 500, 'logo');
    logo.anchor.setTo(0.5,0.5);
    logo.scale.setTo(0.10, 0.10);

    var ourlogo = this.game.add.sprite(this.game.world.centerX, 110, 'ourlogo');
    ourlogo.anchor.setTo(0.5,0.5);
    ourlogo.scale.setTo(1,0.8);

    var title2 = this.game.add.sprite(this.game.world.centerX, 180, 'title2');
    title2.anchor.setTo(0.5,0.5);
    title2.scale.setTo(0.5,0.5);


    playBoton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 40, 'blackRectangle', actionOnClickPlay, this, 2,1,0);
    playBoton.anchor.setTo(0.5,0.5);
    playBoton.scale.setTo(0.7, 0.4);

    playSprite = this.game.add.sprite(playBoton.x, playBoton.y, 'playSprite');
    playSprite.anchor.setTo(0.5,0.5);


    controlsBoton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 30, 'blackRectangle', actionOnClickControls, this, 2,1,0);
    controlsBoton.anchor.setTo(0.5,0.5);
    controlsBoton.scale.setTo(1, 0.4);

    controlsSprite = this.game.add.sprite(controlsBoton.x, controlsBoton.y, 'controlsSprite');
    controlsSprite.anchor.setTo(0.5,0.5);
    controlsSprite.scale.setTo(0.7,0.7);



    creditsBoton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'blackRectangle',actionOnClickCredits, this, 2,1,0);
    creditsBoton.anchor.setTo(0.5,0.5);
    creditsBoton.scale.setTo(0.9, 0.4);

    creditsSprite = this.game.add.sprite( creditsBoton.x,  creditsBoton.y, 'creditsSprite');
    creditsSprite.anchor.setTo(0.5,0.5);
    creditsSprite.scale.setTo(0.7,0.7);


    //txt = this.game.add.text(boton.x, boton.y, "Play" , {font: "20px Italic", fill:"#ffff", align: "center"});
    //txt.anchor.setTo(0.5,0.5);
    creditsBoton .onInputOver.add(creditsover, this);
    creditsBoton .onInputOut.add(creditsout, this);

    playBoton.onInputOver.add(playover, this);
    playBoton.onInputOut.add(playout, this);

    controlsBoton.onInputOver.add(controlover, this);
    controlsBoton.onInputOut.add(controlout, this);
   
    //enemigo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'enemy_1' );
    
    mouseButton = this.game.input.activePointer.leftButton;

}


function actionOnClickPlay()
{
    music.destroy();

    this.game.state.start('play');
}

function actionOnClickControls()
{
    music.destroy();
 
    this.game.state.start('controls2');
}

function actionOnClickCredits()
{
    music.destroy();
    
    this.game.state.start('credits2');
}



function playover(){
    //txt.fill = '#ff00ff';
    playSprite.frameName = "redPlay";
    shootSound.play();

}
function playout(){
    //txt.fill = '#ffff';
    playSprite.frameName = "bluePlay";
}

function controlover(){
    //txt.fill = '#ff00ff';
    controlsSprite.frameName = "redcontrols";
    shootSound.play();

}
function controlout(){
    //txt.fill = '#ffff';
    controlsSprite.frameName = "bluecontrols";
}

function creditsover(){
    //txt.fill = '#ff00ff';
    creditsSprite.frameName = "redcredits";
    shootSound.play();

}
function creditsout(){
    //txt.fill = '#ffff';
    creditsSprite.frameName = "bluecredits";
}



module.exports = MainMenu;
},{}],5:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');
var GameO = require('./GameOver.js')
var Controls = require('./controls.js');
var Credits2 = require('./credits.js');
var MainMenu = require('./initialMenu.js');


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
 
    // cuando queramos trabaar desde el local debemos inhabilitar estas direcciones, si no, buscará los recursos en nuestro repositorio y no en nuestra carpeta de juego
    this.game.load.baseURL = 'https://rebo95.github.io/ProyectoPVLI-PabloAron-/src/';
    this.game.load.crossOrigin = 'anonymous';
    
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);




    //Menu assets

    this.game.load.image('blackRectangle', IMAGE_PATH + 'blackR.png');
    this.game.load.image('producido', IMAGE_PATH + 'producido.png');
    this.game.load.image('aaron', IMAGE_PATH + 'producidoaaron.png');
    this.game.load.image('pablo', IMAGE_PATH + 'producidopablo.png');
    this.game.load.image('title1', IMAGE_PATH + 'title.png');
    this.game.load.image('title2', IMAGE_PATH + 'title2.png');
    this.game.load.image('fondo', IMAGE_PATH + 'original.png');
    this.game.load.image('logo', IMAGE_PATH + 'logo.png');
    this.game.load.image('ourlogo', IMAGE_PATH + 'logoBack.png');
    this.game.load.image('ended', IMAGE_PATH + 'gameOver.png');
    this.game.load.image('punts', IMAGE_PATH + 'puntuacion.png');
    this.game.load.image('press', IMAGE_PATH + 'press.png');
    
    //sound assets
    //music
    this.game.load.audio('menuMusic','audio/menuMusic.mp3' )
    this.game.load.audio('gameMusic','audio/gameMusic.mp3' )

    //sound effects
    this.game.load.audio('explosion','audio/explosion.mp3' )
    this.game.load.audio('blaster', 'audio/sfx.mp3' );
    
    // TODO: load here the assets for the game
  
    
    this.game.load.atlas('naves',  IMAGE_PATH + 'shipSheet.png',  IMAGE_PATH + 'spritesShip.json');
    this.game.load.atlas('habilidades',  IMAGE_PATH + 'habilities.png',  IMAGE_PATH + 'habilitiesJSON.json');
    this.game.load.atlas('playSprite',  IMAGE_PATH + 'playSheet.png',  IMAGE_PATH + 'playJSON.json');
    this.game.load.atlas('controlsSprite',  IMAGE_PATH + 'controlssheet.png',  IMAGE_PATH + 'controlsJSON.json');
    this.game.load.atlas('creditsSprite',  IMAGE_PATH + 'creditssheet.png',  IMAGE_PATH + 'creditsJSON.json');
    this.game.load.atlas('menuSprite',  IMAGE_PATH + 'menusheet.png',  IMAGE_PATH + 'menuJSON.json');

    this.game.load.atlas('enemy_1',  IMAGE_PATH + 'enemy1sheet.png',  IMAGE_PATH + 'enemy1JSON.json');
    this.game.load.atlas('enemy_2',  IMAGE_PATH + 'enemy2sheet.png',  IMAGE_PATH + 'enemy2JSON.json');
    this.game.load.atlas('enemy_3',  IMAGE_PATH + 'enemy3sheet.png',  IMAGE_PATH + 'enemy3JSON.json');
    this.game.load.atlas('enemy_4',  IMAGE_PATH + 'enemy4sheet.png',  IMAGE_PATH + 'enemy4JSON.json');

    this.game.load.atlas('pausaSprite',  IMAGE_PATH + 'pausasheet.png',  IMAGE_PATH + 'pausaJSON.json');

    this.game.load.image('roca', IMAGE_PATH + 'Enemy_4_Respawn.png')

    this.game.load.image('power_up', IMAGE_PATH + 'PowerUp_1.png')

    //Cargas de los enemigos
    //this.game.load.image('enemy_1', IMAGE_PATH + 'meteorite.png');
    //this.game.load.image('enemy_2', IMAGE_PATH + 'n.png');
    //this.game.load.image('enemy_3', IMAGE_PATH + 'futurama.png');
    //this.game.load.image('enemy_4', IMAGE_PATH + 'Power_Up.png');
    
    //hudShip
    //Cargas de las balas
    this.game.load.image('bullet_1', IMAGE_PATH + 'Double_1.png');
    this.game.load.image('laser', IMAGE_PATH + 'laser.png');


    //cargas necesarias para el tiled y el mapa
    this.load.tilemap('level', './images/nivelGdiameter.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tilespng', 'images/tiles.png');
  },

  create: function () {
    //this.game.state.start('play');
    this.game.state.start('menu');
  }
};


window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);

  game.state.add('play', PlayScene);
  game.state.add('credits2', Credits2);
  game.state.add('menu', MainMenu);
  game.state.add('controls2', Controls); 
  game.state.add('fin', GameO); 


  
  game.state.start('boot');
};

},{"./GameOver.js":1,"./controls.js":2,"./credits.js":3,"./initialMenu.js":4,"./play_scene.js":6}],6:[function(require,module,exports){
'use strict';

var akey;
var pauseKey;
var nuestroJuego;
var nuestraCamara;
var creado = false;
var boton2;
var boton3;
var txt;
var spriteGroup;

var velMultiplier;



var points;
var posXPlayerIni;
var posYPlayerIni;
var posXCameraIni;
var posYCameraIni;


var creditsSprite ;


var upKey;
var downKey;
var leftKey;
var rightKey;
var spacebarKey;
var xKey;


var arrayPosicionesEnemigos_1 = [];
var arrayPosicionesEnemigos_2 = [];
var arrayPosicionesEnemigos_3 = [];
var arrayPosicionesEnemigos_4 = [];
var arrayPosicionesEnemigos_5 = [];
var arrayP = [];

var arrayX_Enemy_1 = [];
var arrayX_Enemy_2 = [];
var arrayX_Enemy_3 = [];
var arrayX_Enemy_4 = [];
var arrayX_Enemy_5 = [];

var enemy_1_TiledToPhaser; 
var enemy_2_TiledToPhaser; 
var enemy_3_TiledToPhaser; 
var enemy_4_TiledToPhaser; 
var enemy_5_TiledToPhaser; 


var naveEspacial;
var secondPlayerAlive = false;
var player2;

var enemyArray = [];
var playerArray = [];


//Player
var player;
var playerVel = 5;
var playerLives;
var shield = false;
var shield_resistance = 6;

var weapons = [];
var currentWeapon = 0;


var shieldSprite;
var optionSprite; 
var laserSprite;
var doubleSprite;
var missileSprite;  
var speedSprite;


//PowerUps
var upgrades = [];
var currentUpgrade = 0;
var powerup;
var powerup2;
var powerup3;
var powerup4;
var powerup5;

var playerAlive = true;

var target;
var target2;
var target_vel = 1;

//Enemigo que avanza un poco y retrocede en diagonal
var enemy_1;
var enemy_1Vel = 5;
var enemy_1Lives = 1;


var enemy_aarom;
var enemy_aaronLives = 1;

//Enemigo que avanza en línea recta y va hacia el player
var enemy_2;
var enemy_2Vel = 2;
var enemy_2Lives = 1;

//Enemigo que sube y baja mientras avanza
var enemy_3;
var enemy_3Vel = 3;
var enemy_3Lives = 1;

//Enemigo que alcanza la y del player y avanza en ese sentido
var enemy_4;
var enemy_4Vel = 4;
var enemy_4Lives = 1;

//Balas
var bullets_1;
var bullets_1Vel = 7;
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

var boton;

var PlayScene = 
{
  create: function () 
  {

    playerLives = 3;

    nuestroJuego = this.game;
    nuestraCamara = this.game.camera;
    posXCameraIni = this.game.camera.x;
    posYCameraIni = this.game.camera.y;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Map
    map = this.game.add.tilemap('level');
    map.addTilesetImage('tilesheet','tilespng');

    back = map.createLayer('fondo');//son los nombres del tiled, como se llaman las capas del tiled creado
    level = map.createLayer('nivelado');
    
    //colisiones = map.createLayer('collisions');

    //map.setCollisionBetween(1, 1000, true, 'collisions');
    //map.setCollisionByExclusion([0], true, colisiones);

    //map.setCollision(708, true, level);

    akey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);    
    pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.P);

    //Input
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    spacebarKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    xKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);


    window.onkeydown = function() {
      this.pausaSprite;
if(playerLives===0){
  if (nuestroJuego.input.keyboard.event.keyCode == 82){ 
    //nuestroJuego.paused = false;
    window.location.reload(true);
  
  }
}else 
      if (nuestroJuego.input.keyboard.event.keyCode == 80){
        if(nuestroJuego.paused){
          nuestroJuego.paused = false;
          this.pausaSprite.destroy();
        }
        else {
        nuestroJuego.paused = true;

        this.pausaSprite = nuestroJuego.add.sprite(nuestroJuego.camera.x + nuestroJuego.camera.width/2, nuestroJuego.camera.y + nuestroJuego.camera.height/2, 'pausaSprite');
        this.pausaSprite.anchor.setTo(0.5,0.5);
        this.pausaSprite.scale.setTo(1,1);

        }

      }
    }
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

    
    for(var i = 0; i < weapons.length; i++)
    {
      weapons[i].outOfBoundsKill = true;
    }
    

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
    //boton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'blackRectangle', actionOnClick, this, 2,1,0);
    //boton.anchor.setTo(0.5,0.5);
    //boton.scale.setTo(1, 0.5);



    target = this.game.add.sprite(
    this.game.world.width, this.game.world.centerY);
    target.anchor.setTo(0.5, 0.5);
    target.scale.setTo(0.25, 0.25);
    target.x = 0;

    

  //player
  naveEspacial = this.game.add.physicsGroup();
  map.createFromObjects('objetos', 'nave', '', 683, true, false, naveEspacial);
  naveEspacial.forEach(function(integrante){
    // nos da la poiscion de cada uno de los integrantes
    posXPlayerIni = integrante.x;
    posYPlayerIni = integrante.y;

    var playerPos = new pos(integrante.x, integrante.y);
    create_player(nuestroJuego, playerPos, 'naves', playerVel, playerLives);


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

enemy_5_TiledToPhaser = this.game.add.physicsGroup();
map.createFromObjects('objetos', 'obstacle', '', 980, true, false, enemy_5_TiledToPhaser);// asÃ­ funciona igual , para la nave no nos hace falta poner el grupo
enemy_5_TiledToPhaser.forEach(function(integrante5){
  // nos da la poiscion de cada uno de los integrante
  var enePos5 = new pos(integrante5.x, integrante5.y);
  arrayPosicionesEnemigos_5.push(enePos5);
  arrayX_Enemy_5.push(integrante5.x);
  //crea(nuestroJuego, arrayPosicionesEnemigos1[arrayPosicionesEnemigos1.length-1],'enemy_1',enemy_1Vel,enemy_1Lives);
});


var posBot3 = new pos(this.game.camera.x + this.game.camera.width /2 , 50);
boton3 = new HUD(this.game, posBot3, 'blackRectangle', target_vel);
boton3.anchor.setTo(0.5,0.5);
boton3.scale.setTo(1.2, 0.3);
this.game.world.addChild(boton3);



//var boton2 = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 , this.game.camera.y + 400, 'enemy_4');
//boton2.anchor.setTo(0.5,0.5);
//boton2.scale.setTo(0.5, 0.5);
points = 0;

txt = this.game.add.text(boton3.x - boton3.width/2 ,boton3.y + 5, points , {font: "20px Italic", fill:"#ffff", align: "center"});
txt.anchor.setTo(0,0.5);

speedSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
speedSprite.anchor.setTo(0, 0);
speedSprite.scale.setTo(1.8, 1.8);
speedSprite.x = boton3.x-boton3.width/2;
speedSprite.y = boton3.y- boton3.height/2;
speedSprite.frameName = 'bluespeed';


missileSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
missileSprite.anchor.setTo(0, 0);
missileSprite.scale.setTo(1.8, 1.8);
missileSprite.x = boton3.x - boton3.width/2 + speedSprite.width;
missileSprite.y = boton3.y- boton3.height/2;
missileSprite.frameName = 'bluemissile';


doubleSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
doubleSprite.anchor.setTo(0, 0);
doubleSprite.scale.setTo(1.8, 1.8);
doubleSprite.x = boton3.x-boton3.width/2+ 2* speedSprite.width;
doubleSprite.y = boton3.y- boton3.height/2;
doubleSprite.frameName = 'bluedouble';

laserSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
laserSprite.anchor.setTo(0, 0);
laserSprite.scale.setTo(1.8, 1.8);
laserSprite.x = boton3.x-boton3.width/2+ 3*speedSprite.width;
laserSprite.y = boton3.y- boton3.height/2;
laserSprite.frameName = 'bluelaser';

optionSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
optionSprite.anchor.setTo(0, 0);
optionSprite.scale.setTo(1.8, 1.8);
optionSprite.x = boton3.x-boton3.width/2 + 4* speedSprite.width;;
optionSprite.y = boton3.y- boton3.height/2;
optionSprite.frameName = 'blueoption';

shieldSprite  = this.game.add.sprite(this.game.camera.x + this.game.camera.width /2 ,  this.game.camera.y + this.game.camera.height /2, 'habilidades' );
shieldSprite.anchor.setTo(0, 0);
shieldSprite.scale.setTo(1.8, 1.8);
shieldSprite.x = boton3.x-boton3.width/2 + 5 * speedSprite.width;;
shieldSprite.y = boton3.y- boton3.height/2;
shieldSprite.frameName = 'blueshield';

spriteGroup = this.game.add.group();  
spriteGroup.addMultiple([boton3, txt, speedSprite, missileSprite, doubleSprite, laserSprite, optionSprite, shieldSprite]);

powerup = this.game.add.sprite(350, 300, 'power_up')
powerup.anchor.setTo(0.5, 0.5);
powerup.scale.setTo(3,3);
this.game.physics.arcade.enable(powerup);
this.game.world.addChild(powerup);
powerup.body.collideWorldBounds = true;

arrayP.push(powerup);

powerup2 = this.game.add.sprite(500,300, 'power_up')
powerup2.anchor.setTo(0.5, 0.5);
powerup2.scale.setTo(3,3);
this.game.physics.arcade.enable(powerup2);
this.game.world.addChild(powerup2);
powerup2.body.collideWorldBounds = true;

arrayP.push(powerup2);

powerup3 = this.game.add.sprite(650, 300, 'power_up')
powerup3.anchor.setTo(0.5, 0.5);
powerup3.scale.setTo(3,3);
this.game.physics.arcade.enable(powerup3);
this.game.world.addChild(powerup3);
powerup3.body.collideWorldBounds = true;

arrayP.push(powerup3)

powerup4 = this.game.add.sprite(800, 300, 'power_up')
powerup4.anchor.setTo(0.5, 0.5);
powerup4.scale.setTo(3,3);
this.game.physics.arcade.enable(powerup4);
this.game.world.addChild(powerup4);
powerup4.body.collideWorldBounds = true;

arrayP.push(powerup4)

powerup5 = this.game.add.sprite(950, 300, 'power_up')
powerup5.anchor.setTo(0.5, 0.5);
powerup5.scale.setTo(3,3);
this.game.physics.arcade.enable(powerup5);
this.game.world.addChild(powerup5);
powerup5.body.collideWorldBounds = true;

arrayP.push(powerup5)

velMultiplier = 1;

level.resizeWorld();
  },



  update: function ()
  {
    gameOver();
    if(akey.isDown)
    {
      //this.game.state.start('menu',true , false);
      //music.destroy();
      //this.game.paused = true;

    }
    if(!(target.x < this.game.world.width - this.game.camera.width))
    target_vel = 0;
    target.x +=target_vel;

    spriteGroup.x = this.game.camera.x;;


    txt.setText("  Score : " + points + "        Lifes : " + playerLives);
    


    //colisiones.debug = true;


    spawnEnemy(arrayX_Enemy_1, arrayPosicionesEnemigos_1, 'enemy_1', enemy_1Vel, enemy_1Lives, 1);
    spawnEnemy(arrayX_Enemy_2, arrayPosicionesEnemigos_2, 'enemy_2', enemy_2Vel, enemy_2Lives, 2);
    spawnEnemy(arrayX_Enemy_3, arrayPosicionesEnemigos_3, 'enemy_3', enemy_3Vel, enemy_3Lives, 3);
    spawnEnemy(arrayX_Enemy_4, arrayPosicionesEnemigos_4, 'enemy_4', enemy_4Vel, enemy_4Lives, 4);
    spawnEnemy(arrayX_Enemy_5, arrayPosicionesEnemigos_5, 'roca', 0, 0, 5);

    upgradesSprites();

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
        //this.game.physics.arcade.overlap(player, enemyArray[i], collisionHandler, null, this);
    }


    //this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_1, collisionHandler, null, this);
    //this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_2, collisionHandler, null, this);s
    //this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_3, collisionHandler, null, this);
    //this.game.physics.arcade.overlap(weapons[currentWeapon], enemy_4, collisionHandler, null, this);
    this.collisionDetected = false;
    this.currentEnemy = 0;


    while(!this.collisionDetected && this.currentEnemy < enemyArray.length){
      if(this.game.physics.arcade.overlap(player, enemyArray[this.currentEnemy])){
        this.collisionDetected = true;
        console.log("ha colisionado");
      }
      this.currentEnemy ++;
    }

    if(this.collisionDetected)
    {
      if(shield)
      {
        for(var i = 0; i<enemyArray.length; i++ ){
          this.game.physics.arcade.overlap(weapons[currentWeapon], enemyArray[i], collisionHandler, null, this);
          this.game.physics.arcade.overlap(player, enemyArray[i], collisionHandler, null, this);
      }
  
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

        for(var i = 0; i<enemyArray.length; i++ ){
          this.game.physics.arcade.overlap(weapons[currentWeapon], enemyArray[i], collisionHandler, null, this);
          this.game.physics.arcade.overlap(player, enemyArray[i], collisionHandler, null, this);
      }
  
        //this.game.physics.arcade.overlap(player, enemy_1, collisionHandler, null, this);
        //this.game.physics.arcade.overlap(player, enemy_2, collisionHandler, null, this);
        //this.game.physics.arcade.overlap(player, enemy_3, collisionHandler, null, this);
        //this.game.physics.arcade.overlap(player, enemy_4, collisionHandler, null, this);
      }
    }

for(var z = 0; z<arrayP.length; z++)
    this.game.physics.arcade.overlap(player, arrayP[z], collisionHandler2, null, this);
/*
    if(this.game.physics.arcade.overlap(player, powerup))
    {
      collisionHandler2(powerup, player);
      currentUpgrade++;
      if(currentUpgrade > upgrades.length)
      {
        currentUpgrade = 1;
      }
    }

    if(this.game.physics.arcade.overlap(player, powerup2))
    {
      collisionHandler2(powerup2, player);
      currentUpgrade++;
      if(currentUpgrade > upgrades.length)
      {
        currentUpgrade = 1;
      }
    }
    if(this.game.physics.arcade.overlap(player, powerup3))
    {
      collisionHandler2(powerup3, player);
      currentUpgrade++;
      if(currentUpgrade > upgrades.length)
      {
        currentUpgrade = 1;
      }
    }
    if(this.game.physics.arcade.overlap(player, powerup4))
    {
      collisionHandler2(powerup4, player);
      currentUpgrade++;
      if(currentUpgrade > upgrades.length)
      {
        currentUpgrade = 1;
      }
    }
    if(this.game.physics.arcade.overlap(player, powerup5))
    {
      collisionHandler2(powerup5, player);
      currentUpgrade++;
      if(currentUpgrade > upgrades.length)
      {
        currentUpgrade = 1;
      }
    }
*/

    //this.game.camera.x = target.x;


    nuestraCamara.x = target.x;

    if(player.x<target.x)
    player.x = target.x;

   // for(var i = 0; i<enemyArray.length; i++ )
    //{
     // this.game.debug.body(enemyArray[i]);
    //}
    

    //this.game.debug.body(player);
  },

};   
//////////////////////////////
//Funciones Auxiliares independientes de la jerarquía
function collisionHandler2(obj1, obj2){
  obj2.kill();

  currentUpgrade++;
  if(currentUpgrade > upgrades.length)
  {
    currentUpgrade = 1;
  }
}

function collisionHandler(obj1, obj2)
{

if(obj1._velocity !== 0 ){
   obj1.kill();
   explode(obj1.x,obj1.y);
   points+=50;
}
else {  explosion.play();
  explode(obj2.x,obj2.y);
}

  //Enemy_5
  obj2.kill();
  
  //explosion.play();
  if(obj1 === player){
  playerAlive = false;
  points -= 200;
  if (points<=0){
    points = 0;
  }
    playerLives --;
    playerArray.shift();

    if(target.x >= 400)
    target.x -= 300;
    else target.x = 0;
    var playerPos = new pos(target.x + 50, posYPlayerIni);
    create_player(this.game,playerPos, 'naves', playerVel, playerLives);
  }
  // nos permite cohibir el disparo en caso de que se destruya nuestra 

 // if(obj2 = Enemy){// para saber si un determinado elemento es de tipo alguno de los padres de la herencia se hace con el comparador "="
 //   explode();

    // este método nos gestiona las colisiones, aquí tendremos que lanzar los métodos pertinentas para el caso de que se produzcan estas colisiones
//}
}

function start(){
  music.play();
  music.loop = true;
  shootSound.onStop.add(soundStopped, this);
  explosion.onStop.add(soundStopped, this);



}

function canICreateMyself(posX){
  if(posX < nuestraCamara.x + nuestraCamara.width + 2000){ return true; }
  else return false;
}

function isOnCamera(posX){
if(posX < nuestraCamara.x + nuestraCamara.width + 20){ return true; }
else return false;
}


function upgradesSprites(){
if(currentUpgrade === 0){
  shieldSprite.frameName = 'blueshield';
  optionSprite.frameName = 'blueoption';
  laserSprite.frameName = 'bluelaser';
  doubleSprite.frameName = 'bluedouble';
  missileSprite.frameName = 'bluemissile';
  speedSprite.frameName = 'bluespeed';
}
else if (currentUpgrade === 1){
  speedSprite.frameName = 'orangespeed'
}
else if (currentUpgrade === 2){ missileSprite.frameName = 'orangemissile'}
else if (currentUpgrade === 3){ doubleSprite.frameName = 'orangedouble'}
else if (currentUpgrade === 4){ laserSprite.frameName = 'orangelaser'}
else if (currentUpgrade === 5){ optionSprite.frameName = 'orangeoption'}
else if (currentUpgrade === 6){ shieldSprite.frameName = 'orangeshield'}
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
      else if(enemy_Type===5)
      createEnemy_5(nuestroJuego, enemy_pos_array[j],enemySpriteName,enemyVel,enemyLives);
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

function explode(posExplosionx,posExplosiony){
  explosion.play();

var explode = nuestroJuego.add.sprite(posExplosionx,posExplosiony, 'enemy_2');
explode.scale.setTo(2,2);
explode.anchor.setTo(0.5,0.5);
explode.killOnComplete = true;
explode.animations.add('poom', Phaser.Animation.generateFrameNames('Enemies_Exp_', 1, 3), 5, true);
explode.animations.play('poom', 8 ,false, true);

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

function createEnemy_1(juego, posicion, spriteName, velocidad, vidas){
  var ene = new Enemy_1(juego, posicion, spriteName, velocidad, vidas);
  ene.anchor.setTo(0.5, 0.5);
  ene.scale.setTo(2, 2);

  ene.animations.add('oscilate', Phaser.Animation.generateFrameNames('Enemy_1_', 1, 3), 5, true);
  //ene.animations.add('swim', 'Enemy_1_1', 'Enemy_1_3');
  ene.animations.play('oscilate', 8 ,true);

  juego.physics.arcade.enable(ene);
  juego.world.addChild(ene);
  enemyArray.push(ene);

}


function create_player(juego, posicion, spriteName, velocidad, vidas){

  player = new Player(juego, posicion ,spriteName, velocidad, vidas);
  player.anchor.setTo(0.5, 0.5);
  player.scale.setTo(3,3);
  juego.physics.arcade.enable(player);
  juego.world.addChild(player);
  player.body.collideWorldBounds = true;
  playerArray.unshift(player);

}

function createEnemy_2(juego, posicion, spriteName, velocidad, vidas){
  var ene2 = new Enemy_2(juego, posicion, spriteName, velocidad, vidas);
  ene2.anchor.setTo(0.5, 0.5);
  ene2.scale.setTo(2, 2);
  juego.physics.arcade.enable(ene2);
  juego.world.addChild(ene2);
  enemyArray.push(ene2);

}

function createEnemy_3(juego, posicion, spriteName, velocidad, vidas){
  var ene3 = new Enemy_3(juego, posicion, spriteName, velocidad, vidas);
  ene3.anchor.setTo(0.5, 0.5);
  ene3.scale.setTo(2, 2);

  ene3.animations.add('oscilate3', Phaser.Animation.generateFrameNames('Enemy_3_', 1, 4), 5, true);
  //ene.animations.add('swim', 'Enemy_1_1', 'Enemy_1_3');
  ene3.animations.play('oscilate3', 8 ,true);

  juego.physics.arcade.enable(ene3);
  juego.world.addChild(ene3);
  enemyArray.push(ene3);

}

function createEnemy_4(juego, posicion, spriteName, velocidad, vidas){
  var ene4 = new Enemy_4(juego, posicion, spriteName, velocidad, vidas);
  ene4.anchor.setTo(0.5, 0.5);
  ene4.scale.setTo(2, 2);

  ene4.animations.add('oscilate4', Phaser.Animation.generateFrameNames('Enemy_4_', 1, 4), 5, true);
  //ene.animations.add('swim', 'Enemy_1_1', 'Enemy_1_3');
  ene4.animations.play('oscilate4', 8 ,true);


  juego.physics.arcade.enable(ene4);
  juego.world.addChild(ene4);
  enemyArray.push(ene4);

}

function createEnemy_5(juego, posicion, spriteName, velocidad, vidas){
  var ene5 = new Enemy_5(juego, posicion, spriteName, velocidad, vidas);
  ene5.anchor.setTo(0.5, 1);
  ene5.scale.setTo(3, 3);
  juego.physics.arcade.enable(ene5);
  juego.world.addChild(ene5);
  enemyArray.push(ene5);

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

function upgradesHandler(n)
{
  //en este momento es en el que tenemos que poner el sprite a naranja
  if(n === 1)
  {
    velMultiplier += 1;
  }
  else if(n == 2)
  {
    currentWeapon = 2;
  }
  else if(n == 3)
  {
    currentWeapon = 1;
  }
  else if(n == 4)
  {
    currentWeapon = 4;
  }
  else if(n == 5)
  {
    createSecondPlayer();
    //Hay que llamar a la nave auxiliar
  }
  else if(n == 6)
  {
    shield = true;
  }


}

function gameOver(){
if(playerLives === 0){
  var gameEndSprite = nuestroJuego.add.sprite( nuestroJuego.camera.x + nuestroJuego.camera.width/2, nuestroJuego.camera.y + nuestroJuego.camera.height/2, 'ended');
  gameEndSprite.anchor.setTo(0.5,0.5);
  gameEndSprite.scale.setTo(0.7,0.7);

  var puntsSprite = nuestroJuego.add.sprite( gameEndSprite.x -gameEndSprite.width/2 , gameEndSprite.y + 50, 'punts');
  puntsSprite.anchor.setTo(0.5,0.5);
  puntsSprite.scale.setTo(0.5,0.5);

  var textopunts =  nuestroJuego.add.text(gameEndSprite.x , gameEndSprite.y + 50, points , {font: "40px Italic", fill:"#ffff", align: "center"});
  textopunts.anchor.setTo(0.5,0.5);

  var pressSprite = nuestroJuego.add.sprite( gameEndSprite.x-gameEndSprite.width/2 , gameEndSprite.y + 100, 'press');
  pressSprite.anchor.setTo(0,0.5);
  pressSprite.scale.setTo(0.5,0.5);

  music.destroy();
  nuestroJuego.paused = true;
}


}


//Objetos móviles
function Movable(game, position, sprite, velocity)
{
  Phaser.Sprite.apply(this, [game, position._x, position._y, sprite]);
  this._velocity = velocity;
}

Movable.prototype = Object.create(Phaser.Sprite.prototype);
Movable.prototype.constructor = Movable;



function HUD(game, position, sprite, velocity){
  Movable.apply(this, [game, position, sprite, velocity]); 
}
HUD.prototype = Object.create(Movable.prototype);
HUD.prototype.constructor = HUD;


HUD.prototype.Movement = function(){
}


HUD.prototype.update = function(){
  // habrá que crearlo y movel la posicion  
this.Movement();

} 

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
      this.body.x -= this._velocity * velMultiplier;

  }
  else if (rightKey.isDown)
  {
    this.body.x += this._velocity * velMultiplier;

  }

  if (upKey.isDown)
  {
    this.body.y -= this._velocity * velMultiplier;
      player.frameName = 'down';
  }
  else if (downKey.isDown)
  {
    this.body.y += this._velocity * velMultiplier;
      player.frameName = 'up';
  }  else {
    player.frameName = 'front';
  }

  if(spacebarKey.isDown)
  {
    weapons[currentWeapon].fire(player);
    //this.game.paused = true;
  }
  if(xKey.isDown && currentUpgrade > 0)
  {
    upgradesHandler(currentUpgrade);
    currentUpgrade = 0;
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
  shootSound.play();
  
};

Bullet.prototype.update = function(){
if(this.body.x > this.game.camera.x + this.game.camera.width || this.body.y > this.game.camera.y + this.game.camera.height || this.body.y < this.game.camera.y)
this.kill();  
}

var Weapon = {};

//Clase que hereda de Phaser group
Weapon.SingleBullet = function (game) 
{
  
  Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
  
  this.nextFire = 0;
  this.bulletSpeed = 1200;
  this.fireRate = 250;
  
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
    this.bulletSpeed = 1200;
    this.fireRate = 250;
    
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
    this.bulletSpeed = 1200;
    this.fireRate = 250;
    
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
    this.bulletSpeed = 1200;
    this.fireRate = 250;
      
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
    this.bulletSpeed = 1400;
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
      //this.x-= 2 * target_vel;
      this.x-=this._velocity;
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
    this.frameName = "Enemy_2_3";
    this.y--;
    
  }
  else if(this.y < player.y)
  {
    this.frameName = "Enemy_2_1";
    this.y++;

  }
  else{
    this.frameName = "Enemy_2_2";
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

  this._iniY = position.y;
  this._up = false;
  this._max_y = 5;
}

Enemy_3.prototype = Object.create(Enemy.prototype);
Enemy_3.prototype.constructor = Enemy_3;



Enemy_3.prototype.Movement = function()
{
  

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

  this._found = false;
  this._localized = false;
  this._upMovement = false;
  this._downMovement = false;

}

Enemy_4.prototype = Object.create(Enemy.prototype);
Enemy_4.prototype.constructor = Enemy_4;


Enemy_4.prototype.Movement = function()
{



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


function Enemy_5(game, position, sprite, velocity, lives)
{
  Enemy.apply(this, [game, position, sprite, velocity, lives]);
}

Enemy_5.prototype = Object.create(Enemy.prototype);
Enemy_5.prototype.constructor = Enemy_5;


module.exports = PlayScene;
},{}]},{},[5]);
