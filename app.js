const express = require('express');

const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'dir', 'file.txt');

// fs.writeFile(filePath, 'JUSTICE', (err) => {
//     if (err) console.log(err);
// });

// fs.writeFile(process.cwd() + '/dir/file.csv', 'dust', (err) => {
//     if (err) console.log(err);
// });
//
//

const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(path.join(process.cwd(), '/dir', '/king.txt'));
// const writeStream = fs.createWriteStream(filePath); // make a file void anew

// for (let i = 0; i < 100000; i++) {
//     // fs.appendFile(filePath, 'COME \n', err => {
//     //     if (err) console.log(err);
//     // });
//     writeStream.write('turn \n');
// }


// fs.readFile(filePath, (err, data) => {
//     console.log(data);
// })

// readStream.on('data', chunk => console.log(chunk));
// readStream.on('end', () => console.log('end of streaming'));

// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// })

//or

readStream.pipe(writeStream);



