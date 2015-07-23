var port = 3000, express = require('express'), bodyParser = require('body-parser');

express()
    .use(express.static(__dirname))
    .use(bodyParser.json())
    .get('/', rootHandler)
    .post('/processForm', formHandler)
    .listen(port, logPortFunction(port));

function rootHandler(request, response) {
    response.redirect('/src');
}

function formHandler(request, response) {
    var formData = request.body;

    if (validate(formData)) {
        response.status(200).json({message: 'Data processed successfully.', data: formData});
    } else {
        response.status(500).json({error: 'Invalid data.', data: formData});
    }
}

function validate(formData) {
    var valid = formData.name && formData.surname;

    valid = valid && ((!formData.resident && !formData.canton) || (formData.resident && formData.canton));

    return valid;
}

function logPortFunction(port) {
    return function () {
        console.log('Listening on port:', port);
    };
}
