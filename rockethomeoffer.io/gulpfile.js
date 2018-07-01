const gulp = require('gulp');
const pug = require('gulp-pug');
const minifyCSS = require('gulp-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/views'))
});

gulp.task('css', function(){
  return gulp.src('public/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src('client/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', [ 'html', 'js' ]);