'use strict';
//require('./index.js');
module.exports = function (grunt) {
  grunt.initConfig({
     watch: {
      all: {
        files: ['./**/*.*'],
        tasks: ['myTask']
      },
      options:{
        livereload:true
      }
    }
  });

  grunt.registerTask('myTask', function() {
    console.log('there was a change');
  });
  grunt.registerTask('startServer', function() {
    require('./server.js');
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['startServer','watch']);
};