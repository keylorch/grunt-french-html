
module.exports = function(grunt) {

  // Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 

    //Replace task
    replace: {
      dist: {
        options: {
          patterns: [
            {
              //Load replacements from Json file
              json: grunt.file.readJSON('config.json')
            }
          ],
          force: true,
          prefix: ''
        },
        files: [
          { expand: true, 
            flatten: true, 
            src: [grunt.option('file')], 
            //Use the same src as destination
            dest: function(){
              var path =  grunt.option('file');
              return path.substring(0, path.lastIndexOf('/'));
            }()
        }
        ]
      }
    }

  });

  // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};