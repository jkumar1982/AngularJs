export default function masterDataServiceFactory($http) {
    const resultHandler = (response) => response.data;

    return () => $http.get('/masterData').then(resultHandler);
};
