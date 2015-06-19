var gulp = require('gulp')
var babel = require('gulp-babel')
var print = require('gulp-print')
var rimraf = require('rimraf')

gulp.task('default', function() {
	return gulp.src('index.es6')
		.pipe(babel())
		.pipe(gulp.dest('.'))
})

gulp.task('clean', function(cb) {
	rimraf('index.js', function() {
		rimraf('out/', cb)
	})
})

gulp.task('test', [ 'default' ], function() {
	var put = require('./index.js')
	return gulp.src([
			'package.json',
			'**/*.txt'
			//'node_modules/gulp-util/node_modules/lodash.template/node_modules/lodash.templatesettings/LICENSE.txt'
		])
		.pipe(put('out'))
		.pipe(print())
})
