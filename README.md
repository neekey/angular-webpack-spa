# angular-webpack-spa
A demo for building a SPA using Angular and build with webpack

### Usage

build

```
npm run build
```

development

```
npm run dev
```

### How does it work

- use futureState to implement delayed state definition.
- asynchronously load pages using `require.ensure()`
- use `angular-delay-register` to implement lazy component register.
- use `ng-annotate` to compress js
- use `sass-loader` to compile style
- use `url-loader` to load images

### Rules to follow

- use `"ngInject";` whenever you need to inject independence.
- use `registerDirective()`, `registerController()`, `registerService()`, `registerFilter()` to registerComponent

### Issues

- `$urlRouterProvider.otherwise( '/' );` is not working.

### Compatibility

- IE9+
- Chrome
- Safari
- Firefox

