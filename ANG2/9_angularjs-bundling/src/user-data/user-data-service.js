export default function userDataServiceFactory($http) {
    const resultHandler = (response) => response.data;

    return {
        fetchUser(name) {
            return $http.get('/user/' + name).then(resultHandler, resultHandler)
        },
        saveUser(user) {
            return $http.post('/processForm', user).then(resultHandler, resultHandler)
        }
    };
}
