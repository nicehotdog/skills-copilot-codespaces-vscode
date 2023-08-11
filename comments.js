// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    {
        username: 'Tam',
        comment: 'Hello world'
    },
    {
        username: 'Huy',
        comment: 'Hello Tam'
    }
];

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        comments: comments
    });
});

app.get('/comments', (req, res) => {
    res.render('comments/index', {
        comments: comments
    });
});

app.get('/comments/create', (req, res) => {
    res.render('comments/create');
});

app.post('/comments/create', (req, res) => {
    comments.push(req.body);
    res.redirect('/comments');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));