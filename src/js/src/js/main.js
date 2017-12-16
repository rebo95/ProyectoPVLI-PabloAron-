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
    this.game.load.image('enemy_1', IMAGE_PATH + 'meteorite.png');
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