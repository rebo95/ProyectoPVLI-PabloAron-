(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    //this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {

    this.game.load.baseURL = 'https://rebo95.github.io/ProyectoPVLI-PabloAron-/src/';
    this.game.load.crossOrigin = 'anonymous';
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

},{"./play_scene.js":2}],2:[function(require,module,exports){
'use strict';
var nave;
var lasers;
var fireCounter= 0;
var fireRate = 10;
var fire = false;

var PlayScene = {
  
  create: function () {

    var fondo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'fondo');
    fondo.anchor.setTo(0.5, 0.5);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.physics.setBoundsToWorld();


    nave = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'nave');
    nave.anchor.setTo(0.5, 0.5);
    nave.scale.setTo(0.2,0.2);

    lasers = this.game.add.group();
    lasers.enableBody = true;
    lasers.physicsBodyType = Phaser.Physics.ARCADE;
    lasers.createMultiple(5, "laser");
    lasers.setAll('checkWorldBounds', true);
    lasers.setAll('outOfBoundsKill', true);

  },



update: function(){
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
      nave.x -= 4;

  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
      nave.x += 4;
  }

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
  {
      nave.y -= 4;
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
  {
      nave.y += 4;
  }

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
if(lasers.countLiving()<5)
  if(!fire){
        var laser = lasers.getFirstDead();
        //var laser = lasers.create(nave.x,nave.y, 'laser');
        laser.reset(nave.x, nave.y);
        laser.scale.setTo(0.1,0.1);
        laser.body.velocity.x = 500;
        fire = true ;
  }
  }
  if (fire){
    fireCounter++;
    if(fireCounter>fireRate){
      fire = false;
      fireCounter = 0;
    }
  }       


  

},

};

module.exports = PlayScene;

},{}]},{},[1]);
