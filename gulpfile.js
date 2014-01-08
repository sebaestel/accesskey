var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress', function() {
    gulp.src('./accesskey.js')
        .pipe(uglify())
        .pipe(rename('accesskey.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function(){
    gulp.run('compress');
})