'use strict';

var PlayScene = require('./play_scene.js');


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
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('fondo', 'images/background.jpg');
    this.game.load.image('nave', 'images/nave.png');
    this.game.load.image('laser', 'images/phaser.png')
  },

  create: function () {
    this.game.state.start('play');
  }
};


window.onload = function () {//esto se ejecuta cuando la ventana se carga 
  //se produce una llamada en cadena a los diferentes métodos
  // primero se añaden al entorno y se les asigna un tag con el 
  // que llamarlos más fácilmente 
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
  
  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);


  game.state.start('boot');
};
