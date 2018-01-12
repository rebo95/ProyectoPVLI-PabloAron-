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