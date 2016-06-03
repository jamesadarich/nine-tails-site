// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'scripts',
    paths: {
      backbone: 'vendor/backbone/backbone-min',
      jquery: 'vendor/jquery/dist/jquery.min',
      marionette: 'vendor/backbone.marionette/lib/backbone.marionette.min',
      underscore: 'vendor/underscore/underscore-min',
      "nine-tails": 'vendor/nine-tails/dist/nine-tails'
    },
    shim: {
     "marionette": [
          "backbone",
          "underscore"
      ],
      backbone: [ "jquery" ]
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['start']);
