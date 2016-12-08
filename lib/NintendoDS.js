// jshint esversion: 6

var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

NintendoDS.prototype = Object.create(GameConsole.prototype);
extend(NintendoDS, WebBrowser);




module.exports = NintendoDS;