require.config({
  paths: {
    jquery: '../vendor/jquery/jquery',
    underscore: '../vendor/underscore-amd/underscore',
    backbone: '../vendor/backbone-amd/backbone',
    handlebars: '../vendor/handlebars/handlebars.runtime',
    templates: '../templates/template'
  },
  shim: {
    'templates': 'handlebars'
  },
  urlArgs: (new Date()).getTime()
});

require(['app'], function(App) {
  return App.initialize();
});