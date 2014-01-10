var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('compress', function () {
    "use strict";
    gulp.src('./accesskey.js')
        .pipe(uglify())
        .pipe(rename('accesskey.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
    "use strict";
    gulp.run('compress');
})