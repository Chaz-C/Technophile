// jshint esversion: 6
var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(this, null);
}

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

SmartWatch.prototype = Object.create(Watch.prototype);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;