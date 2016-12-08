// jshint esversion: 6
var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extendMod = require('./extend');

function SmartWatch() {
  Watch.call(this, null);
}



SmartWatch.prototype = Object.create(Watch.prototype);
extendMod(SmartWatch, Tablet);

module.exports = SmartWatch;