var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('connect', function() {
    connect.server({
        root: 'web'
    });
});

gulp.task('html', function() {
    gulp.src('./web/*.html')
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./web/assets'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./web/assets'));
});

gulp.task('watch', function() {
    gulp.watch(['./web/*.html'], ['html']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('compress', function () {
            gulp.src('./src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('web/assets'));
});

gulp.task('minify-css', function () {
    return gulp.src('./web/assets/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./web/assets/min'))
});

gulp.task('default', ['connect', 'sass', 'js', 'watch', 'compress']);