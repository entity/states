
/**
 * Test.
 */

var assert = require('assert');
var states = require('..');

var entity = states();

entity('human', {
  speak: function(){
    return 'hello, world';
  }
});

entity('doge', {
  speak: function(){
    return 'such world, wow';
  }
});

entity.push('human');
assert('hello, world' === entity.speak());

entity.push('doge');
assert('such world, wow' === entity.speak());

entity.pop();
assert('hello, world' === entity.speak());

entity.pop();
assert('hello, world' === entity.speak());

console.log('done');
