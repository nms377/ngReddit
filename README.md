# Angular 1.x Webpack ES6

Setup

1. create a new github project named ngReddit
1. clone your new github project
1. change directory into ngReddit
1. grab the starter kit source files from @preboot
    - `git remote add preboot_origin https://github.com/preboot/angular-webpack.git`
    - `git fetch preboot_origin`
    - ```git checkout `git log preboot_origin/master | head -n 1 | awk '{print $2}'` .```
1. commit
1. test it out (read the README.md)
    -. `yarn install`
    -. `npm start`

# Exercise

goals

- webpack
- use es6 classes
- ui-router
- xhr calls

spec

- 1 "app" module
- 4 "states"
    - default
        - controller
        - template
    - aww
        - controller
        - service
        - template
    - programmerhumor
        - controller
        - service
        - template
    - mechanicalkeyboards
        - controller
        - service
        - template
- 1 directive
    - thumb
        - directive
- default has links to spa routes
    - /aww
        - renders just thumbnails
    - /programmerhumor
        - renders titles thumbnails
    - /MechanicalKeyboards
        - renders titles thumbnails links
    - /eyebleach
        - renders clickable titles that reveal full image

steps

1. remove AppCtrl
1. create default state
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. add nav route
1. add ui-router
    1. import `*` as `uiRouter`
    1. import default state
    1. load `'ui.router'` into app module
    1. add `<section ui-view>`
    1. configure `$stateProvider`
        - _"Home should be clickable"_
    1. run `$state.go`
1. create aww state
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. import aww state
    1. add nav route
1. create aww service
    1. returns async xhr promise
    1. add `error` and `posts` to `$scope`
    1. display list of thumbnails
    1. a bit of css
1. create programmerhumor state and service
    1. state.js
    1. controller.js
    1. index.js
    1. template.html
    1. import aww state
    1. add nav route
    1. create service
    1. display list of thumbnails and titles
    1. a bit of css
1. make AwwState thumbnails expandable
1. create a Thumb directive to make all thumbnails expandable

---

# angular-webpack

[![Dependency Status](https://david-dm.org/preboot/angular-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular-webpack/dev-status.svg)](https://david-dm.org/preboot/angular-webpack#info=devDependencies)

A complete, yet simple, starter for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack 2.x. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/preboot/angular-webpack.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
