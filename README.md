# angular-webpack-spa
A demo for building a SPA using Angular and build with webpack.

[Demo](http://neekey.github.io/angular-webpack-spa/build/)

### Usage

#### build

```
npm run build
```

#### development.

```
npm run dev
```

#### unit test

you need to start dev server first `npm run dev`, than start karma test `npm run unit`. after karma starts, it will keep on watching the files change.

#### e2e test

start a Selenium Server first by running `npm run webdriver`, also start dev server `npm run dev`. then begin test by running `npm run e2e`.

#### production debug

we use anyproxy as a http proxy tool to proxy online assets to local. If you want to debug production page, first start dev server, than configure `./config/anyproxy.rule.json` with your production info, after that, start the anyproxy service by `npm run debu`.

after you have done all above, set up you browser or system network to proxy to anyproxy server ( defaults to localhost:8001 ).


### How does it work

- asynchronously load pages using `require.ensure()`
- use `angular-delay-register` to implement lazy component register.
- use `ng-annotate` to compress js
- use `sass-loader` to compile style
- use `url-loader` to load images
- auto build `route.js` based on directory structure.
- karma test
- production debug
- ESLint integration.

### Rules to follow

- use `"ngInject";` whenever you need to inject independence.
- use `registerDirective()`, `registerController()`, `registerService()`, `registerFilter()` to registerComponent
- add `route.json` into your page directory ( like `profile/route.json` ) to customize the route configuration.

### Compatibility

- IE9+
- Chrome
- Safari
- Firefox

