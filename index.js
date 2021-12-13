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

fs.readFile(filename3, 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return
	}
	console.log(data);
})

// async version

try {
	const data = fs.readFileSync(filename3, 'utf8')
	console.log(data)
} catch (err) {
	console.error(err)
}

// file writing 

const content = `{ "content": "putting stuff in files!"}`

const filename4 = './data4.json'
fs.writeFile(filename4, content, { flag: 'w+' }, err => {
	if (err) {
		console.error(err)
		return
	}
	console.log('big success');
})

// async version 

// const content2 = `{ "content": "putting stuff in files asynchronously!"}`

// const filename5 = './test/data6.json'

// try {
// 	fs.writeFileSync(filename5, content2)
// } catch (err) {
// 	console.error(err)
// }

// appending tests 

// fs.appendFile(filename4, content2, err => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// })

// folder tests 
// const folderName1 = "./testb"

// fs.access(folderName1, (err) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log('huge success')
// })

// try {
// 	if (!fs.existsSync(folderName1)) {
// 		fs.mkdirSync(folderName1)
// 	}
// } catch (err) {
// 	console.error(err)
// }

// const readContent = fs.readdirSync(folderName1)

// console.log("read content", readContent[0])

// fs.readFile(`./test/${readContent[0]}`, 'utf8', (err, data) => {
// 	if (err) {
// 		console.error(err);
// 		return
// 	}
// 	console.log(data)
// })

// const readFile = fs.readdirSync(folderName1).map(fileName => {
// 	return path.join(folderName1, fileName)
// })

// console.log("Files read: ", readFile)

// readFile.map(currentFile => {
// 	console.log(`List of all the files in ${folderName1}`)
// 	fs.readFile(currentFile, 'utf8', (err, data) => {
// 		if (err) {
// 			console.error(err);
// 			return
// 		}
// 		console.log("Current file: ", data)
// 	})
// })

// // filtering the results 
// const folderName2 = `./test`

// const isFile = fileName => {
// 	return fs.lstatSync(fileName).isFile()
// }

// const filtered = fs.readdirSync(folderName2).map(fileName => {
// 	return path.join(folderName2, fileName)
// })
// 	.filter(isFile)
// console.log(`Filtered out paths: `, filtered)

// // next up, Rename folder!!

// fs.rename('./test', './test1', err => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// })

// throws error because not permitted, dont want to change that atm

// remove a folder 

const dir = './testb/'

fs.rmdir(dir, (err) => {
	if (err) {
		throw err
	}

	console.log(`${dir} is baleeted!`)
})