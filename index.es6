import * as fs from 'fs'
import { PluginError } from 'gulp-util'
import { mkdirp } from 'mkdirp'
import * as path from 'path'
import * as through from 'through2'

module.exports = (destinationDirectoryName) => {
	if (!destinationDirectoryName)
		throw new PluginError('gulp-put', 'Missing destination directory name!')

	let copyFile = (file, enc, cb) => {
		if (file.isNull())
			return cb(null, file)

		let relativePath = path.relative(process.cwd(), file.path)
		let destPath = path.join(destinationDirectoryName, relativePath)

		// console.log('mkdir -p', path.dirname(destPath))
		mkdirp(path.dirname(destPath), err => {
			if (err) {
				console.error(err)
				return cb(err, file)
			}

			// console.log('copying', file.path, 'to', destPath)
			fs.createReadStream(file.path)
				.pipe(fs.createWriteStream(destPath))
				.on('finish', err => cb(err, file))
		})
	}

	return through.obj(copyFile)
}
