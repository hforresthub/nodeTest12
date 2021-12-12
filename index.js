const fs = require('fs')
const path = require('path')

const filename1 = './data.json'

// open method 

fs.stat(filename1, (err, stats) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(stats)
})

fs.open(filename1, 'a+', (err, fd) => {

	fs.close(fd, (err) => {
	
	})
})

// openSync method 

const filename2 = './data2.json'

try {
	const stats = fs.statSync(filename2)
	console.log(stats)
	console.log(stats.isFile() ? `Its a file!` : 'It is NOT a file')
	console.log(stats.isDirectory() ? `Its a directory!` : 'It is NOT a directory')
	console.log(stats.isSymbolicLink() ? `Its a symbolic link!` : 'It is NOT a symbolic link')
	console.log(`The file size in bytes is: ${stats.size}`)

	const fs2 = fs.openSync(filename2, 'r')

	fs.close(fs2, (err) => {

	})
} catch (err) {
	console.error(err)
}

// path testing

const filename3 = './data3.json'

console.log("Path info: ", path.dirname(filename3), path.basename(filename3, path.extname(filename3)), path.extname(filename3))

console.log("Joined: ", path.join(path.dirname(filename3), '/', path.basename(filename3, path.extname(filename3)), path.extname(filename3)))

console.log(path.resolve('/temp', filename3))

console.log(path.normalize(filename3))

// file reading

