angular.module('app', ['ngMessages'])
    .controller('UserDataController', UserDataController)
    .factory('masterDataService', masterDataServiceFactory)
    .factory('userDataService', userDataServiceFactory);

function UserDataController(masterDataService, userDataService) {
    this.cantons = [];
    this.result = undefined;
    this.triedSubmitting = false;

    masterDataService().then((masterData) => {
        this.cantons = masterData.cantons;
    });

    this.showMessages = (formController) => {
        return this.triedSubmitting && formController.$invalid;
    };

    this.submit = (isDataValid) => {
        this.triedSubmitting = true;

        if (isDataValid) {
            const userData = {
                    name: this.name,
                    surname: this.surname,
                    resident: this.resident,
                    canton: this.canton
                },
                resultHandler = (result) => {
                    this.result = result;
                };

            userDataService(userData).then(resultHandler);
        }
    };
}

function masterDataServiceFactory($q) {
    const cantons = [
        {id: 'ZH', name: 'Zurich'},
        {id: 'BS', name: 'Basel-City'},
        {id: 'BE', name: 'Bern'},
        {id: 'other', name: 'Other'}
    ];

    return () => $q.when({cantons});
}

function userDataServiceFactory($http) {
    const resultHandler = (response) => response.data;

    return (userData) => $http.post('/processForm', userData).then(resultHandler, resultHandler);
}

angular.bootstrap(document.body, ['app']);
