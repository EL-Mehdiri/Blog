const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

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