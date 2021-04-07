let gulp = require('gulp');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let sass = require('gulp-sass');



// function test(){
//     console.log('test');
// }

// exports.test = test;

//优化js任务
function fnJS(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

//优化css
// function fnCSS(){
//     return gulp.src('./src/sass/*.css')
//         .pipe(cssnano())
//         .pipe(rename({suffix : '.min'}))
//         .pipe(gulp.dest('./dist/css'))
// }

//sass
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

//优化图片
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//复制index.html
function fnCopyIndex(){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
}

//监听任务
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/*.html',fnCopyIndex);
    gulp.watch('./src/img/*jpg',fnImg);
    gulp.watch('./src/img/*png',fnImg);
}


exports.js = fnJS;
// exports.css = fnCSS;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.default = fnWatch;
exports.sass = fnSass;