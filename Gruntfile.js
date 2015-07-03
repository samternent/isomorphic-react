module.exports = function(grunt) {
  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    //
    // Dev watch taks
    //

    watch: {
      css: {
        files: [
          'src/styles/**/*.scss'
        ],
        tasks: ['sass'],
      },
      scripts: {
        files: [
          'src/scripts/**/*.coffee'
        ],
        tasks: ['browserify']
      }
    },

    //
    // Clean 'dist' folder
    //

    clean: {
      build: {
        src: ['dist']
      }
    },

    browserify: {

      app: {
        files: {
          'dist/build_app.js': [
            'src/scripts/**/*.coffee',
          ],
        },
        options: {
          transform: ['coffeeify'],
        }
      }
    },

    sass: {
      dist: {
        files: {
          'dist/build_app.css': 'src/styles/app.scss'
        }
      }
    },


    //
    // Build Coffee script
    //

    coffee: {
      build: {
        expand: true,
        options: {
          bare: true
        },
        cwd: 'src',
        src: ['**/*.coffee'],
        dest: 'dist',
        ext: '.js'
      }
    }
  });

  grunt.registerTask("dev", ["coffee", "watch"]);
  grunt.registerTask("bundle", ["clean", "coffee", "browserify", "sass"]);
};
