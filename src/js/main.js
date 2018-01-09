'use strict';

var PlayScene = require('./play_scene.js');
var MainMenu = require ('./initialMenu.js') 
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




    //Menu assets
    this.game.load.image('titlescreen', IMAGE_PATH + 'Gradius.jpg');
    this.game.load.image('blackRectangle', IMAGE_PATH + 'blackR.png');
    
    //sound assets
    //music
    this.game.load.audio('menuMusic','audio/menuMusic.mp3' )
    this.game.load.audio('gameMusic','audio/gameMusic.mp3' )

    //sound effects
    this.game.load.audio('explosion','audio/explosion.mp3' )
    this.game.load.audio('blaster', 'audio/sfx.mp3' );
    
    // TODO: load here the assets for the game
    this.game.load.image('ship', IMAGE_PATH + 'futurama.png'); 
    
    this.game.load.atlas('naves',  IMAGE_PATH + 'naveSprite.png',  IMAGE_PATH + 'naveJson.json');
    
    this.game.load.image('power_up', IMAGE_PATH + 'PowerUp_1.png')

    //Cargas de los enemigos
    this.game.load.image('enemy_1', IMAGE_PATH + 'meteorite.png');
    this.game.load.image('enemy_2', IMAGE_PATH + 'n.png');
    this.game.load.image('enemy_3', IMAGE_PATH + 'futurama.png');
    this.game.load.image('enemy_4', IMAGE_PATH + 'Power_Up.png');
    
    //Cargas de las balas
    this.game.load.image('bullet_1', IMAGE_PATH + 'bullet1.png');
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
  game.state.add('menu', MainMenu);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};
