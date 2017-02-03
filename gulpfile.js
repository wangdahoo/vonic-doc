var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default', function() {
  gulp.src('docs/index.html')
    .pipe(replace(
      '<a href="zh-CN/">中文</a>', 
      '<a href="zh-CN/">中文</a></li><li><a href="v1/">1.1 Doc</a>'
    ))
    .pipe(gulp.dest('docs/'));
});
