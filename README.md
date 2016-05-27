# angular-webpack-spa
A demo for building a SPA using Angular and build with webpack.

[Demo](http://neekey.github.io/angular-webpack-spa/build/)

### Usage

build

```
npm run build
```

development, which will set up a development server and also a karma unit test watcher.

```
npm run dev
```

e2e test. start a Selenium Server first by running `npm run webdriver`, then begin test by running `npm run e2e`.


### How does it work

- use futureState to implement delayed state definition.
- asynchronously load pages using `require.ensure()`
- use `angular-delay-register` to implement lazy component register.
- use `ng-annotate` to compress js
- use `sass-loader` to compile style
- use `url-loader` to load images
- auto build `route.js` based on directory structure.
- karma test

### Rules to follow

- use `"ngInject";` whenever you need to inject independence.
- use `registerDirective()`, `registerController()`, `registerService()`, `registerFilter()` to registerComponent
- add `route.json` into your page directory ( like `profile/route.json` ) to customize the route configuration.

### Issues

- `$urlRouterProvider.otherwise( '/' );` is not working.

### Todo

- add travis-ci, see http://karma-runner.github.io/0.13/plus/travis.html

### Compatibility

- IE9+
- Chrome
- Safari
- Firefox

