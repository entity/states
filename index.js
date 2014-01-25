
/*!
 *
 * states
 *
 * hierarchical object states
 *
 * MIT
 *
 */

/**
 * Module dependencies.
 */

var merge = require('merge');

/**
 * Expose `states`.
 */

module.exports = states;

/**
 * Factory `state`.
 *
 * @return {Function}
 * @api public
 */

function states(){
  state.defs = {};
  state.stack = [];

  merge(state, proto);

  return state;

  /**
   * Define state `s` with `obj`.
   *
   * @param {String} s
   * @param {Object} obj
   * @api public
   */

  function state(s, obj){
    state.defs[s] = obj;
  }
}

/**
 * Proto.
 */

var proto = {};

/**
 * Push state `s` to stack.
 *
 * @param {String} s
 * @api public
 */

proto.push = function(s){
  this.stack.push(s);
  merge(this, this.defs[s]);
};

/**
 * Pop state from stack.
 *
 * @api public
 */

proto.pop = function(){
  this.stack.pop();

  var cur = this.stack[this.stack.length - 1];
  if (!cur) return;

  merge(this, this.defs[cur]);
};
