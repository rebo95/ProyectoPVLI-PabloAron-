'use strict';

var PlayScene = require('./play_scene.js');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {


    this.game.load.image('fondo', './images/background.jpg');
    this.game.load.image('nave', './images/nave.png');
    this.game.load.image('laser', './images/phaser.png');
       
    this.game.load.tilemap('tilemap', 'images/level2_front.csv');
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
