angular.module('app')
    .factory('greeterService', greeterServiceFactory);

function greeterServiceFactory() {
    return greeterService;

    function greeterService(name) {
        return 'Hello ' + name + '!'
    }
}
