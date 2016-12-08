// jshint esversion: 6
var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extendMod = require('./extend');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

SmartPhone.prototype = Object.create(Phone.prototype);
extendMod(SmartPhone, Tablet);
extendMod(SmartPhone, GameConsole);
extendMod(SmartPhone, WebBrowser);

module.exports = SmartPhone;