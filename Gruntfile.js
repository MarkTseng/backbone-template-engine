// Generated by CoffeeScript 1.6.1
(function() {

  module.exports = function(grunt) {
    grunt.initConfig({
      shell: {
        init: {
          command: 'test -d "assets/vendor" || bower install',
          options: {
            stdout: true,
            callback: function(err, stdout, stderr, cb) {
              console.log('Install bower package compeletely.');
              return cb();
            }
          }
        },
        build: {
          command: 'node node_modules/requirejs/bin/r.js -o build/self.build.js',
          options: {
            stdout: true
          }
        }
      },
      handlebars: {
        options: {
          namespace: 'Handlebars.templates',
          processName: function(filename) {
            return filename.replace(/assets\/templates\/(.*)\.handlebars$/i, '$1');
          }
        },
        compile: {
          files: {
            'assets/templates/template.js': ['assets/templates/*.handlebars']
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '.'
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    return grunt.registerTask('default', ['shell', 'handlebars', 'connect:server']);
  };

}).call(this);
