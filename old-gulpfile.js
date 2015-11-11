// gulpfile.js 
// Require the needed packages 
var gulp = require('gulp');
var haml = require('gulp-haml');
 
 
// Get one .haml file and render 
gulp.task('one', function () {
  gulp.src('./haml/file.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});
 
 
// Get all .haml files in one folder and render 
gulp.task('folder', function () {
  gulp.src('./haml/blue/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./haml/blue'));
});
 
 
 
// Get and render all .haml files recursively 
gulp.task('haml', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./haml'));
});
 
 
 
// Options 
// Change file extension 
gulp.task('ext', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml({ext: '.php'}))
    .pipe(gulp.dest('./php'));
});
 

gulp.task('msshaml', function () {
  gulp.src('.haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});
 
 
// Default gulp task to run 
gulp.task('default', function(){
  //gulp.run('haml', 'ext', 'one');
  gulp.watch(['.haml/**/*.haml'], 'msshaml');
  // gulp.start('msshaml');
});
 
