var gulp = require('gulp'),
    terminal = require('child_process'),
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init({
        proxy: 'localhost:5000'
    });
});

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({ script: 'back/app.js' })
        .on('start', function () {
            // to avoid nodemon being started multiple times
            // thanks @matthisk
            if (!started) {
                cb();
                started = true;
            }
        });

});

gulp.task('enb', function() {
    terminal.exec("enb make", {}, function(error,stdout,stderr){
         browserSync.reload();
    });
});

gulp.task('watch', function() {
    gulp.watch('front/**/*.styl', ['enb']);
    gulp.watch('front/**/*.js', ['enb']);
});

gulp.task('default', ['browser-sync', 'watch']);
