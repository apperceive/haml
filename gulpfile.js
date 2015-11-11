// gulpfile.js 
// Require the needed packages 
var gulp = require('gulp');
var haml = require('gulp-haml');

gulp.task('haml', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});
 
 
// Default gulp task to run 
gulp.task('default', function(){
  //gulp.watch('.haml/**/*.haml', ['haml']);
  gulp.start('haml');   // alternative to watch
});
 
