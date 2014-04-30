module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'test/*.js'],
      justResult: ['result/*.js']
    },

    concat: {
      js: {
        src: ['test/*.js'],
        dest: 'result/all.js',
      },
      css: {
        src: ['test/*.css'],
        dest: 'result/all.css',
      },
    },

    uglify: {
      scripts: {
        files: {
          'result-min/all.min.js': ['result/all.js']
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('congato', ['concat:js', 'jshint:justResult', 'uglify']);


};