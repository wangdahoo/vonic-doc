var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('doc_index', function() {
  gulp.src('docs/index.html')
    .pipe(replace(
      '<a href="zh-CN/">2.0 - 中文</a>', 
      '<a href="zh-CN/">2.0 - 中文</a></li><li><a href="v1/">1.x</a>'
    ))
    .pipe(gulp.dest('docs/'));
});

gulp.task('zh_index', function() {
  gulp.src('docs/zh-CN/index.html')
    .pipe(replace(
      '輸入並搜尋', 
      '输入并搜索'
    ))
    .pipe(gulp.dest('docs/'));
});

gulp.task('default', ['doc_index', 'zh_index'], function (cb) {
  console.log('process static files ok.');
  cb();
})
