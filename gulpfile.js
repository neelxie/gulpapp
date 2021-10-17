const gulp = require("gulp");
const imagemin = require('gulp-Imagemin');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// log a message

gulp.task("message", () => {
  return console.log("Gulp is running...");
});

// copy all HTML files
gulp.task('copyHtml', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', () => {
  gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});


gulp.task("default", () => {
  return console.log("Gulp is running...");
});
