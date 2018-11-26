/*

Steps to run locally -
Make sure you have gulp-cli installed globally
Run 'npm install' followed by 'gulp'
This will execute all the tasks sequentially and will put the results in build directory.

Contents of build folder created after executing above steps -
1. Copy of main-8-1.js file
2. styles.css - Compiled from styles.scss file
3. scripts.js - Created from the concatenation of two or more js files
4. sampletxt directory- having header/footer added to all the txt files
5. main.min.js - minification of js files

*/


var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var headerfooter = require('gulp-header-footer');

gulp.task('copy', function () {
    gulp.src('samplejs/main-8-1.js')
        .pipe(gulp.dest('build/'));
});

gulp.task('compile', function () {
    return gulp.src('samplescss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/'));
});

gulp.task('concat', function () {
    return gulp.src('samplejs/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('wrap', function () {
    gulp.src('sampletxt/*.txt')
        .pipe(headerfooter({
            header: 'SAMPLE HEADER\n',
            footer: '\nSAMPLE FOOTER',
            filter: function (file) {
                return true
            }
        }))
        .pipe(gulp.dest('build/sampletxt/'))

});

gulp.task('uglify', function () {
    return gulp.src(['samplejs/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['copy', 'compile', 'concat', 'wrap', 'uglify'])