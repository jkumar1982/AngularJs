angular.module('userList')
    .factory('userListService', userListServiceFactory);

function userListServiceFactory($http) {
    const resultHandler = response => response.data,
        errorHandler = error => {
            alert(error);
        };

    return (userDataItems) => $http.get('/users', userDataItems)
        .then(resultHandler)
        .catch(errorHandler);
}
