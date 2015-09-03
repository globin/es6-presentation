/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  var base = grunt.option('base') || '.';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: true,
        modules: 'common',
        optional: ['es6.spec.blockScoping']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'js',
          src: ['**/*.es6.js'],
          dest: 'js',
          ext: '.js'
        }]
      }
    },
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: ['deamdify']
      },
      'build/module.js': [
        '!js/reveal*',
        'js/**/*.js',
        '!js/**/*.es6.js'
      ]
    },
    sass: {
      core: {
        files: {
          'build/reveal.css': 'node_modules/reveal.js/css/reveal.scss'
        }
      },
      themes: {
        files: [
          {
            expand: true,
            cwd: 'scss',
            src: ['*.scss'],
            dest: 'build',
            ext: '.css'
          }
        ]
      }
    },


    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      files: [ 'js/**/*.es6.js' ]
    },

    connect: {
      server: {
        options: {
          port: port,
          base: base,
          livereload: true,
          open: true
        }
      }
    },

    zip: {
      'es6.zip': [
        'node_modules/babel-core/browser-polyfill.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/highlightjs/highlight.pack.min.js',
        'index.html',
        'build/**',
        'lib/**',
        'plugin/**',
        'js/**/*.js'
      ]
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [ 'Gruntfile.js', 'js/reveal.js', 'js/*.es6.js' ],
        tasks: 'js'
      },
      css: {
        files: [ 'scss/*', 'Gruntfile.js' ],
        tasks: 'sass'
      },
      html: {
        files: [ 'index.html']
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  // Default task
  grunt.registerTask( 'default', [ 'sass', 'js' ] );

  // JS task
  grunt.registerTask( 'js', [ 'eslint', 'babel', 'browserify' ] );

  // Package presentation to archive
  grunt.registerTask( 'package', [ 'default', 'zip' ] );

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'default', 'connect', 'watch' ] );

  // Run tests
  grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

};
