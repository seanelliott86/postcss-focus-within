# PostCSS Focus Within [![Build Status][ci-img]][ci]

[PostCSS] plugin adds fallback for focus-within.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/seanus1138/postcss-focus-within.svg
[ci]:      https://travis-ci.org/seanus1138/postcss-focus-within

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

## Usage

```js
postcss([ require('postcss-focus-within') ])
```

See [PostCSS] docs for examples for your environment.
