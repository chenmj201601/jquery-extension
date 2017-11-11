module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n',
                banner: '/*! <%= pkg.name %> ( <%= pkg.version %> ) <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js:{
                src:['src/BASE64.js',
                    'src/DateHelper.js',
                    'src/printarea.js',
                    //'src/slimscroll.js',
                    //'src/treetable.js',
                    'src/cookie.js'],
                dest:'dist/jquery.extension.js'
            },
            css:{
                src:['src/css/treetable.css',
                    'src/css/treetable.theme.default.css'],
                dest:'dist/jquery.extension.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/jquery.extension.js',
                dest: 'dist/jquery.extension.min.js'
            }
        },
        cssmin:{
            css:{
                src:'dist/jquery.extension.css',
                dest:'dist/jquery.extension.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.registerTask('default', ['concat', 'uglify','cssmin']);
};