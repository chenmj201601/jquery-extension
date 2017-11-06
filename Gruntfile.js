module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\n',
                banner: '/*! <%= pkg.name %> ( <%= pkg.version %> ) <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: ['src/BASE64.js', 'src/DateHelper.js','src/printarea.js','src/slimscroll.js','src/treetable.js','src/cookie.js'],
                dest: 'dist/jquery-extension.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/jquery-extension.js',
                dest: 'dist/jquery-extension.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'uglify']);
};