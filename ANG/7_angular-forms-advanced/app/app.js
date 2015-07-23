var app = angular.module('app', []);

function ServerError(message) {
    this.name = 'ServerError';
    this.message = 'Server error: ' + message;
}
ServerError.prototype = new Error();
ServerError.prototype.constructor = ServerError;

app.constant('ServerError', ServerError);

app.factory('$exceptionHandler', function ($log, $injector, ServerError) {
    return function (exception, cause) {
        if (exception instanceof  ServerError) {
            $injector.get('$rootScope').$emit('ServerError', exception)
        } else {
            defaultImplementation(exception, cause);
        }

        function defaultImplementation(exception, cause) {
            $log.error(exception, cause);
        }
    };
});
