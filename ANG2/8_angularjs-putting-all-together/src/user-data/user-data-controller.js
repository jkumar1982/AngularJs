angular.module('userData')
    .controller('UserDataController', UserDataController);

function UserDataController(masterDataService, userDataService, $routeParams) {
    const defaultResultHandler = (result) => {
        this.result = result;
    };

    this.cantons = [];
    this.result = undefined;
    this.userData = {};
    this.triedSubmitting = false;

    if ($routeParams.name) {
        userDataService.fetchUser($routeParams.name)
            .then((userData) => {
                this.userData = userData;
            })
            .catch(defaultResultHandler);
    }

    masterDataService().then((masterData) => {
        this.cantons = masterData.cantons;
    });

    this.showMessages = (formController) => {
        return this.triedSubmitting && formController.$invalid;
    };

    this.submit = (isDataValid) => {
        this.triedSubmitting = true;

        if (isDataValid) {
            userDataService.saveUser(this.userData).then(defaultResultHandler);
        }
    };
}
