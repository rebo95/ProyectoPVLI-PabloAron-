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