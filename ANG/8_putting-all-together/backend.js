var port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.redirect('/app');
});

app.post('/rest/search', function (request, response) {
    var keyword = request.body.keyword;

    if (keyword) {
        var results = createResults(10, request.body.keyword);
        response.send({results: results});
    } else {
        response.send(500, {error: 'Keyword is required.'});
    }

    function createResults(count, keyword) {
        var results = [];

        for (var i = 0; i < count; i++) {
            results.push({
                id: i,
                title: 'Title for ' + keyword + ' ' + (i + 1)
            });
        }

        return results;
    }
});


console.log("Listening on port:", port);
app.listen(port);
