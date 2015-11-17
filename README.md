# support-for

The `support-for` module is designed to be used by Sass authors to ease conditional browser support while creating their Sass module or Sass partial.

Authors of Sass code that uses support-for can specify which browser versions they want to support by setting a simple Sass variable, `$support-for`.

Here are some example usages:

1. The Sass author only wants to support Safari 8 and later (and no other browsers) because he is an asshole.

```scss
$support-for: (
  safari: 8,
  '*':    null, // null means "no support" and is the
                // default value for any browser not
                // specified in $support-for
);

// Normalize-scss uses support-for.
@import "normalize";
```

2. The Sass author wants to support the 4 most recent versions of all browsers which she can do by setting the wildcard browser, `'*'`. She also has to support IE 6 and later because the client hates her.

```scss
$support-for: (
  '*': -4,
  ie:  6,
);

@import "normalize";
```

3. The Sass author is working for a government client and every browser version has a specific version specified in the contract.

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

### Update your Sass partials to use `support-for()`

If a Sass module tells you that it uses `support-for`, you just need to override the default value of the `$support-for` variable before you import that module. See the examples above about some of your options.

If, however, you want to conditionally include Sass in your CSS output, you can update your Sass code to wrap those lines of CSS with an `@if` block that uses the `support-for()` function.

```
@mixin my-sweet-sweet-mixin($cocoa: lots) {
  border-radius: 100%;

  // Only include this property if we support IE 10.
  @if support-for(ie, 10) {
    // Remove border when applied to an `img` inside an `a` element in IE 8/9/10.
    border: 0;
  }
}
```

If you later drop support for IE 10 (someday!), you just need to update the
`$support-for` variable and your code will stop outputting the IE-10-specific
CSS.

## Updating your module to use `support-for`

If you are a Sass module author wanting to use `support-for` in your module, it's
quite easy to add it.

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

[![Build Status](https://travis-ci.org/JohnAlbin/support-for.png?branch=master)](https://travis-ci.org/JohnAlbin/support-for)
