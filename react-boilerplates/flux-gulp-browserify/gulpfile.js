/**
 * Gulp configuration file.
 */


var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


gulp.task('browserify', function() {
    browserify('./src/js/main.jsx')
        .transform('reactify') // transform JSX to JavaScript
        .bundle() // bundle all files together (actions, stores, etc...)
        .pipe(source('main.js'))
        // destination folder (doesn't need pre-creation);
        .pipe(gulp.dest('dist/js'))
});


gulp.task('copy', function() {

    // index HTML file
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    // css files
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));

    // js files
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));

});


gulp.task('default', ['browserify', 'copy'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
