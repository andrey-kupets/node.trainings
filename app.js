const express = require('express');
const mongoose = require('mongoose');


const fs = require('fs');
const path = require('path');
const { config: { MONGO_URL, PORT } } = require('./config');

const app = express();

_connectDB();
// ------------- 1. Fs. Stream ------------------
// const file = require('./static/file');
// console.log(file); // log WHOLE file = const + log of required file
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

// ------------- 2. Express. Hbs (use for emails) --------------------
// const expressHbs = require('express-handlebars');
//
// app.use(express.static(path.join(process.cwd(), 'static')));
// app.set('view engine', '.hbs');
// app.engine('.hbs', expressHbs({ defaultLayout: false }));
// app.set('views', path.join(process.cwd(), 'static'));
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
//
// const users = [];
// const dbPath = path.join(process.cwd(), 'DB', 'users.json');
//
// // попадаем  в форму методом гет
// app.get('/login',(req, res) => {
//     res.render('login');
// });
//
// // форма направляет на этой же урле на "пост-вью", а с поста респонс перебрасывает нас на /юзерс
// app.post('/login', (req, res) => {
//     users.push(req.body);
//     // res.json('user is registered');
//     res.redirect('/users');
// });
//
// // app.get('/users', (req, res) => {
// //     res.render('users', {users});
// // });
// app.get('/users', (req, res) => {
//     fs.readFile(dbPath, (err, data) => {
//         if (err) console.log(err);
//         const users = JSON.parse(data.toString());
//         res.render('users', { users });
//     });
// });
//
// app.get('/register', (req, res) => {
//     res.render('register');
// });
//
// app.post('/register', (req, res) => {
//     const { body: { email }, body } = req;
//     fs.readFile(dbPath, (err, data) => {
//         if (err) console.log(err);
//         const users = JSON.parse(data.toString());
//         // const invalidUser = users.some((user) => user.email === email);
//         const invalidUser = users.filter((user) => user.email === email);
//
//         // if (invalidUser) {
//         if (invalidUser.length) {
//             res.redirect('/error');
//             return;
//         }
//
//         users.push(body);
//         fs.writeFile(dbPath, JSON.stringify(users), err1 => {
//             if (err1) console.log(err1);
//         });
//         res.redirect('/users');
//         console.log(invalidUser.length, 'invalidUser');
//         console.log(users, 'db');
//     });
//         console.log(body);
// });
//
// app.get('/error', (req, res) => {
//     res.render('error');
// })
//
// app.listen(PORT, () => {
//     console.log(`Port ${PORT} is being listened`);
// });

// ------------- 5. Mongoose ----------------------------
function _connectDB() {
    mongoose.connect(MONGO_URL);

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
