const gulp = require("gulp"),
series = require("gulp"),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
sass = require('gulp-sass')(require('sass'));

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// log a message

gulp.task("message", async () => {
  return console.log("Gulp is running...");
});

// copy all HTML files
gulp.task('copyHtml', async () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', async () => {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Compile Sass
gulp.task('sass', async () => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// concatinate all JS files
gulp.task('scripts', async () => {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task("default", gulp.series(["message", "copyHtml", "imageMin", "sass"]));

gulp.task("watch", async () => {
  gulp.watch('src/*.html', gulp.series(["copyHtml"]));
  gulp.watch('src/images/*', gulp.series(["imageMin"]));
  gulp.watch('src/sass/*.scss', gulp.series(["sass"]));
  gulp.watch('src/js/*.js', gulp.series(["scripts"]));
}
);
