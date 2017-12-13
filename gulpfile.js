const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('./dist/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./dist/gulp-babel'))
);