
/**
 * dependencies
 */

var keycode = require('keycode');

/**
 * Invoke the given `fn(e)` when `keys` are pressed within `ms`.
 * 
 * Example:
 * 
 *      // in this case the callback will be invoked
 *      // when `f` is pressed and within `ms` (300)
 *      // `g` is also pressed, otherwise the callback
 *      // will never be invoked.
 *       
 *      window.onkeyup = combo(['f', 'g'], 300, function(e){});
 * 
 * @param {String} keys
 * @param {Number} ms optional
 * @param {Function} fn
 * @return {Function}
 */

module.exports = function(keys, ms, fn){
  var one = keycode(keys[0])
    , two = keycode(keys[1])
    , at;

  // default ms to 300
  if (!fn) fn = ms, ms = 300;

  // handler.
  return (function(e){
    if (one == e.which) at = new Date;
    if (two != e.which) return;
    if ((new Date - at) > ms) return;
    fn(e);
  });
};
