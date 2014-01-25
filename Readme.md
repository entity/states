
# states

hierarchical object states

## Installing

`npm install entity/states`

`component install entity/states`

## Example

```js
var states = require('states');

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
```

## API

### states()

Factory `state`.

### state(s, obj)

Define state `s` with `obj`.

### #push(s)

Push state `s` to stack.

### #pop()

Pop state from stack.

## License

MIT
