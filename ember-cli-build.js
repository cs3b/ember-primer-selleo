/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {});

  app.import('node_modules/tachyons/css/tachyons.min.css');
  app.import('node_modules/pikaday/css/pikaday.css');

  app.import('node_modules/pikaday/pikaday.js');

  return app.toTree();
};
