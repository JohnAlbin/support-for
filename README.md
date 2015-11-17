# support-for

The `support-for` module is designed to be used by developers to ease conditional browser support while authoring their Sass module.

Users of a module that uses support-for can specify which browser versions they want to support by setting a simple Sass variable, `$support-for`.

Here are some example usages:

1. The Sass developer only wants to support Safari 8 and later (and no other browsers) because he is an asshole.

```scss
$support-for: (
  safari: 8,
);

// Normalize-scss uses support-for.
@import "normalize";
```

2. The Sass developer wants to support the 4 most recent versions of all browsers which she can do by setting the wildcard browser, `'*'`. She has has to support IE 6 and later because the client hates her.

```scss
$support-for: (
  '*': -4,
  ie: 6,
);

@import "normalize";
```

3. The Sass developer is working for a government client and every browser version has a specific version specified in the contract.

```scss
$support-for: (
  chrome:  29,
  edge:    20,
  firefox: 26,
  ie:      8,
  opera:   14,
  safari:  5,
);

@import "normalize";
```

## Updating your module to use `support-for`

### Ruby Sass

Alter your `my-module.gemspec` file:

1. Find the line for your module's Sass dependency. It should look similar to this:
  ```
  s.add_runtime_dependency('sass', '~> 3.3')
  ```
2. Just after that line, add this:
  ```
  s.add_runtime_dependency('support-for', '~> 1.0')
  ```

### NPM (and node-sass)

Add your dependency with the following command:
```
npm install --save support-for
```

### Bower

Add your dependency with the following command:
```
bower install --save support-for
```

### Update your Sass partials

Inside your Sass partials you can wrap some lines of CSS with an `@if` block that uses the `support-for()` function.

```
@mixin my-sweet-sweet-mixin($cocoa: lots) {
  border-radius: 100%;
  @if support-for(ie, 10) {
    // Remove border when applied to an `img` inside an `a` element in IE 8/9/10.
    border: 0;
  }
}
```

[![Build Status](https://travis-ci.org/JohnAlbin/support-for.png?branch=master)](https://travis-ci.org/JohnAlbin/support-for)
