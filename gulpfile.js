var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', async function() {
  gulp.src(['./dist/**/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./distg'));
});