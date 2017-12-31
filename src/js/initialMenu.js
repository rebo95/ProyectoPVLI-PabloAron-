'use strict';


var arribaTecla;

var mouseButton;

var fondo;
var boton;

var music;
var txt;

var MainMenu = {
    create : function(){

        music = this.game.add.audio('menuMusic');
        this.game.sound.setDecodedCallback([music], start, this);
        
    },


    update: function(){
        //enemigo.x++;}
    },

};

function start(){
    music.play();

    this.game.stage.backgroundColor = '#182d3b';
    fondo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'titlescreen' );
    fondo.anchor.setTo(0.5, 0.5);
    fondo.scale.setTo(2, 2);

    boton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'blackRectangle', actionOnClick, this, 2,1,0);
    boton.anchor.setTo(0.5,0.5);
    boton.scale.setTo(1, 0.5);

    txt = this.game.add.text(boton.x, boton.y, "Play" , {font: "20px Italic", fill:"#ffff", align: "center"});
    txt.anchor.setTo(0.5,0.5);
    
    boton.onInputOver.add(over, this);
    boton.onInputOut.add(out, this);
   
    //enemigo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'enemy_1' );
    arribaTecla = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    mouseButton = this.game.input.activePointer.leftButton;
}


function actionOnClick()
{
    music.destroy();
    this.game.cache.removeSound('menuMusic');
    this.game.state.start('play');
}


function over(){
    txt.fill = '#ff00ff';
}
function out(){
    txt.fill = '#ffff';
}

module.exports = MainMenu;