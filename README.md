# support-for

The `support-for` module is designed to be used by developers to ease conditional browser support while authoring their Sass module.

## Adding a support-for dependency to your module

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
