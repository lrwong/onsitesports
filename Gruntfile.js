module.exports = function(grunt) {
  var dotenv = require('dotenv');
  dotenv.load();
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');
  var apiKey = process.env.SHOPIFY_API;
  var pass = process.env.SHOPIFY_KEY;
 
  grunt.initConfig({
    // env : {
    //   options : {
    //     //Shared Options Hash
    //   },
    //   dev : {
    //     NODE_ENV : 'development',
    //     DEST     : 'temp'
    //   }
    // },
    shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
        api_key: apiKey,
        password: pass,
        url: "on-site-sports.myshopify.com",
        base: 'shop/',
        ThemeId: '', // you can find this id in the url to the theme in shopify editor like this : https://my-shopify.myshopify.com/admin/themes/4733339 . leave it empty to use Published theme
      }
    },
    watch: {
      shopify: {
        files: ['shop/**'],
        tasks: ["shopify"]
      }
    }

 
  });
  grunt.registerTask('default', ['shopify']);

 
};