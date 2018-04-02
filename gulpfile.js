"use strict"

const gulp = require('gulp');
const htmlbeautify = require('gulp-html-beautify');
const bs = require('browser-sync').create();
const htmlSources = './*.html';

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('htmlbeautify', function() {
    gulp.src(htmlSources)
      .pipe(htmlbeautify({indentSize: 2}))
      .pipe(gulp.dest('./'))
  });

  gulp.task('default', ['browser-sync', 'htmlbeautify']);