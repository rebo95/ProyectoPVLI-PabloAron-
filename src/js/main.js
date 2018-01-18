'use strict';

var PlayScene = require('./play_scene.js');
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
    //this.game.load.baseURL = 'https://rebo95.github.io/ProyectoPVLI-PabloAron-/src/';
    //this.game.load.crossOrigin = 'anonymous';
    
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);
//



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
    this.game.load.image('winer', IMAGE_PATH + 'winer.png');
    

    //sound assets
    //music
    this.game.load.audio('menuMusic','audio/menuMusic.mp3' );
    this.game.load.audio('gameMusic','audio/gameMusic.mp3' );

    //sound effects
    this.game.load.audio('explosion','audio/explosion.mp3' );
    this.game.load.audio('blaster', 'audio/sfx.mp3' );
    this.game.load.audio('powerUpSound','audio/powerUpTaked.mp3' );
    this.game.load.audio('powerUpSelected', 'audio/power_up_selected.mp3' );
    this.game.load.audio('accelerate','audio/aceleron.mp3' );
    this.game.load.audio('turboExplosion', 'audio/tubo.mp3' );
    this.game.load.audio('tueboBlaster', 'audio/turboon.mp3' );
    
    // TODO: load here the assets for the game
  
    
    this.game.load.atlas('naves',  IMAGE_PATH + 'shipSheet.png',  IMAGE_PATH + 'spritesShip.json');
    this.game.load.atlas('habilidades',  IMAGE_PATH + 'habilities.png',  IMAGE_PATH + 'habilitiesJSON.json');
    this.game.load.atlas('playSprite',  IMAGE_PATH + 'playSheet.png',  IMAGE_PATH + 'playJSON.json');
    this.game.load.atlas('controlsSprite',  IMAGE_PATH + 'controlssheet.png',  IMAGE_PATH + 'controlsJSON.json');
    this.game.load.atlas('creditsSprite',  IMAGE_PATH + 'creditssheet.png',  IMAGE_PATH + 'creditsJSON.json');
    this.game.load.atlas('menuSprite',  IMAGE_PATH + 'menusheet.png',  IMAGE_PATH + 'menuJSON.json');
    this.game.load.atlas('escudo',  IMAGE_PATH + 'escudosheet.png',  IMAGE_PATH + 'escudoJSON.json');

    this.game.load.atlas('enemy_1',  IMAGE_PATH + 'enemy1sheet.png',  IMAGE_PATH + 'enemy1JSON.json');
    this.game.load.atlas('enemy_2',  IMAGE_PATH + 'enemy2sheet.png',  IMAGE_PATH + 'enemy2JSON.json');
    this.game.load.atlas('enemy_3',  IMAGE_PATH + 'enemy3sheet.png',  IMAGE_PATH + 'enemy3JSON.json');
    this.game.load.atlas('enemy_4',  IMAGE_PATH + 'enemy4sheet.png',  IMAGE_PATH + 'enemy4JSON.json');
    this.game.load.atlas('pausaSprite',  IMAGE_PATH + 'pausasheet.png',  IMAGE_PATH + 'pausaJSON.json');
    
    this.game.load.image('roca', IMAGE_PATH + 'Enemy_4_Respawn.png');
    this.game.load.image('power_up', IMAGE_PATH + 'PowerUp_1.png');
    this.game.load.image('secondShip', IMAGE_PATH + 'Nave_Exp_3.png');
    this.game.load.image('controlsPNG', IMAGE_PATH + 'controles.png');


    //Cargas de las balas
    this.game.load.image('bullet_1', IMAGE_PATH + 'Double_1.png');
    this.game.load.image('laser', IMAGE_PATH + 'laser.png');


    //cargas necesarias para el tiled y el mapa
    this.load.tilemap('level', './images/mapaPrueba2.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tilespng', 'images/tiles.png');
  },

  create: function () {
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


  
  game.state.start('boot');
};
