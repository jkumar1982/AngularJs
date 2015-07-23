var port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.redirect('/app');
});

app.post('/processForm', function (request, response) {
    var formData = request.body;

    if (validate(formData)) {
        response.json(200, {message: 'Data processed successfully.', data: formData});
    } else {
        response.json(500, {error: 'Invalid data.', data: formData});
    }
});

function validate(formData) {
    var valid = formData.name && formData.surname;

    valid = valid && ((!formData.resident && !formData.canton) || (formData.resident && formData.canton));

    return valid;
}

console.log("Listening on port:", port);
app.listen(port);
