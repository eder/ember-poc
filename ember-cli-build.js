/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    minifyJS: {
      enabled: true
    },
    minifyCSS: {
      enabled: true
    },
    amp: {
      css: '/assets/ember-poc.css',  // e.g.: "assets/my-amp-styles.css"

      // The index file will include the inlined the contents of the above CSS file
      // and appear with the given name in your output dir (e.g. `dist/`) alongside
      // your index.html file
      index: 'amp-index.html' // e.g.: "amp-index.html"
    },
    outputPaths: {
      app: {
        css: {
          amp: 'app/styles',
        }
      }
    },
    sassOptions: {
      includePaths: [
        'app/styles'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
