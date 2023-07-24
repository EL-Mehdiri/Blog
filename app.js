const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

const app = express();

const dbUrl = 'mongodb+srv://mehdi:qwer1234@nodeblogs.mafbltd.mongodb.net/node-blogs?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');


app.use(express.static('public'))

app.use(morgan('dev'));

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog ',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })

    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});



app.get('/all-blogs', (req, res) => {
    Blog.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('64bed0e7c7230ebe197e7dec').then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})


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