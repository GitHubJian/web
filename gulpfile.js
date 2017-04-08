// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('default', function () {
    console.log('开始构建项目');
});


gulp.task('startSass', function () {
    console.log('开始编译');
});

gulp.task('compileSass', function () {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('completeSass', ['startSass', 'compileSass'], function () {
    console.log('完成编译');
});

