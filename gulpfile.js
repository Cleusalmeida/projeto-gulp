const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}


exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));

} 

exports.images = comprimeImagens;


