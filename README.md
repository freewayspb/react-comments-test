# React Widget Library

----
React boilerplate for producing libraries of embeddable widgets. Based 99% upon work by [krasimir](https://github.com/krasimir):

* [Webpack Library Starter](https://github.com/krasimir/webpack-library-starter) *(Webpack based boilerplate for producing libraries - Input: ES6, Output: universal library)*
* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)

----


## Getting started

1. Install the dependencies
	* Run `npm install` or `npm i`
2. Local development
  * Run `npm run build` .
3. Development mode
  * Run `npm start` to generate a non-minified library and a watcher to get compilation on file change.
4. Run the server
  * Start a local server `npm run server` for data server running

## Features

* Webpack-based
* ES6 as a source
* Exports in a [umd](https://github.com/umdjs/umd) format so the library works everywhere
* Saga as a middleware and redux as a store

## Process

```
ES6 source files
       |
       |
    webpack
       |
       +--- babel, eslint
       |
  ready to use
     library
  in umd format
```
