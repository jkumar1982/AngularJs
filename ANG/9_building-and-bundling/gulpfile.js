var gulp = require('gulp');
var clean = require('gulp-clean');
var bower = require('gulp-bower-files');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var angularTemplatecache = require('gulp-angular-templatecache');
var es = require('event-stream');
var minifyHtml = require('gulp-minify-html');
var ngMin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

var anyFile = '**/*';
var jsFiles = '**/*.js';
var jsSrcFiles = '**/!(*.spec).js';
var cssFiles = '**/*.css';
var htmlTemplateFiles = '**/*.tpl.html';
var paths = {
    src: 'app/',
    dist: 'dist/',
    distLib: 'dist/lib/',
    distApp: 'dist/app/',
    indexHtml: 'index.html',
    templatesJs: 'templates.js',
    appJs: 'app.js'
};

gulp.task('clean', function () {
    return gulp.src(paths.dist, {read: false})
        .pipe(clean());
});

gulp.task('build-app', function () {
    var angularTemplateCacheOptions = {
            module: 'app'
        },
        minifyHtmlOtions = {
            quotes: true,
            empty: true
        };

    return es.merge(
        gulp.src(paths.src + htmlTemplateFiles)
            .pipe(minifyHtml(minifyHtmlOtions))
            .pipe(angularTemplatecache(angularTemplateCacheOptions)),
        gulp.src(paths.src + jsSrcFiles))
        .pipe(angularFilesort())
        .pipe(concat(paths.appJs))
        .pipe(ngMin())
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(paths.distApp));
});

gulp.task('build-lib', function () {
    var jsFilesFilter = filter(jsFiles);
    var jsLibFolder = gulp.dest(paths.distLib + 'js/');
    var cssFilesFilter = filter(cssFiles);
    var cssLibFolder = gulp.dest(paths.distLib + 'css/');

    return bower()
        .pipe(flatten())
        .pipe(jsFilesFilter).pipe(jsLibFolder).pipe(jsFilesFilter.restore())
        .pipe(cssFilesFilter).pipe(cssLibFolder).pipe(cssFilesFilter.restore());
});

gulp.task('inject-index', ['build-app', 'build-lib'], function () {
    var cssLibFiles = gulp.src(paths.distLib + cssFiles, {read: false});
    var jsAppFiles = gulp.src(paths.distApp + jsFiles, {read: false});
    var injectOptions = {ignorePath: paths.distApp, addRootSlash: false};

    return gulp.src(paths.src + paths.indexHtml)
        .pipe(inject(cssLibFiles))
        .pipe(inject(jsAppFiles, injectOptions))
        .pipe(gulp.dest(paths.distApp));
});

gulp.task('build', ['build-app', 'build-lib', 'inject-index']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('dev', function () {
    gulp.watch(paths.src + anyFile, ['build']);
});
