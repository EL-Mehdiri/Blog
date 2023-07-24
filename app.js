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
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// blog routes ---------------------

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        }).catch(err => console.log(err))
})


app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err))
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('details', { blog: result, title: 'Blog Details' }))
        .catch(err => console.log(err))
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        }).catch(err => console.log(err))
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blogs' })
})



// 404
app.use((req, res) => {
    res.render('404', { title: '404' })
})