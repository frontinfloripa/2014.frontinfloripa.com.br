// Load Gulp and your plugins
var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    stylus      = require('gulp-stylus'),
    ghpages     = require('gh-pages'),
    path        = require('path'),
    fs          = require('fs'),
    args        = require('yargs').argv,
    template    = require('gulp-template'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber');

// Define paths
var paths = {
    styles: 'src/stylus/**/*',
    hbs:    ['src/*.hbs', 'src/data/*.json'],
    js:     'src/javascripts/**/*',
};

// Connect task
gulp.task('connect', connect.server({
    root: __dirname + '/dist',
    port: 5000,
    livereload: true,
    open: true
}));

// HTML task
gulp.task('html', function () {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

// Generate static html from json
gulp.task('template', function () {

    var speakersFile     = fs.readFileSync('./src/data/speakers.json');
    var speakersContent  = JSON.parse(speakersFile);

    gulp.src('./src/index.hbs')
        .pipe(template(speakersContent, {
            evaluate:    /\{\{(.+?)\}\}/g,
            interpolate: /\{\{=(.+?)\}\}/g,
            escape:      /\{\{-(.+?)\}\}/g
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

// Stylus task
gulp.task('stylus', function () {
    gulp.src('./src/stylus/*.styl')
        .pipe(plumber())
        .pipe(stylus({
            use: ['nib'], 
            //set: ['compress']
        }))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(connect.reload());
});

// Concat JS
gulp.task('scripts', function() {
    gulp.src([
            './src/javascripts/map.js', 
            './src/javascripts/main.js'
        ])
        .pipe(concat('all.js', {newLine: ';'}))
        .pipe(gulp.dest('./dist/assets/js/'))
});

// Deploy to gh-pages
gulp.task('deploy', function () {

    var version = null;

    if (args.t != undefined) {
        version = args.t;
    }

    ghpages.publish(path.join(__dirname, '/'), {
        add:     true,
        message: 'Deploy website',
        tag: version
    });
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(paths.styles, ['stylus']);
    gulp.watch(paths.hbs,    ['template', 'html']);
    gulp.watch(paths.js,     ['scripts']);
});

// Set 'gulp server' for development
gulp.task('server', ['connect', 'stylus', 'watch']);