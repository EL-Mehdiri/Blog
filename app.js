const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes');

const app = express();

const dbUrl = 'mongodb+srv://mehdi:qwer1234@nodeblogs.mafbltd.mongodb.net/node-blogs?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

//========================== routes 

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// blog routes 

app.use('/blogs', blogRouter);


// 404
app.use((req, res) => {
    res.render('404', { title: '404' })
})