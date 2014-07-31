'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('startserver', function () {
  require('../server');
});

gulp.task('serve', ['startserver', 'watch'], function () {
  browserSync.instance = browserSync.init([
    'app/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/partials/**/*.html',
    'app/images/**/*'
  ], {
    proxy: 'localhost:3000'
  });
});
