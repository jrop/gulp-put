#gulp-put

[![Greenkeeper badge](https://badges.greenkeeper.io/jrop/gulp-put.svg)](https://greenkeeper.io/)

##Use

This plugin provides an intuitive interface for copying files to a destination directory, while preserving the original directory-structure (relative to `process.cwd()`).  Use like:

```
var put = require('gulp-put')

gulp.task('your-task', function() {
	return gulp.src([ 'your-source-globs-here' ])
		.pipe(put('.build'))
})
```

Done!

##Installation

`npm install --save-dev gulp-put` or `npm install --save-dev jrop/gulp-put`

##License

MIT License
Copyright (c) 2015 Jonathan Apodaca

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
