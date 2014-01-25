
/**
 * Example.
 */

var states = require('./');

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
console.log(entity.speak()); // => 'hello, world'

entity.push('doge');
console.log(entity.speak()); // => 'such world, wow'

entity.pop();
console.log(entity.speak()); // => 'hello, world'
