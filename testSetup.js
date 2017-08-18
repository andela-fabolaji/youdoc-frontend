/* eslint-disable no-var */
// Setup node environment
process.env.NODE_ENV = 'test';

// require babel-register to transpile
// es6 to es5
require('babel-register')();

// Disable es6 features that mocha doesn't understand
require.extensions['.css'] = function () { return null; };
require.extensions['.png'] = function () { return null; };
require.extensions['.jpg'] = function () { return null; };

// Mock browser environment

// 1. Configure jsdom
var js = require('jsdom');
var jsdom = new jsdom.JSDOM();

// 2. Setup global vars to simulate browser
/* eslint-disable no-var */
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef