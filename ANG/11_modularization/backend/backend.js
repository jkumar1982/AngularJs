var port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var results = require('./results');
var categories = require('./categories');
var articles = require('./articles');
var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/../'));

app.get('/', function (request, response) {
    response.redirect('/app');
});

app.get('/rest/categories', function (request, response) {
    response.send(200, {categories: categories(request.get('X-Language'))});
});

app.post('/rest/search', function (request, response) {
    var keyword = request.body.keyword;

    if (keyword) {
        response.send(200, {results: results(10, request.body.keyword)});
    } else {
        response.send(500, {error: 'Keyword is required.'});
    }
});

app.get('/rest/articles', function (request, response) {
    response.send(200, {article: articles.get()});
});

app.post('/rest/articles', function (request, response) {
    var article = request.body.article;

    if (article.title && article.subtitle) {
        response.send(200, {article: articles.update(article)});
    } else {
        response.send(500, {error: 'Title and subtitle are required.'});
    }
});

console.log("Listening on port:", port);
app.listen(port);
