'use strict';
var map;
var layer;
var PlayScene = {
  create: function () {

    map = this.game.add.tilemap('tilemap',16,16);
    map.addTilesetImage('tilespng');
    layer = map.createLayer(0);
    layer.resizeWorld();
    
  }
};

module.exports = PlayScene;
