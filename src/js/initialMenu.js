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
    logo.scale.setTo(0.15, 0.15);

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


    controlsBoton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 30, 'blackRectangle', actionOnClickPlay, this, 2,1,0);
    controlsBoton.anchor.setTo(0.5,0.5);
    controlsBoton.scale.setTo(1, 0.4);

    controlsSprite = this.game.add.sprite(controlsBoton.x, controlsBoton.y, 'controlsSprite');
    controlsSprite.anchor.setTo(0.5,0.5);
    controlsSprite.scale.setTo(0.7,0.7);



    creditsBoton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'blackRectangle', actionOnClickPlay, this, 2,1,0);
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
    this.game.cache.removeSound('menuMusic');
    this.game.state.start('play');
}
function actionOnClickControls()
{
    music.destroy();
    this.game.cache.removeSound('menuMusic');
    this.game.state.start('controls');
}
function actionOnClickCredits()
{
    music.destroy();
    this.game.cache.removeSound('menuMusic');
    this.game.state.start('credits');
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
    creditsSprite .frameName = "redcredits";
    shootSound.play();

}
function creditsout(){
    //txt.fill = '#ffff';
    creditsSprite .frameName = "bluecredits";
}



module.exports = MainMenu;