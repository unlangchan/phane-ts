let gulp = require('gulp');
let tslint = require('gulp-tslint');
let ts = require("gulp-typescript");
let runSequence = require("run-sequence");
let transform = require('vinyl-transform');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let browserify = require('browserify');


gulp.task('lint', () => {
    return gulp.src(['src/**/*.ts'])
        .pipe(tslint({ formatter: "verbose" }))
        .pipe(tslint.default.report());
});

gulp.task('tsc', () => {
    return gulp.src(['src/**/*.ts'])
        .pipe(ts.createProject("tsconfig.json")())
        .js.pipe(browserify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));

});

gulp.task('default', (cb) => runSequence('lint', 'tsc', cb))