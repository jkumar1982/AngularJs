var port = 3000, express = require('express'), bodyParser = require('body-parser'), users = require('./users');

express()
    .use(express.static(__dirname + '/../'))
    .use(bodyParser.json())
    .get('/', rootHandler)
    .get('/masterData', masterDataHandler)
    .get('/user/:name', userHandler)
    .post('/processForm', formHandler)
    .get('/users', usersHandler)
    .listen(port, logPortFunction(port));

function rootHandler(request, response) {
    response.redirect('/src');
}

function userHandler(request, response) {
    var name = request.params.name, user = findUser(users, name);

    if (user) {
        response.status(200).json(user);
    } else {
        response.status(500).json({error: 'Unknown user: "' + name + '".'});
    }
}

function usersHandler(request, response) {
    response.status(200).json(users);
}

function formHandler(request, response) {
    var formData = request.body;

    if (validate(formData)) {
        saveUser(users, formData);

        response.status(200).json({message: 'Data processed successfully.', data: formData});
    } else {
        response.status(500).json({error: 'Invalid data.', data: formData});
    }
}

function masterDataHandler(request, response) {
    var cantons = [
        {id: 'ZH', name: 'Zurich'},
        {id: 'BS', name: 'Basel-City'},
        {id: 'BE', name: 'Bern'},
        {id: 'other', name: 'Other'}
    ];

    response.status(200).json({cantons: cantons});
}

function validate(formData) {
    var valid = formData.name && formData.surname;

    valid = valid && ((!formData.resident && !formData.canton) || (formData.resident && formData.canton));

    return valid;
}

function findUser(users, name) {
    var index = findUserIndex(users, name);

    return index !== -1 ? users[index] : undefined;
}

function saveUser(users, user) {
    var index = findUserIndex(users, user.name);

    if (index !== -1) {
        users[index] = user;
    } else {
        users.push(user);
    }
}

function findUserIndex(users, name) {
    var index = 0;

    while (index < users.length && users[index].name !== name) {
        index++;
    }

    return index === users.length ? -1 : index;
}

function logPortFunction(port) {
    return function () {
        console.log('Listening on port:', port);
    };
}
