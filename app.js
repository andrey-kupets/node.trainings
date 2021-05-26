const express = require('express');
const expressHbs = require('express-handlebars');

// const file = require('./static/file');
// console.log(file); // log WHOLE file = const + log of required file

const fs = require('fs');
const path = require('path');
const { config: { PORT } } = require('./config');

// ------------- 1. Fs. Stream ------------------
// const filePath = path.join(process.cwd(), 'static', 'file.txt');
//
// fs.writeFile(filePath, 'JUSTICE', (err) => {
//     if (err) console.log(err);
// });
//
// fs.writeFile(process.cwd() + '/static/file.csv', 'dust', (err) => {
//     if (err) console.log(err);
// });
//
//
// const readStream = fs.createReadStream(filePath);
// const writeStream = fs.createWriteStream(path.join(process.cwd(), '/static', '/king.txt'));
// const writeStream = fs.createWriteStream(filePath); // make a file void anew
//
// for (let i = 0; i < 100000; i++) {
//     // fs.appendFile(filePath, 'COME \n', err => {
//     //     if (err) console.log(err);
//     // });
//     writeStream.write('turn \n');
// }
//
// fs.readFile(filePath, (err, data) => {
//     console.log(data);
// })
//
// readStream.on('data', chunk => console.log(chunk));
// readStream.on('end', () => console.log('end of streaming'));
//
// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// })
//or
// readStream.pipe(writeStre

// ------------- 2. Express. Hbs --------------------
const app = express();

app.use(express.static(path.join(process.cwd(), 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', path.join(process.cwd(), 'static'));

app.get('/login',(req, res) => {
    res.render('login');
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} is being listened`);
});
