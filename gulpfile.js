var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var typescript = require('gulp-tsc');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    gulp.src(['src/**/*.ts'])
        .pipe(typescript({
            // out: 'main.js',
            module: 'amd',
            emitError: false,
            sourceMap: true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

// Static server
gulp.task('browser-sync', ['compile'], function () {
    browserSync.init({
        server: {
            baseDir: ['web', 'dist', 'node_modules'],
            routes: {
                '/src': 'src'
            }
        }
    });
    gulp.watch("src/**/*.ts", ['compile']);
    gulp.watch("web/**/*").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
