// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {

//     const num = _.random(0, 100);
//     console.log(num)

//     const greet = _.once(() => {
//         console.log('hello mehdi')
//     })
//     greet()


//     // set header content type

//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';

//     switch (req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/about-mehdi':
//             res.statusCode = 301;
//             res.setHeader('Location', '/about');
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     };
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end()
//         } else {
//             res.end(data)
//         }
//     })

// })

// server.listen(3000, 'localhost', () => {
//     console.log("listening on port 3000")
// })










// app.get('/about', (req, res) => {
//     // res.send('<h1>about page</h1>')
//     res.sendFile('./views/about.html', { root: __dirname });

// })


// // redirect

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// // 404
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// })