import gulp from "gulp";
import ts from 'gulp-typescript';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cleanCompiledTs from 'gulp-clean-compiled-typescript';

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
    return gulp.src(['**/*.ts', 'typings/**/*.d.ts', '!node_modules/**/*.ts'])
        .pipe(sourceMaps.init())
        .pipe(ts(tsProject))
        .pipe(sourceMaps.write('', {
            sourceRoot: ' ',
            mapSources: (destPath) => '../' + destPath
        }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', ['ts'], function() {
    gulp.watch(['web/**/*.ts', 'test/**/*.ts'], ['ts']);
});

gulp.task('clean', () =>
    gulp.src('web/**/*.ts')
    .pipe(cleanCompiledTs()));

// Static server
gulp.task('browser-sync', ['ts'], function () {
    browserSync.init({
        server: {
            baseDir: ['web', 'node_modules']
        }
    });
    gulp.watch("src/**/*.ts", ['compile']);
    gulp.watch("web/**/*").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
