
describe('combo', function(){

  var combo = require('combo')
    , keycode = require('keycode')
    , el = document.createElement('div');

  describe('combo([f, g], fn)', function(){
    it('should invoke `fn` only if `f` and `g` are pressed within `300ms`', function(){
      var invoked = 0;
      el.onkeyup = combo(['f', 'g'], function(){ invoked++; });
      press('f');
      assert(0 == invoked);
      press('g');
      assert(1 == invoked);
    })

    it('should not invoke `fn` if `g` is pressed after `300ms`', function(done){
      var invoked = 0;
      el.onkeyup = combo(['f', 'g'], function(){ invoked++; });
      press('f');
      assert(0 == invoked);
      setTimeout(function(){
        press('g');
        assert(0 == invoked);
        done();
      }, 301);
    })
  })

  describe('combo([f, g], 200, fn)', function(){
    it('should respect the given `ms`', function(done){
      var invoked = 0;
      el.onkeyup = combo(['f', 'g'], 200, function(){ invoked++; });
      press('f');
      assert(0 == invoked);
      setTimeout(function(){
        press('g');
        assert(1 == invoked);
        done();
      }, 150);
    })

    it('should not invoke `fn` if `g` is pressed after `200ms`', function(done){
      var invoked = 0;
      el.onkeyup = combo(['f', 'g'], 200, function(){ invoked++ });
      press('f');
      assert(0 == invoked);
      setTimeout(function(){
        press('g');
        assert(0 == invoked);
        done();
      }, 201);
    })
  })

  function press(code){
    var e = document.createEvent('Event');
    e.which = e.keyCode = keycode(code);
    e.initEvent('keyup', true, true);
    el.dispatchEvent(e);
  }

  function assert(expr, ms){
    if (!expr) throw new Error(ms || 'error');
  }

});
