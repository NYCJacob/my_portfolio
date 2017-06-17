/**
 * Created by jsherman on 6/16/17.
 */

var gulp = require('gulp');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// browser-sync does not seem to load in load-plugins function
// these plugins do not seem to register with load-plugins
var concatCss = require('gulp-concat-css');


// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');

// css tasks  ******************************************
gulp.task('lint:sass',	function()	{
    return	gulp.src('src/sass/*.scss')
        .pipe(plugins.sassLint({
            //	Pointing	to	config	file '.scss-lint.yml'
            configFile: '.sassLint.yml'
        }));
});


gulp.task('sass',	function()	{
    return	gulp.src('src/sass/*.scss')
    // pass custom title to gulp-plumber error handler function
        .pipe(customPlumber('Error Running	Sass'))
        //	Initialize	sourcemap
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        //	Runs	produced	CSS	through	autoprefixer
        .pipe(plugins.autoprefixer())
        //	Writing	sourcemaps
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('src/css'))
        //	Tells	Browser	Sync	to	reload	files	task	is	done
        // browserSync not loaded by load-plugins
        .pipe(browserSync.reload({
            stream:	true
        }))
});

gulp.task('concatCss', function () {
    return gulp.src('src/css/*.css')
        .pipe(concatCss("css/styles.css"))
        .pipe(gulp.dest('dist'));
});

gulp.task('min-css', function() {
    return gulp.src('src/css/*.css', {base: 'src'})
        .pipe(concatCss("css/styles.min.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

