module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-node-inspector');

  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['lib/**/*.js', 'spec/**/*.spec.js'],
        tasks: ['test'],
        options: {
          livereload: true
        }
      }
    },
    shell: {
      unit_tests: {
        options: { stdout: true },
        command: 'jasmine-node --growl spec/'
      },
      integration_tests: {
        options: { stdout: true },
        command: 'jasmine-node --growl spec/api'
      }
    },
    jshint: {
       files: ['gruntfile.js', 'spec/**/*.js', 'lib/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          "curly": true,    // true: Require {} for every new block or scope
          "eqeqeq": true,   // true: Require triple equals (===) for comparison
          "immed": true,    // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
          "latedef": true,  // true: Require variables/functions to be defined before being used
          "newcap": false,   // true: Require capitalization of all constructor functions e.g. `new F()`
          "noarg": true,    // true: Prohibit use of `arguments.caller` and `arguments.callee`
          "sub": true,      // true: Tolerate using `[]` notation when it can still be expressed in dot notation
          "undef": true,    // true: Require all non-global variables to be declared (prevents global leaks)
          "boss": true,     // true: Tolerate assignments where comparisons would be expected
          "eqnull": true,   // true: Tolerate use of `== null`
          "node": true      // Node.js
        }
      }
      //all: ['spec/**/*.js', 'lib/**/*.js']
    },
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          nodeArgs: ['--debug'],
          env: {
            PORT: '5858'
          }
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost',
          'save-live-edit': true,
          'stack-trace-limit': 4
        }
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'node-inspector', 'watch', 'shell:unit_tests'],
        options: {
          logConcurrentOutput: true
        }
      },
      server: {
        tasks: ['nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    } 
  });
  grunt.registerTask('test', ['jshint', 'shell:unit_tests']);
  grunt.registerTask('server', ['concurrent:server']);
  grunt.registerTask('default', ['jshint', 'concurrent:dev']);
  //make sure you have 'grunt server' running in separate tab prior to integration
  grunt.registerTask('test_integration', ['shell:integration_tests']);
};