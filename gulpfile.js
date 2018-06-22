var gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("dist/*.js", function() {
    browserSync.reload();
  })
});

gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify({
      ext:{
        src:'-debug.js',
        min:'.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./dist/'));
});


