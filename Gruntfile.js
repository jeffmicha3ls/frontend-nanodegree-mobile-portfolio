/*
 After you have changed any settings for the responsive_images task,
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
//    uglify : {

//	     options : {
//		       banner : "/*! analytics.js file */\n"
//	     },
//	     build : {
//		       src : ["js/analytics.js"],
//		       dest : "js/analytics.min.js"
//	     }
//    },
    htmlmin: {
      dist: {
      options: {
      removeComments: true,
      collapseWhitespace: true
    },
      files: {
      'index.html': 'index_nonmin.html'
//      'views/pizza.html': 'views/pizza_nonmin.html'
    }
  }
}

//    imagemin: {
//      dist: {
//      options: {
//        optimizationLevel: 2
//      },
//      files: [{
//         expand: true,
//         cwd: 'views/images',
//         src: ['*.{png,jpg,gif}'],
//         dest: 'views/images/dest/'
//      }]
//      }
//      },
//      cssmin: {
//        minify: {
//          expand: true,
//          cwd: 'css/',
//          src: ['*.css', '!*.min.css'],
//          dest: 'css/',
//          ext: '.min.css'
//        }
//      }


    //responsive_images: {
      //dev: {
        //options: {
          //engine: 'im',
          //sizes: [{
            //width: 1600,
            //suffix: '_large_2x',
            //quality: 30
          //}]
        //},
        //files: [{
          //expand: true,
          //src: ['*.{gif,jpg,png}'],
          //cwd: 'images_src/',
          //dest: 'images/'
        //}]
      //}
    //},

    /* Clear out the images directory if it exists */
    //clean: {
      //dev: {
        //src: ['images'],
      //},
    //},

    /* Generate the images directory if it is missing */
    //mkdir: {
      //dev: {
        //options: {
          //create: ['images']
        //},
      //},
    //},

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    //copy: {
      //dev: {
        //files: [{
          //expand: true,
          //src: ['images_src/fixed/*.{gif,jpg,png}'],
          //dest: 'images/',
          //flatten: true,
        //}]
      //},
    //},

  });

  //grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['htmlmin']);
  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-mkdir');
  //grunt.registerTask('default', ['clean', 'uglify', 'mkdir', 'copy', 'responsive_images']);

};
