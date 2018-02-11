# PostCSS Focus Within

[PostCSS] plugin adds fallback for focus-within.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo:focus-within {
    display: block;
}
```

```css
.foo:focus-within {
    display: block;
}

.foo.focus-within {
    display: block;
}
```

## Postcss Usage

```js
postcss([ require('postcss-focus-within') ])
```

See [PostCSS] docs for examples for your environment.


## Additional requirements
To get the full benefit of this plugin a polyfill will need to be included, I recommend Alexander Farkas [simple focus-within polyfill](https://gist.github.com/aFarkas/a7e0d85450f323d5e164).

Include that script as is all the time or dynamically include it based on `:focus-within` support using this tiny script.

```js
!function() {
  var elem = document.createElement('div');

  try {
      elem.querySelector(":focus-within")
    } catch (e) {
      var scriptTag = document.createElement("script");
      // add type, src to picturefill and async tag
      scriptTag.type = "text/javascript", scriptTag.src = "focus-within.js",  scriptTag.setAttribute("async", "");
      // get the head tag
      var headTag = document.getElementsByTagName("head")[0];
      // append script to head tag
      headTag.appendChild(scriptTag)
    }
}();
```
