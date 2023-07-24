const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbUrl = 'mongodb+srv://mehdi:qwer1234@nodeblogs.mafbltd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUrl).then(() => {
    console.log("Connected to database");
    app.listen(3000);
}).catch((err) => {
    console.log(err)
})

app.set('view engine', 'ejs');


app.use(morgan('dev'))


app.use(express.static('public'))

app.get('/', (req, res) => {
    const blogs = [

    ];
    res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blogs' })
})



// 404
app.use((req, res) => {
    res.render('404', { title: '404' })
})