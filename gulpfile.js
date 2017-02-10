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

gulp.task('zh', function() {
  gulp
    .src([
      'docs/zh-CN/*.html',
      'docs/zh-CN/**/*.html'
    ])
    .pipe(replace(
      '輸入並搜尋', 
      '输入并搜索'
    ))
    .pipe(replace(
      '本書使用 GitBook 釋出', 
      'vonic 2.0'
    ))
    .pipe(replace(
      'href="https://www.gitbook.com', 
      'href="https://github.com/wangdahoo/vonic'
    ))
    .pipe(gulp.dest('docs/zh-CN/'));
});

gulp.task('default', ['doc_index', 'zh'], function (cb) {
  console.log('process static files ok.');
  cb();
})
