
# combo

  Keyboard combo like Gmail.

## Installation

    $ component install yields/combo

## Example

```js
window.onkeyup = combo(['f', 'g'], 300, function(e){
  // the method will be invoked only if
  // `f` was pressed and then within `300ms`
  // `g` was pressed as well.
});
```

## License

  MIT
