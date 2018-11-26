/*

Steps to run locally -
Make sure you have grunt-cli installed globally
Run 'npm install' followed by 'grunt'
This will execute all the tasks sequentially and will put the results in build directory.

Contents of build folder created after executing above steps -
1. Copy of main-8-1.js file
2. styles.css - Compiled from styles.scss file
3. scripts.js - Created from the concatenation of two or more js files
4. sampletxt directory- having header/footer added to all the txt files
5. main.min.js - minification of js files

*/

module.exports = function (grunt) {

    const sass = require('node-sass');

    // Configuration
    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                cwd: 'samplejs',
                src: 'main-8-1.js',
                dest: 'build/'
            }
        },
        sass: {
            options: {
                implementation: sass
            },
            build: {
                files: {
                    'build/styles.css': 'samplescss/styles.scss'
                }
            }
        },
        concat: {
            js: {
                src: ['samplejs/*.js'],
                dest: 'build/scripts.js'
            }
        },
        fileWrap: {
            add: {
                header: 'SAMPLE HEADER\n',
                footer: '\nSAMPLE FOOTER',
                cwd: './',
                src: ['sampletxt/*.txt'],
                dest: 'build/'
            }
        },
        uglify: {
            build: {
                files: {
                    'build/main.min.js': ['samplejs/*.js']
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-file-wrap');
    grunt.loadNpmTasks('grunt-sass');

    // Register tasks
    grunt.registerTask('default', ['copy', 'sass', 'concat', 'fileWrap', 'uglify']);
};