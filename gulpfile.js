"use strict";

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    bump = require('gulp-bump');

gulp.task('uglify', function () {
    gulp.src('./src/accesskey.js')
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename('accesskey.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bump', function (params) {
    gulp.src(['./package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
})

gulp.task('bump:minor', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'minor'
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('bump:major', function () {
    gulp.src(['./package.json'])
        .pipe(bump({
            type : 'major'
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('default', function () {
    gulp.watch([
        './src/accesskey.js'
    ], [
        'uglify'
    ]);
})